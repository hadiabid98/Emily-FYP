import React, { Profiler, useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
function Profile() {

    const [getid, setid] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getContact, setContact] = useState("");
    const [getGender, setGender] = useState("");
    const [getOccupation, setOccupation] = useState("");
    const [getfirstName, setfirstName] = useState("");
    const [getlastName, setlastName] = useState("");
    const [getCountry, setCountry] = useState("");
    const [getDOB, setDOB] = useState("");
    const [getAge, setAge] = useState("");

    return (
        <div className="div" >
            <Header />
            <div className="dialog_box_profile">
                <span>USERNAME</span>
                <hr></hr>
                <label >USER ID:</label>
                <label >FIRST NAME:</label>
                <label>LAST NAME:</label>
                <br></br>
                <input placeholder="hadiabid01" type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <input type='text' value={getfirstName} onChange={(data) => { setfirstName(data.target.value) }} />
                <input type='text' value={getlastName} onChange={(data) => { setlastName(data.target.value) }} />
                <br></br>
                <label >EMAIL ADDRESS:</label>
                <label >CONTACT NO:</label>
                <label>COUNTRY:</label>
                <br></br>
                <input placeholder="hadi98abid@gmail.com" type='text' value={getEmail} onChange={(data) => { setEmail(data.target.value) }} />
                <input placeholder="+92 314 536 8976" value={getContact} onChange={(data) => { setContact(data.target.value) }} />
                <select value={getCountry} onChange={(data) => { setCountry(data.target.value) }}>
                    <option value={getCountry}>Select option</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                </select>
                <br></br>
                <br></br>
                <label >GENDER:</label>
                <label >OCCUPATION:</label>
                <br></br>
                <input type="radio" name="gender" value="MALE" onChange={(data) => { setGender(data.target.value) }} />MALE
                <input type="radio" name="gender" value="FEMALE" onChange={(data) => { setGender(data.target.value) }} />FEMALE
                <input type="radio" name="gender" value="NON BINARY" onChange={(data) => { setGender(data.target.value) }} />NON BINARY
                <select value={getOccupation} onChange={(data) => { setOccupation(data.target.value) }}>
                    <option value="Select Options">Select option</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                </select>
                <br></br>
                <label >DATE OF BIRTH:</label>
                <label >AGE:</label>
                <br></br>
                <select value={getDOB} onChange={(data) => { setDOB(data.target.value) }}>
                    <option value="Month">Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                </select>
                <select value={getDOB} onChange={(data) => { setDOB(data.target.value) }}>
                    <option value="Day">Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <br></br>
                <select value={getDOB} onChange={(data) => { setDOB(data.target.value) }}>
                    <option value="Year">Year</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                </select>
                <input type="text"  value={getAge} onChange={(data) => { setAge(data.target.value) }} />

            </div>
        </div>
    )

}
export default Profile;