'use client'; // Assurez-vous que ce composant s'exécute côté client

import { useState, useEffect } from "react";
import LogoutButton from "./LogoutButton"; // Importer le composant LogoutButton
import styles from "../styles/HeaderAuth.module.css";

const HeaderAuth = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const email = localStorage.getItem('email');
  
  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Bonjour {email}</h1>
          <h2>
          <i
              className="fas fa-user-circle"
              style={{ fontSize: '25px', cursor: 'pointer' }}
              onClick={toggleMenu}  // Basculer l'affichage du menu
            ></i>
            {/* Menu déroulant affiché si isMenuOpen est true */}
            {isMenuOpen && (
              <div className={styles.profileMenu}>
                <ul>
                  <li><a href="/profil">Profil</a></li>
                  <li><LogoutButton /></li> {/* Le bouton de déconnexion */}
                </ul>
              </div>
            )}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default HeaderAuth;
