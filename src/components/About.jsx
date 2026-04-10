import { ABOUT_CONTENT } from '../constants';

const About = () => {
  const { tag, title, cards } = ABOUT_CONTENT;

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
