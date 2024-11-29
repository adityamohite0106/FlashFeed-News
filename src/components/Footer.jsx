import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Column for Social Media Links */}
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="mx-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li className="mx-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column for Additional Links (Contact, Privacy, etc.) */}
          <div className="col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/contact" className="text-white">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 FlashFeed, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
