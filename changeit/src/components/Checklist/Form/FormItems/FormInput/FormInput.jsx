import React from "react"
import "../FormInput/formInput.css"
import { useState } from "react"

export const FormInput = ({ id, label, type, placeholder }) => {
  const [field, setField] = useState({
    value: "",
    style: "item__field",
    error: "",
  })

  function validate(e) {
const fieldValue = e.target.value

    if (id === 'firstName' || id === 'lastName') {
      validateNames(fieldValue)
    }
  }

  function validateNames(fieldValue) {
    const regCapitalized = /^[A-Z\s]*$/
    const regName = /^[a-zA-Z\s]*$/

    if (!fieldValue) {
      setError("filled")
    } else if (fieldValue.length < 3) {
      setError(" more than 3 letters")
    } else if (!regName.test(fieldValue)) {
      setError(" contained only letters")
    } else if (!regCapitalized.test(fieldValue.charAt(0))) {
      setError("capitalized")
    } else {
      setCorrect()
    }
  }

  const setError = (message) => {
    setField(() => ({
      ...field,
      style: "field-error",
      error: `*${label} must be ${message}`,
    }))
  }

  const setCorrect = () => {
    setField(() => ({
      ...field,
      style: "field-correct",
    }))
  }

  const fieldHandler = (e) => {
    setField(() => ({ ...field, value: e.target.value }))
  }

  const reset = () => {
    setField(() => ({
      ...field,
      style: "item__field",
      error: "",
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
        value={field.value}
        onBlur={validate}
        onFocus={reset}
      />
      <div className="error-text">{field.error}</div>
    </div>
  )
}
