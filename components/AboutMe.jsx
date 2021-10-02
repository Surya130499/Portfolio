import { useEffect, useState } from 'react';
import styles from '../styles/AboutMe.module.scss';

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
    <div className={styles.aboutMe}>
      <p id="aboutme" scrollPercent={scrollPercent} className={styles.about}>ABOUT ME</p>
      {/* <p>{JSON.stringify(entry)}</p> */}
      <p className={styles.description}>
        Front-end developer who deeply cares about User Experience.
        <br />
        Serious passion for UI design and new technologies.
      </p>
      <style jsx>
        {
          `
          #aboutme{
            transform: translateX(${scrollPercent}%);
          }
        `
        }
      </style>
    </div>
  );
};

export default AboutMe;