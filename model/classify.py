from flask import Flask, request, make_response, jsonify
from flask_cors import CORS 
# from keras.models import load_model
# from PIL import Image
import numpy as np
app = Flask(__name__)
CORS(app)

# model = load_model(r'./DR_14.h5', compile = True)


@app.route('/classify', methods=["POST"])
def index():
    print(request.files)
    recieved = request.files['file']
    recieved.save('./'+recieved.filename)
    return jsonify({
        'success': True,
        'file':recieved.filename
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)