import { useEffect, useState } from 'react';
import 'Aboutme.scss';

const AboutMe = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    console.log(window.scrollY);
    const handlescroll = (event) => {
      const { body, documentElement } = event.srcElement;
      const sd = Math.max(body.scrollTop, documentElement.scrollTop);
      console.log(sd);
      console.log(documentElement);
      const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
      const maxlimit = (documentElement.clientHeight * 170) / documentElement.scrollHeight;
      if (sp >= 20 && sp <= maxlimit) {
        setScrollPercent(sp);
      }
    }
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);

  return (
    <div className='aboutMe'>
      <p scrollPercent={scrollPercent} className='about'>ABOUT ME</p>
      <p className='description'>
        Front-end developer who deeply cares about User Experience.
        <br />
        Serious passion for UI design and new technologies.
      </p>
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