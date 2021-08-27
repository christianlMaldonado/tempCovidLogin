import React, { useState } from "react";
import "../Pages/NameForm.css";
import { Button } from 'react-bootstrap';
import Logo from '../Components/Images/Logo1.png'

export default function Form () {
    const [user, setUser] = useState({ employeeName: "", email: "", date: "", signature: "", site: "" , });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        // Alerts not working right
        // alert("Form submitted as: " + this.state.text + this.state.email + this.state.date )
        e.preventDefault();
        console.log("Form Submitted", user);
    };

    console.log('value');

    return (
        <div className="formField">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <img src={Logo} alt="Logo" />
                    <h1 className="selfCheckTitle"> COUNTY OF MONTEREY </h1>
                    <h1 className="selfCheckTitle"> EMPLOYEE COVID-19 SELF SCREENING ASSESSMENT FORM </h1>
                    <p> Pursuant to the Human Resources Emergency Response Manual Section 21Temperature Testing and
                        Self-Screening Assessment for new Symptoms Associated with COVID-19, County employees are
                        <b> REQUIRED </b> tocomplete a self-screening assessment prior to entering any countyfacility
                        or worksite.<b> This form shall be completed by employees who elected not to access
                        and complete the online self-screening assessment options provided by the county. Once complete.
                        please provide this self-screening assessment form to your supervisor/manager.
                        </b>
                    </p>
                    <br />
                    <label htmlFor="employeeName">Full Name : </label>
                    {" "}
                    <input
                        type="text"
                        name="employeeName"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <label htmlFor="email">Email : </label>
                    {" "}
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <br/> <br/> 
                    <p><b><u> Employee Temperature Assessment: </u></b></p>
                    <p> I have been tested with a thermometer and my temperature is less than 100.4 degrees Fahrenheit
                        (Check the applicable answer):
                    </p>
                    <select>
                        <option selected value="">
                            {" "}
                        </option>
                        <option value="Yes">Yes</option>
                        console.log(value);
                        <option value="No">No</option>
                    </select>
                    <br/> <br/> 
                    <p> If you answered "Yes," proceed to the Symptom Self-Screening Assessment section below of this form
                        (Symptom Self-Screening Assessment #1). If you answered "No," skip to and complete the employee
                        signature section of this form and contact your supervisor immediately for further direction.
                    </p>
                    <p><b><u> Symptom Self-Screening Assessment: </u></b></p>
                    <p> 1. Do you feel ill or are you in daily contact with someone who has tested positive for COVID-19?
                         (Choose the applicable answer)
                    </p>
                    <select>
                        <option selected value="">
                            {" "}
                        </option>
                        <option value="Yes">Yes</option>
                        console.log(value);
                        <option value="No">No</option>
                    </select>
                    <p> If you answered "Yes," proceed to question 2. If you answered "No," skip to and complete the 
                        employee signature section of this form, and proceed to your worksite. 
                    </p>
                    <p> 2. Are you experiencing any of these {" "} <b> <u> NEW</u> </b> {" "} symptoms {" "} 
                        <b>{" "} <u> NOT</u> </b> associated with any other health condition? (check all that apply)
                    </p>

                    <select>
                        <option selected value="">{" "}</option>
                        <option value="Congestion"> Congestion or runny nose </option>
                        <option value="Cough">Cough, shortness of breath or difficulty breathing{" "}</option>
                        <option value="Nausea">Nasuea, vomitting or diarrhea</option>
                        <option value="Fatigue">Fatigue</option>
                        <option value="Fever">Fever or chills</option>
                        <option value="Headache">Headache, muscle or body aches</option>
                        <option value="lossTaste">Loss of taste or smell</option>
                        <option value="Throat">Sore throat</option>
                        <option value="NoSymptoms"> I am not Experiencing any of the listed symptoms</option>
                    </select>

                    <p> If you checked the box for any of the listed symptoms, complete the employee signature section
                        below and contact your supervisor immediately for further direction.{" "} <b> {" "} If you are not 
                        experiencing any of the symptoms above, complete the employee signature section below, proceed to
                        your worksite and provide this signed form to your supervisor/manager upon arrival </b>
                    </p>
                    <p> By signing below, I certify that my response above are accurate to the
                        best of my knowledge.
                    </p>
                    <label htmlFor="signatue"> Signature: </label>
                    <input
                        type="text"
                        name="signature"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {" "}
                    <label htmlFor="date"> Date: </label>
                    <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {/* This is for File Submission
                    <input type="file" variant="dark" /> */}
                    <br/><br/>
                    <label htmlFor="site"> Department/Worksite Location: </label>
                    <input 
                        text="text"
                        name="site"
                        onChange={handleChange}
                        autocomplete="off"
                    />
                    <br/><br/>
                    <div className="submit-btn">
                        <Button variant="dark" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}