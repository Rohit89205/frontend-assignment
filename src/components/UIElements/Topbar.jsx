import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsEnvelope, BsTelephone } from 'react-icons/bs';
import Social from './Social';

const Announcement = () => {
  return (
    <section className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-full">
            <div className='topbar-content'>
              <Social />

              <div className="header-alert-news">
                <p>
                  <b>Free Shipping</b>
                  This Week Order Over - $55
                </p>
              </div>
              <div className="header-top-actions">

                <ul className="contact_list py-2">
                  <li>
                    <a
                      href="mailto:rohit892051182@gmail.com"><BsEnvelope /><span>rohit892051182@gmail.com</span></a>
                  </li>
                  <li>
                    <a href="tel:+918920511882"><BsTelephone /><span>+91 89205-11882</span></a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Announcement;
