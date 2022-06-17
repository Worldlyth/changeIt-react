import React from "react"
import './feedback.css'
import avatarCodyFisher from '../Feedback/cody-fisher.png'
import avatarEleanorPena from '../Feedback/eleanor-pena.png'
import avatarTheresaWebb from '../Feedback/theresa-webb.png'
import avatarEstherHoward from '../Feedback/esther-howard.png'

export const Feedback = () => {
  return (
    <div class="feedback" name="feedback" id="feedback">
      <div class="feedback__item bg_yellow">
        <div class="item__about">
          <img src={avatarCodyFisher} alt="" class="feedback__avatar" />
          <div class="about__info">
            <div class="info__name">Cody Fisher</div>
            <div class="info-country">South Dakota</div>
          </div>
        </div>
        <div class="item-text">
          Fantastic service and great value for money!
        </div>
      </div>

      <div class="feedback__item bg_pink">
        <div class="item__about">
          <img src={avatarEleanorPena} alt="" class="feedback__avatar" />
          <div class="about__info">
            <div class="info__name">Eleanor Pena</div>
            <div class="info-country">Guinea</div>
          </div>
        </div>
        <div class="item-text">
          Thank you so much for taking the time to share your experience with
          others. So pleased you found the service helpful. Wishing you all the
          best in your next chapter!
        </div>
      </div>

      <div class="feedback__item bg_white">
        <div class="item__about">
          <img src={avatarTheresaWebb} alt="" class="feedback__avatar" />
          <div class="about__info">
            <div class="info__name">Theresa Webb</div>
            <div class="info-country">Greece</div>
          </div>
        </div>
        <div class="item-text">
          Would definitely recommend to anyone looking for an efficient service.
        </div>
      </div>

      <div class="feedback__item bg_yellow">
        <div class="item__about">
          <img src={avatarEstherHoward} alt="" class="feedback__avatar" />
          <div class="about__info">
            <div class="info__name">Esther Howard</div>
            <div class="info-country">Iceland</div>
          </div>
        </div>
        <div class="item-text">Well explained and a fast delivery :)</div>
      </div>
    </div>
  )
}
