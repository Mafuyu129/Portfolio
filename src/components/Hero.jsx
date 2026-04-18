import { useState } from 'react';
import { HERO_CONTENT } from '../constants';

const Hero = () => {
  const { badge, title, role, description, stats, actions, floatingUI } = HERO_CONTENT;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content reveal-up">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {badge}
          </div>
          <h1 className="hero-title">{title}</h1>
          <div className="hero-role">{role}</div>
          <p className="hero-description">{description}</p>
          
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-pill">
                <span className="pill-label">{stat.label}</span>
                <span className="pill-value">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            {actions.map((action) => (
              action.type === 'preview' ? (
                <button 
                  key={action.label}
                  onClick={() => setIsPreviewOpen(true)}
                  className={`btn ${action.primary ? 'btn-primary' : 'btn-outline'}`}
                >
                  {action.label}
                </button>
              ) : (
                <a 
                  key={action.label}
                  href={action.href} 
                  download={action.download}
                  className={`btn ${action.primary ? 'btn-primary' : 'btn-outline'}`}
                >
                  {action.label}
                </a>
              )
            ))}
          </div>
        </div>

        <div className="hero-visual reveal-up">
          <div className="hero-image-wrapper">
            <img src="/profile.jpg" alt={title} className="hero-image" id="heroImage" />
            {floatingUI.map((ui, idx) => (
              <div key={ui.label} className={`floating-ui ui-${idx + 1}`}>
                <span className={`ui-dot ${ui.type}`}></span>
                {ui.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <div className="modal-overlay" onClick={() => setIsPreviewOpen(false)}>
          <div className="modal-container resume-modal" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setIsPreviewOpen(false)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <div className="modal-header resume">
              <span className="modal-category">Document</span>
              <div className="modal-title-wrapper">
                <span className="modal-icon">📄</span>
                <h3 className="modal-title">Resume Preview</h3>
              </div>
            </div>
            <div className="modal-body" style={{ padding: 0, overflow: 'hidden', flex: 1 }}>
              <iframe 
                src="/resume.pdf#toolbar=0" 
                className="resume-iframe"
                title="Resume Preview"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

