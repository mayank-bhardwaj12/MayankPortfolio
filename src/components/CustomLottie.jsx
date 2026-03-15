import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const CustomLottie = ({ animationData, loop = true, autoplay = true, className = "" }) => {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (animationData && containerRef.current) {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
      });
      return () => animRef.current?.destroy();
    }
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} className={className}></div>;
};

export default CustomLottie;
