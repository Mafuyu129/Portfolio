import { EXPERIENCE_CONTENT } from '../constants';

const Experience = () => {
  const { tag, title, experiences } = EXPERIENCE_CONTENT;

  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item reveal-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className={`timeline-badge ${exp.type}`}>{exp.badge}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <div className="timeline-date">{exp.period}</div>
                {exp.details ? (
                  <ul className="timeline-details">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
