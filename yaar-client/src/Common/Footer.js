import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <div>
    <footer class="footer text-sm md:text-lg p-0">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="menu space-x-5 ">
      <li class="menu__item cursor-pointer">Home</li>
      <li class="menu__item cursor-pointer">About</li>
      <li class="menu__item cursor-pointer">Services</li>
      <li class="menu__item cursor-pointer">Team</li>
      <li class="menu__item cursor-pointer">Contact</li>
    </ul>
    <p>&copy;2023 YAAR Pvt Ltd | All Rights Reserved</p>
  </footer>
  </div>
  )
}

export default Footer