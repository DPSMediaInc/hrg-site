import backImg from '../assets/hrg-book-bkgd.png';
import styles from '../styles/MainSplash.module.css';

export default function MainSplash() {
  return (
    <div className={styles.splash}>
      <img src={backImg} alt='Homeowners Referral Guide' />
      <div className={styles.splash_text}>
        <h2 className={styles.firstHeadline}>We don't sell leads,</h2>
        <h1 className={styles.secondHeadline}>We deliver jobs!</h1>
        <div className={styles.splash_btn_c}>
          <button className={styles.splash_btn}>Learn More</button>
          <button className={styles.splash_btn}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
