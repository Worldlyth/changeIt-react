import React from "react"
import "../FormInput/formInput.css"
import { useState } from "react"

export const FormInput = ({ id, label, type, placeholder }) => {
  const [field, setField] = useState({
    value: "",
    style: "item__field",
    error: "",
  })

  let errorMessage

  function validate(e) {
    const regCapitalized = /^[A-Z\s]*$/
    const regName = /^[a-zA-Z\s]*$/
    const fieldValue = e.target.value

    if (!regName.test(fieldValue)) {
      setError(" contained only letters")
    } else if (!regCapitalized.test(fieldValue.charAt(0))) {
      setError("capitalized")
    } else if (!fieldValue) {
      setError("filled")
    } else if (fieldValue.length < 3) {
      setError(" more than 3 letters")
    } else {
      setCorrect()
    }
  }

  const setError = (message) => {
    setField(field.error = message, field.style = 'field-error')
    errorMessage = `*${label} must be ${field.error}`
  }

  const setCorrect = () => {
    setField((prev) => ({
      ...prev,
      firstName: { ...prev.firstName, style: "field-correct", error: "" },
    }))
  }

  const fieldHandler = (e) => {
    setField((prev)=> ({...prev, value: e.target.value}))
  }

  const reset = () => {
    setField((prev) => ({
      ...prev,
      firstName: { ...prev.firstName, style: "item__field", error: "" },
    }))
  }

  return (
    <div className="form__item">
      <label htmlFor={id} className="item__label">
        {label}
      </label>
      <input
        className={field.style}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={fieldHandler}
        value= {field.value}
        onBlur ={validate}
        onFocus = {reset}
      />
      <div className="error-text">{errorMessage}</div>
    </div>
  )
}
