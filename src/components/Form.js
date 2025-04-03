import "./formStyle.css";
import React from 'react'

const Form = () => {
  return (
   <div className="form">
    <form>
      <label>Your Name</label>
      <input type="text"></input>
      <label>Your email</label>
      <input type="email"></input>
      <label>Your contact</label>
      <input type="number"></input>
      <label>Message</label>
     <textarea rows="6" placeholder="type yoour message here"/>
     <button className="btn">submit</button>
      
    </form>
   </div>
  )
}

export default Form;