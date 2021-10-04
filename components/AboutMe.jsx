import { useEffect, useState } from 'react';
import useDimensions from './hooks/dimensions';

const AboutMe = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const { height } = useDimensions();

  useEffect(() => {
    const handlescroll = (event) => {
      if (window.scrollY > height / 2 && window.scrollY < height * 1.33418043202) {
        setScrollPercent(((4 / 35) * (window.scrollY - height * 0.44472681067)) + 20);
      }
    }
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, [height]);

  return (
    <div className='aboutMe'>
      <div>
        <p scrollPercent={scrollPercent} className='about'>ABOUT ME</p>
        <p className='description'>
          Front-end developer who deeply cares about User Experience.
          <br />
          Serious passion for UI design and new technologies.
        </p>
      </div>
      <style jsx>
        {
          `
          .about{
            transform: translateX(${scrollPercent}%);
          }
        `
        }
      </style>
    </div>
  );
};

export default AboutMe;