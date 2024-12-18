// pages/403.js
import Link from 'next/link';
import styles from '../styles/403.module.css';  // Importer le module CSS

export default function Page403() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>403</h1>
      <p className={styles.message}>Accès interdit. Vous etes pas autorisé pour vous connecter !</p>
    </div>
  );
}
