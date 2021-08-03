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

            <label> Employee Email Address
            <input type='email' email={this.state.email} onChange={this.handleChange}/>
            </label> 
           
            <p> <b> <u> Employee Temperature Assessment </u></b></p>
            <p> I have been tested with a thermometer and my temperature is less than 100.4 degrees Fahrenheit (Check the applicable answer): </p>
            <select> 
              <option selected value=""> </option>
                <option value="Yes">Yes</option>
                console.log(value);
                <option value="No">No</option>
            </select>    

         
          <input type="submit" value="Submit" />
       
        </form>

      </div>
    )
  }
}
export default NameForm;
