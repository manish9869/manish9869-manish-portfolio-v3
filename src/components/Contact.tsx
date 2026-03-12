import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:manishchavan016@gmail.com" data-cursor="disable">
                manishchavan016@gmail.com
              </a>
            </p>

            <h4>Contact</h4>
            <p>
              <a href="mailto:manishchavan016@gmail.com" data-cursor="disable">
                +1 (519) 897-6341
              </a>
            </p>

            <h4>Education</h4>

            <p>
              <strong>Web Development</strong> <br />
              Conestoga College, Ontario <br />
              2023 – 2024
            </p>

            <p>
              <strong>Master of Computer Applications</strong> <br />
              IGNOU, Mumbai <br />
              2018 – 2021
            </p>

            <p>
              <strong>Bachelor of Information Technology</strong> <br />
              Mumbai University <br />
              2014 – 2017
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/manish9869"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/manishchavan-dev"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          {/* <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Manish Chavan</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Contact;
