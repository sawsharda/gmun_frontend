import facebook from "./facebook.png";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import mail from "./mail.png";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="footer"
    >
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>
            Email: <a href="mailto:info@gmun.org">info@gmun.org</a>
          </p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: New York, USA</p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#committees">Committees</a>
            </li>
            <li>
              <a href="#agenda">Agenda</a>
            </li>
            <li>
              <a href="#register">Register</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/p/Global-MUN-IIT-Kharagpur-100088188648912/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/gmun.official/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="instagram" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin " />
            </a>

            <a
              href="mailto:info@gmun.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mail} alt="mail" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Global Model United Nations. All rights reserved.
      </div>
    </motion.footer>
  );
}
