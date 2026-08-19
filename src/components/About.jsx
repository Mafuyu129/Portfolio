import { useLanguage } from '../context/LanguageContext';
import { getAboutContent } from '../constants';

const About = () => {
  const { language } = useLanguage();
  const { tag, title, cards } = getAboutContent(language);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="about-bento">
          {cards.map((card) => (
            <div 
              key={card.id}
              className={`about-card ${card.type === 'main' ? 'card-main' : 'card-side'} glass-card reveal-up`} 
              style={{ animationDelay: card.delay }}
            >
              <div className="about-card-icon">{card.icon}</div>
              <div className="about-card-content">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
                {card.meta && <span>{card.meta}</span>}
                {card.description && (
                  <div className="about-card-desc">
                    {card.description}
                  </div>
                )}
                {card.link && (
                  <div style={{ marginTop: '16px' }}>
                    <a 
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>📄</span>
                      {card.linkText || (language === 'th' ? 'ดูเอกสาร' : 'View Document')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
