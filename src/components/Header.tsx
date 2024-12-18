'use client'; // Assurez-vous que ce composant s'exécute côté client

import { useState, useEffect } from "react";
import LogoutButton from "./LogoutButton"; // Importer le composant LogoutButton
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>ERP Ambassadrice</h1>
          {/* Lien vers la page de login */}
          <a href="/login" className={styles.loginLink}>Se connecter</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
