import backImg from '../assets/hrg-book-bkgd.png';
import styles from '../styles/MainSplash.module.css';

export default function MainSplash() {
  return (
    <div className={styles.splash}>
      <img src={backImg} alt='Homeowners Referral Guide' />
      <div className={styles.splash_text}>
        <h2>We don't sell leads,</h2>
        <h1>We deliver jobs!</h1>
        <div className={styles.splash_btn}>
          <button>Learn More</button>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
