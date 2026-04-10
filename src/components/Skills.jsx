import { SKILLS_CONTENT } from '../constants';

const Skills = () => {
  const { tag, title, categories } = SKILLS_CONTENT;

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div 
              key={cat.title}
              className="skill-category glass-card reveal-up" 
              style={{ animationDelay: cat.delay }}
            >
              <div className="skill-category-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
