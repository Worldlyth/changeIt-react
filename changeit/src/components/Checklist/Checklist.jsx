import React from "react"
import './checklist.css'

export const Checklist = () => {
  return (
    <div class="checklist" name="checklist" id="checklist">
      <div class="checklist__poster bg_yellow">
        <div class="poster-text">Get your free Change.it checklist</div>
      </div>

      <form class="checklist__form bg_white" id="form">
        <div class="form__item">
          <label for="firstName" class="item__label">
            First Name
          </label>
          <input
            type="text"
            class="item__field"
            placeholder="Enter your First Name"
            id="firstName"
            name="firstName"
          />
        </div>

        <div class="form__item">
          <label for="lastName" class="item__label">
            Last Name
          </label>
          <input
            type="text"
            class="item__field"
            placeholder="Enter your Last Name"
            id="lastName"
            name="lastName"
          />
        </div>

        <div class="form__item">
          <label for="Email" class="item__label">
            Email
          </label>
          <input
            type="text"
            class="item__field"
            placeholder="Enter your Email"
            id="Email"
            name="email"
          />
        </div>

        <div class="form__item">
          <label for="select" class="item__label">
            Life Event
          </label>
          <div class="item__field">
            <select class="field__select" id="select">
              <option value="Marriage">Marriage</option>
            </select>
          </div>
        </div>

        <div class="form__item">
          <label for="date" class="item__label">
            Life Event Date
          </label>

          <input
            type="text"
            class="item__field"
            placeholder="DD.MM.YYYY"
            id="date"
            name="date"
          />
        </div>

        <div class="form__notice">
          <span class="span-grey">
            By submitting your details you agree with our
            <span class="span-line">
              <a href="#privacy">Privacy Policy.</a>
            </span>
          </span>
        </div>

        <input type="submit" value="Download" class="form__button" />
      </form>
    </div>
  )
}
