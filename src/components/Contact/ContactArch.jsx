import React from 'react';

function ContactArch() {
  return (
    <section id="contact" className="contact-sec style2 section-padding position-re bg-img" style={{ backgroundImage: "url('/img/patrn1.png')" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <form id="contact-form">
                <div className="messages"></div>

                <div className="controls">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input id="form_name" type="text" name="name" placeholder="Name" required={true} />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input id="form_email" type="email" name="email" placeholder="Email" required={true} />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input id="form_name" type="text" name="name" placeholder="Name" required={true} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea id="form_message" name="message" placeholder="Message" rows="4"
                          required={true}></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <a href="#0" className="butn light mt-30 full-width">
                          <h6 className="ls3 text-u">Send Massege</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactArch