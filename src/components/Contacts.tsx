import Container from './Container';
import Link from './Link';

import '../styles/Contacts.scss';

const Contacts = () => {
  const facebookIcon = '/images/footerIcons/facebook.svg';
  const githubIcon = '/images/footerIcons/github.svg';
  const youtubeIcon = '/images/footerIcons/youtube.svg';
  const telegramIcon = '/images/footerIcons/telegram.svg';

  return (
    <section className="contacts">
      <Container>
        <div className="contacts-body">
          <div className="contacts-icons">
            <Link href="#!" className="contacts-icon-link">
              <img
                src={facebookIcon}
                alt="facebook"
                className="contacts-icon"
              />
            </Link>
            <Link href="#!" className="contacts-icon-link">
              <img src={githubIcon} alt="github" className="contacts-icon" />
            </Link>
            <Link href="#!" className="contacts-icon-link">
              <img src={youtubeIcon} alt="youtube" className="contacts-icon" />
            </Link>
            <Link href="#!" className="contacts-icon-link">
              <img
                src={telegramIcon}
                alt="telegram"
                className="contacts-icon"
              />
            </Link>
          </div>
          <div className="contacts-details">
            <p className="contacts-details-title">Our Contacts</p>
            <div className="contacts-info">
              <Link className="contacts-info-item" href="tel:+88005553535">
                Phone: +88005553535
              </Link>
              <Link
                className="contacts-info-item"
                href="mailto:lorem@ipsum.com">
                Email: lorem@ipsum.com
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
