import { useState, useEffect } from "react";

export default function useSlider(items = [], interval = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  useEffect(() => {
    if (items.length <= 1 || isPaused) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [items.length, isPaused, interval]);

  return {
    currentItem: items[currentIndex],
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    pause,
    resume,
    totalSlides: items.length,
  };
}
