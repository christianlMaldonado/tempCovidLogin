import React from "react";
import "./NameForm.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "test", email: "atest@test", number: "7357" };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.text,
      email: e.target.email,
      number: e.target.number,
    });
  };

  handleSubmit = (e) => {
    alert(
      "Text was just submitted: " +
        this.state.email +
        this.state.email +
        this.state.number
    );
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="formField" onSubmit={this.handleSubmit}>
          <h1 className="selfCheckTitle"> COUNTY OF MONTEREY </h1>
          <h1 className="selfCheckTitle">
            {" "}
            EMPLOYEE COVID-19 SELF SCREENING ASSESSMENT FORM{" "}
          </h1>
          <p>
            Pursuant to the Human Resources Emergency Response Manual Section 21
            Temperature Testing and Self-Screening Assessment for new Symptoms
            Associated with COVID-19, County employees are <b>REQUIRED</b> to
            complete a self-screening assessment prior to entering any county
            facility or worksite.
            <b>
              {" "}
              This form shall be completed by employees who elected not to
              accesss and complete the online self-screening assessment options
              provided by the county. Once complete. please provide this
              self-screening assessment form to your supervisor/manager.
            </b>
          </p>
          <label>
            {" "}
            Employee Name :
            <input
              type="text"
              text={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Employee Email Address
            <input
              type="email"
              email={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <p>
            {" "}
            <b>
              {" "}
              <u> Employee Temperature Assessment </u>
            </b>
          </p>
          <p>
            I have been tested with a thermometer and my temperature is less
            than 100.4 degrees Fahrenheit (Check the applicable answer):
          </p>
          <select>
            <option selected value="">
              {" "}
            </option>
            <option value="Yes">Yes</option>
            console.log(value);
            <option value="No">No</option>
          </select>
          <p>
            If you answered "Yes," proceed to the Symptom Self-Screening
            Assessment section below of this form (Symptom Self-Screening
            Assessment #1). if you answered "No," skip to and complete the
            employee signature section of this form and contact your supervisor
            immediatley for further direction.
          </p>
          <p>
            <b>
              {" "}
              <u> Symptom Self-Screening Assessment: </u>
            </b>
          </p>
          <p>
            1. Do you feel ill or are you in daily contact with someone who has
            tested positive for COVID-19? (Choose the applicable answer
          </p>
          <select>
            <option selected value="">
              {" "}
            </option>
            <option value="Yes">Yes</option>
            console.log(value);
            <option value="No">No</option>
          </select>
          <p>
            If you answered "Yes," proceed to question 2. If you answered "No,"
            skip to and complete the employee signature section of this form,
            and proceed to your worksite
          </p>
          <p>
            2. Are you experiencing any of these{" "}
            <b>
              <u> NEW </u>
            </b>{" "}
            symptoms{" "}
            <b>
              {" "}
              <u> NOT </u>
            </b>
            associated with any other health condition? (check all that apply)
          </p>
          <select>
            <option selected value="">
              {" "}
            </option>
            <option value="Congestion"> Congestion or runny nose </option>
            console.log(value);
            <option value="Cough">
              Cough, shortness of breath or difficulty breathing{" "}
            </option>
            <option value="Nausea">Nasuea, vomitting or diarrhea</option>
            <option value="Fatigue">Fatigue</option>
            <option value="Fever">Fever or chills</option>
            <option value="Headache">Headache, muscle or body aches</option>
            <option value="lossTaste">Loss of taste or smell</option>
            <option value="Throat">Sore throat</option>
            <option value="NoSymptoms">
              I am not Experiencing any of the listed symptoms
            </option>
          </select>
          <p>
            If you checked the box for any of the listed symptoms, complete the
            employee signature section below and contact your supervisor
            immediately for further direction.{" "}
            <b>
              {" "}
              If you are not experiencing any of the symptoms above, complete
              the employee signature section below, proceed to your worksite and
              provide this signed form to your supervisor/manager upon arrival
            </b>
          </p>
          By signing below, I certify that my response above are accurate to the
          best of my knowledge.
          <label>
            {" "}
            Employee signature :
            <input
              type="text"
              text={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Date :
            <input
              type="number"
              number={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Department/Worksite Location :
            <input
              type="text"
              text={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default NameForm;
