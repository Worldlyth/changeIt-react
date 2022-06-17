import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div class="footer bg_pink">
    <div class="footer__newsletter">
      <div class="newsletter__title">Newsletter</div>
      <input
        type="text"
        class="newsletter__form"
        placeholder="Enter Your Email"
      />
    </div>

    <div class="copyright">© 2022 Change.it Ltd. All Rights Reserved</div>

    <ul class="links">
      <li>Divorce</li>
      <li>Privacy</li>
      <li>Deed Poll Online</li>
      <li>Terms</li>
      <li>FAQ</li>
    </ul>
  </div>
  )
}
