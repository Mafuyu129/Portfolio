import { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, PROJECTS_CONTENT } from '../constants';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    ...NAV_LINKS.map(link => ({
      id: link.href,
      title: `Go to ${link.name}`,
      desc: `Navigate to the ${link.name.toLowerCase()} section`,
      icon: '🔗',
      action: () => {
        window.location.href = link.href;
        setIsOpen(false);
      }
    })),
    ...PROJECTS_CONTENT.projects.map(project => ({
      id: `project-${project.id}`,
      title: `View ${project.title}`,
      desc: project.category,
      icon: project.icon,
      action: () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    })),
    {
      id: 'theme-toggle',
      title: 'Toggle Theme',
      desc: 'Switch between light and dark mode',
      icon: '🌓',
      action: () => {
        const btn = document.querySelector('.theme-toggle');
        if (btn) btn.click();
        setIsOpen(false);
      }
    }
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.desc.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleOpenEvent = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleOpenEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      setSearch('');
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      if (filteredCommands[activeIndex]) {
        filteredCommands[activeIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={() => setIsOpen(false)}>
      <div className="command-palette" onClick={e => e.stopPropagation()}>
        <div className="command-input-wrapper">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            ref={inputRef}
            type="text" 
            className="command-input" 
            placeholder="Type a command or search..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        
        <div className="command-list">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => (
              <div 
                key={cmd.id} 
                className={`command-item ${index === activeIndex ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={cmd.action}
              >
                <div className="command-item-icon">{cmd.icon}</div>
                <div className="command-item-info">
                  <div className="command-item-title">{cmd.title}</div>
                  <div className="command-item-desc">{cmd.desc}</div>
                </div>
                {index === activeIndex && <div className="command-shortcut">↵</div>}
              </div>
            ))
          ) : (
            <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '14px' }}>
              No commands found.
            </div>
          )}
        </div>
        
        <div className="command-footer">
          <div className="command-hints">
            <div className="command-hint"><kbd>↑↓</kbd> <span>Navigate</span></div>
            <div className="command-hint"><kbd>↵</kbd> <span>Select</span></div>
            <div className="command-hint"><kbd>esc</kbd> <span>Close</span></div>
          </div>
          <div>Linear Portfolio v1.0</div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
