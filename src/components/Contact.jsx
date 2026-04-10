import { CONTACT_CONTENT } from '../constants';

const Contact = () => {
  const { tag, title, info } = CONTACT_CONTENT;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        
        <div className="contact-grid">
          {info.map((item) => (
            <div key={item.label} className="contact-card glass-card reveal-up">
              <div className="contact-card-icon">{item.icon}</div>
              <h3>{item.label}</h3>
              {item.href ? (
                <a href={item.href} className="contact-card-value" target={item.label === 'LinkedIn' ? '_blank' : undefined} rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}>
                  {item.value}
                </a>
              ) : (
                <p className="contact-card-value">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
