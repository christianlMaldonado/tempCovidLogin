import React from 'react';
import './NameForm.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'test', email: 'test 2' };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.text, email: e.target.email }
    )
  }

  handleSubmit = (e) => {
    alert('Text was just submitted: ' + this.state.email + this.state.email)
    e.preventDefault()
  }

  render() {
    return(
      <div>
        
        <form className='formField' onSubmit={this.handleSubmit}>
           
            <label>  Employee Name :  
            <input type="text" text={this.state.text} onChange={this.handleChange} />
            </label>

            <br/> 

            <label> Employee Email Address
            <input type='email' email={this.state.email} onChange={this.handleChange}/>
            </label> 
           
            <p> <b> <u> Employee Temperature Assessment </u></b></p>
            <p>
              I have been tested with a thermometer and my temperature is less than
              100.4 degrees Fahrenheit (Check the applicable answer):
            </p>
            <select> 
              <option selected value=""> </option>
                <option value="Yes">Yes</option>
                console.log(value);
                <option value="No">No</option>
            </select>    

            <p> 
              If you answered "Yes," proceed to the Symptom Self-Screening Assessment
              section below of this form (Symptom Self-Screening Assessment #1). if you
              answered "No," skip to and complete the employee signature section of this
              form and contact your supervisor immediatley for further direction.
            </p>
            
            <p><b> <u> Symptom Self-Screening Assessment: </u></b></p> 
            <p>1. Do you feel ill or are you in daily contact with someone who has tested
               positive for COVID-19? (Choose the applicable answer</p> 
            <select> 
              <option selected value=""> </option>
                <option value="Yes">Yes</option>
                console.log(value);
                <option value="No">No</option>
            </select>   
          
          <p>
             If you answered "Yes," proceed to question 2. If you answered "No," skip
             to and complete the employee signature section of this form, and proceed 
             to your worksite
          </p> 

          <p>
              2. Are you experiencing any of these <b><u> NEW </u></b> symptoms <b> <u> NOT </u></b> associated with any other health condition? 
          </p>
         
         <input type="submit" value="Submit" />
       
        </form>

      </div>
    )
  }
}
export default NameForm;
