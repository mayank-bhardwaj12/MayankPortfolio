import { useState, useEffect } from 'react';

const Typewriter = ({ textArray, loop = true, speed = 100, pause = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = textArray[wordIndex];

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % textArray.length);
        if (!loop && wordIndex === textArray.length - 1) return;
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, speed / 2);
      }
    } else {
      if (displayText.length === currentWord.length) {
        timer = setTimeout(() => setIsDeleting(true), pause);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, textArray, loop, speed, pause]);

  return (
    <span className="inline-block relative">
      {displayText}
      <span className="inline-block w-[3px] h-[1em] bg-[#c084fc] align-middle ml-1 animate-pulse drop-shadow-md"></span>
    </span>
  );
};

export default Typewriter;
