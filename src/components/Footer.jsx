import { useLanguage } from '../context/LanguageContext';
import { getUiTranslations } from '../constants';

const Footer = () => {
  const { language } = useLanguage();
  const ui = getUiTranslations(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span> KC <span className="logo-bracket">/&gt;</span>
          </div>
          <p>{ui.footerRole}</p>
          <p className="footer-copy">© {currentYear} · {ui.footerPrecision}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
