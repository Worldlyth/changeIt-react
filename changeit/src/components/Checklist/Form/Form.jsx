import React from "react"
import { useState } from "react"
import { FormInput } from "./FormItems/FormInput/FormInput"
import { FormSelect } from "./FormItems/FormSelect/FormSelect"

export const Form = () => {

const [field, setField] = useState ({
  firstName: '',
  lastName:'',
  email:'',
  select:'',
  lifeEventDate:''
})

  function validate(e) {
    e.preventDefault()
  }

  return (
    <form className="checklist__form bg_white" onSubmit={validate}>
      <FormInput
        type="text"
        placeholder="Enter your First Name"
        id="firstName"
        label="First Name"
        onChange={e => setField({...field, firstName: e.target.value})}
        value = {field.firstName}
      />

      <FormInput
        type="text"
        placeholder="Enter your Last Name"
        id="lastName"
        label="Last Name"
        onChange={e => setField({...field, lastName: e.target.value})}
        value = {field.lastName}
      />

      <FormInput
        type="text"
        placeholder="Enter your Email"
        id="email"
        label="Email"
        onChange={e => setField({...field, email: e.target.value})}
        value = {field.email}
      />

      <FormSelect label="Life Event" id="lifeEvent" />

      <FormInput
        type="text"
        placeholder="DD.MM.YYYY"
        id="lifeEventDate"
        label="Life Event Date"
        onChange={e => setField({...field, lifeEventDate: e.target.value})}
        value = {field.lifeEventDate}
      />

      <div className="form__notice">
        <span className="span-grey">
          By submitting your details you agree with our &nbsp;
          <span className="span-line">
            <a href="#privacy">Privacy Policy.</a>
          </span>
        </span>
      </div>

      <input type="submit" value="Download" className="form__button" />
    </form>
  )
}
