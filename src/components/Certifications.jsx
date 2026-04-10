import { useState } from 'react';
import { CERTIFICATIONS_CONTENT } from '../constants';

const Certifications = () => {
  const { tag, title, certifications } = CERTIFICATIONS_CONTENT;
  const [isExpanded, setIsExpanded] = useState(false);

  // Show first 6 by default
  const visibleCertifications = isExpanded ? certifications : certifications.slice(0, 6);

  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="cert-grid">
          {visibleCertifications.map((cert) => (
            <div 
              key={cert.id} 
              className="cert-card glass-card reveal-up"
            >
              <div className="cert-badge">
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <div className="cert-meta">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="dot">•</span>
                  <span className="date">{cert.date}</span>
                </div>
              </div>
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-verify-link"
                >
                  Verify
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="cert-actions reveal-up">
          <button 
            className="btn btn-secondary" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : `Show All Badges (${certifications.length})`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
