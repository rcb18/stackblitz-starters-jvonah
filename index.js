import React, { useState, useEffect } from 'react';

const Carousel = ({ delay, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(interval);
  }, [delay, children.length]);

  const nextItem = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {children.length > 0 && (
        <div className="current">{children[currentIndex]}</div>
      )}
      {children.length > 1 && (
        <div className="buttons">
          <button className="button-previous" onClick={prevItem}>
            Previous
          </button>
          <button className="button-next" onClick={nextItem}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
