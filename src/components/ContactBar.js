import styles from '../styles/ContactBar.module.css';
export default function ContactBar() {
  return (
    <div className={styles.contactBar}>
      <ul className={styles.contactlinks}>
        <li className={styles.navitem}>
          <a href='tel:3142058711'>314.205.8711</a>
        </li>
        <li className={styles.navitem}>
          <a href='mailto:info@hrg411.com'>info@hrg411.com</a>
        </li>
      </ul>
    </div>
  );
}
