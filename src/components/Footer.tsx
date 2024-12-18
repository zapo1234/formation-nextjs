// src/components/Footer.tsx
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.footerLinks}>
            <li><a href="/terms" className={styles.footerLink}> 2024 Mon App Elyamaje Martial. Tous droits réservés. Conditions d'utilisation</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
