import React from 'react';
import './Form.css';

class Component extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 'test',
      email: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
            name: e.target.text,
            email: e.target.email
        }
    )
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    alert('Text was just submitted: ' + this.state.text)
    console.log('test')
    this.setState
    ({
        text: 'text',
        email: 'email'}
    )
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input  type="text" text={this.state.text} onChange={this.handleOnChange}/>
          <p> Employee Name </p>
          <input  type='email' email={this.state.email} onChange={this.handleOnChange}/>
          <p> Employee Email Address </p>
        </form>



        <input type="submit"/>

      </div>
    )
  }
}
export default Component
