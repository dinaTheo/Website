import {useEffect} from 'react';

// import {headerID} from '../components/Sections/Header';
import {SectionId} from '../data/data';

export const useNavObserver = (selectors: string, handler: (section: SectionId | null) => void) => {
  useEffect(() => {
    const sections = document.querySelectorAll(selectors);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const topId = visible[0].target.getAttribute('id');
          handler(topId as SectionId);
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -70% 0px', // top 30% zone
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [selectors, handler]);
};

export const handleNavClick = (sectionId: SectionId) => {
  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    window.dispatchEvent(new Event('scroll'));
  }, 100); // 100ms delay to allow scrolling to start
};

