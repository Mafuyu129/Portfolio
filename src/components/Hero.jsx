import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getHeroContent, getUiTranslations } from '../constants';

const Hero = () => {
  const { language } = useLanguage();
  const { badge, title, role, description, stats, actions, floatingUI } = getHeroContent(language);
  const ui = getUiTranslations(language);
  const [previewFile, setPreviewFile] = useState(null); // 'resume' | 'transcript' | null

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
                  onClick={() => setPreviewFile(action.file || 'resume')}
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
            {floatingUI.map((uiItem, idx) => (
              <div key={uiItem.label} className={`floating-ui ui-${idx + 1}`}>
                <span className={`ui-dot ${uiItem.type}`}></span>
                {uiItem.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {previewFile && (
        <div className="modal-overlay" onClick={() => setPreviewFile(null)}>
          <div className="modal-container resume-modal" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setPreviewFile(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <div className="modal-header resume" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="modal-category">{ui.document}</span>
                <div className="modal-title-wrapper">
                  <span className="modal-icon">📄</span>
                  <h3 className="modal-title">
                    {previewFile === 'resume' ? ui.resumePreview : ui.transcriptPreview}
                  </h3>
                </div>
              </div>
              <a 
                href={previewFile === 'resume' ? '/resume.pdf' : '/Transcript_Kasidech.pdf'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ marginRight: '40px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <span>{ui.openInNewTab}</span>
                <span>↗</span>
              </a>
            </div>
            <div className="modal-body" style={{ padding: 0, overflow: 'hidden', flex: 1 }}>
              <iframe 
                src={previewFile === 'resume' ? '/resume.pdf#toolbar=0' : '/Transcript_Kasidech.pdf#toolbar=0'} 
                className="resume-iframe"
                title={previewFile === 'resume' ? ui.resumePreview : ui.transcriptPreview}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
