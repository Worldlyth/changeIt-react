import React from "react"
import { useState } from "react"
import { FormInput } from "./FormItems/FormInput/FormInput"
import { FormSelect } from "./FormItems/FormSelect/FormSelect"
export const Form = () => {
  const [field, setField] = useState({
    firstName: {
      value: "",
      style: "item__field",
      error: "",
    },
    // lastName: "",
    // email: "",
    // lifeEvent: "",
    // lifeEventDate: "",
  })

  function validate(e) {
    const regCapitalized = /^[A-Z\s]*$/
    const regName = /^[a-zA-Z\s]*$/

    if (!regName.test(e.target.value)) {
      setField((prev) => ({
        ...prev,
        firstName: {
          ...prev.firstName,
          style: "field-error",
          error: " contained only letters",
        },
      }))
    } else if (!regCapitalized.test(e.target.value.charAt(0))) {
      setField((prev) => ({
        ...prev,
        firstName: {
          ...prev.firstName,
          style: "field-error",
          error: "capitalized",
        },
      }))
    } else if (!e.target.value) {
      setField((prev) => ({
        ...prev,
        firstName: { ...prev.firstName, style: "field-error", error: "filled" },
      }))
    }
  }

  const handleFirstName = (e) => {
    setField((prev) => ({
      ...prev,
      firstName: { ...prev.firstName, value: e.target.value },
    }))
  }

  const reset = () => {
    setField((prev) => ({
      ...prev,
      firstName: { ...prev.firstName, style: "item__field", error: "" },
    }))
  }

  return (
    <form className="checklist__form bg_white" onSubmit={validate}>
      <FormInput
        className={field.firstName.style}
        type="text"
        placeholder="Enter your First Name"
        id="firstName"
        label="First Name"
        onChange={handleFirstName}
        value={field.firstName.value}
        onBlur={validate}
        onFocus={reset}
        error={field.firstName.error}
      />

      <FormInput
        className="item__field"
        type="text"
        placeholder="Enter your Last Name"
        id="lastName"
        label="Last Name"
        onChange={(e) => setField({ ...field, lastName: e.target.value })}
        value={field.lastName}
      />

      <FormInput
        className="item__field"
        type="text"
        placeholder="Enter your Email"
        id="email"
        label="Email"
        onChange={(e) => setField({ ...field, email: e.target.value })}
        value={field.email}
      />

      <FormSelect
        label="Life Event"
        id="lifeEvent"
        onChange={(e) => setField({ ...field, lifeEvent: e.target.value })}
        value={field.lifeEvent}
      />

      <FormInput
        className="item__field"
        type="text"
        placeholder="DD.MM.YYYY"
        id="lifeEventDate"
        label="Life Event Date"
        onChange={(e) => setField({ ...field, lifeEventDate: e.target.value })}
        value={field.lifeEventDate}
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
