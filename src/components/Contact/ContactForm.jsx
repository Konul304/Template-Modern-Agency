'use client';
import React, { useState } from 'react';
//= Components
import Split from '@/components/Common/Split';
//= Static Data
import contentFormData from '@/data/contact-form.json';

function ContactForm({ theme }) {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = () => {};
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                      onChange={(e) =>
                        setInputValues((prevState) => ({
                          ...prevState,
                          name: e?.target?.value,
                        }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      onChange={(e) =>
                        setInputValues((prevState) => ({
                          ...prevState,
                          email: e?.target?.value,
                        }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                      onChange={(e) =>
                        setInputValues((prevState) => ({
                          ...prevState,
                          message: e?.target?.value,
                        }))
                      }
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`butn ${theme === 'light' ? 'dark' : 'bord'}`}
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <Split>
                <h3 className="wow" data-splitting>
                  {contentFormData.title}
                </h3>
              </Split>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{contentFormData.email}</a>
                </h5>
                <h5>{contentFormData.phone}</h5>
              </div>
              <Split>
                <h3 className="wow" data-splitting>
                  Visit Us.
                </h3>
              </Split>
              <div className="item">
                <h6>
                  Lorem, ipsum dolor sit amet
                  <br />
                  Lorem ipsum
                </h6>
              </div>
              <div className="social mt-50">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
