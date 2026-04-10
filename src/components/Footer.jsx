const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span> KC <span className="logo-bracket">/&gt;</span>
          </div>
          <p>Kasidech Chumthong · QA Engineer</p>
          <p className="footer-copy">© {currentYear} · Precision Engineering.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
