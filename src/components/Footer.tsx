import Container from './Container';

import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-body">
          <p className="footer-details">
            Created by students of sigma software
          </p>
          <p className="footer-details">® All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
