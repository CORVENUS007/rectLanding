import { useEffect } from 'react';

const ScrollToSection = () => {
  useEffect(() => {
    const handleScrollToSection: EventListener = (e) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement | null;
      const sectionId = target?.getAttribute('href')?.substring(1);
      const section = sectionId ? document.getElementById(sectionId) : null;
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScrollToSection);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScrollToSection);
      });
    };
  }, []);

  return null;
};

export default ScrollToSection;
