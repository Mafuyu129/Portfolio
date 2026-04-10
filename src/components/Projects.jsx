import { useState, useEffect } from 'react';
import { PROJECTS_CONTENT } from '../constants';

const Projects = () => {
  const { tag, title, projects } = PROJECTS_CONTENT;
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card glass-card reveal-up" 
              style={{ animationDelay: project.delay }}
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-image">
                <div className="project-image-placeholder">
                  <span>{project.icon}</span>
                </div>
                <div className="project-overlay" style={{ gap: '12px', flexWrap: 'wrap' }}>
                  <button onClick={() => setSelectedProject(project)} className="project-link-btn" style={{ cursor: 'pointer', border: 'none' }}>
                    View Details
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-header">
              <span className="modal-category">{selectedProject.category}</span>
              <div className="modal-title-wrapper">
                <span className="modal-icon">{selectedProject.icon}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>
            </div>
            <div className="modal-body">
              <p className="modal-desc">{selectedProject.longDescription || selectedProject.description}</p>
              
              <div className="modal-tech">
                {selectedProject.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              
              <div className="modal-actions">
                {selectedProject.link !== '#' && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    {selectedProject.linkText || "Source Code"}
                  </a>
                )}
                {selectedProject.secondaryLink && (
                  <a href={selectedProject.secondaryLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    {selectedProject.secondaryLinkText || "View Alternate"}
                  </a>
                )}
                {selectedProject.link === '#' && !selectedProject.secondaryLink && (
                  <span className="btn btn-outline" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                    Private / Research
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
