import os
import glob
import csv
from flask import Flask, render_template, request, jsonify
from numpy.lib.npyio import load
from werkzeug.utils import secure_filename
from spectrogram import plotstft
import numpy as np
from keras.models import load_model

UPLOAD_FOLDER = r'/uploads'
ALLOWED_EXTENSIONS = 'wav'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
model = load_model(r'C:\Users\Abdul Hadi\Desktop\Emily\Project\emily\model\cnn_emily_0.49367.h5', compile=True) 

@app.route('/')
def index():
    return render_template('index.html')

def preprocess(X):
    """
    Convert from float64 to float32 and normalize normalize to decibels
    relative to full scale (dBFS) for the 4 sec clip.
    """
    X1 = X.astype('float32')

    X_train = np.array([(X - X.min()) / (X.max() - X.min()) for X in X1])
    return X_train

@app.route('/classify', methods=['POST'])
def upload_file():
    #  if user has submitted the audio file
    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            # save wav file  to static/audio_uploads temporarily
            file.save(filename)

            # save spectrogram to static/spectrograms
            png_filename = os.path.splitext(filename)[0]+'.png'

            # plot spectrogram and return matrix
            spec_matrix = plotstft(filename)
            x = preprocess(spec_matrix)
            prediction = model.predict(spec_matrix)
            print(prediction)
            label = prediction.argmax(axis=-1).tolist()

            os.remove(filename)  # delete wav file
            return jsonify({
                'label':label
            })



@app.route('/thankyou', methods=['POST'])
def complete_survey():
    if request.method == 'POST':  # and survey filled out
        form = request.form
        if len(form.keys()) == 8:  # if form complete
            phq8_score = sum((int(j) for j in form.values()))

            # get the newest spectrogram upload to associate with depression label
            list_of_files = glob.glob('static/spectrograms/*.png')
            newest_partic = max(list_of_files, key=os.path.getctime)
            partic_id = os.path.split(newest_partic)[1]  # get file filename

            # append spectrogram identifier and phq8_score to csv
            fields = [partic_id, phq8_score]
            with open('dep_log.csv', 'a') as f:
                writer = csv.writer(f)
                writer.writerow(fields)

            return render_template('thankyou.html')
        else:
            return render_template('survey.html', spectrogram='static/img/oops.png', completion_status='You did not fill in all the responses. Please complete the survey.')


@app.route('/contact')
def results():
    return render_template('contact.html')


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True, threaded=True)
