import React, { useRef, useEffect } from 'react';
import './services.css';

const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollable = scrollRef.current;

    const onScroll = () => {
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (
        scrollY >= containerTop &&
        scrollY <= containerTop + containerHeight - windowHeight
      ) {
        const horizontalScrollAmount =
          ((scrollY - containerTop) / (containerHeight - windowHeight)) *
          (scrollable.scrollWidth - window.innerWidth);
        scrollable.style.transform = `translateX(-${horizontalScrollAmount}px)`;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="horizontal-scroll" ref={scrollRef}>
        <div className="panel">Panel 1</div>
        <div className="panel">Panel 2</div>
        <div className="panel">Panel 3</div>
        <div className="panel">Panel 4</div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
