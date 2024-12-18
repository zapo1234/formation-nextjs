import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Menu.module.css"; // Assurez-vous que le chemin est correct
import LogoutButton from "./LogoutButton"; // Si nécessaire

const Menu = () => {
  // Etats pour gérer l'affichage des sous-menus
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Etat pour afficher/masquer le menu mobile
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false); // Etat pour sous-menu Compte users
  const [isFactureSubMenuVisible, setIsFactureSubMenuVisible] = useState(false); // Etat pour sous-menu Factures
  const [isAmbassadriceSubMenuVisible, setIsAmbassadriceSubMenuVisible] = useState(false); // Etat pour sous-menu Ambassadrices

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle pour afficher/masquer le menu
  };

  // Gestionnaires de clic pour les sous-menus
  const toggleSubMenu = () => {
    setIsSubMenuVisible(prevState => !prevState); // Toggle pour Compte users
  };

  const toggleFactureSubMenu = () => {
    setIsFactureSubMenuVisible(prevState => !prevState); // Toggle pour Factures
  };

  const toggleAmbassadriceSubMenu = () => {
    setIsAmbassadriceSubMenuVisible(prevState => !prevState); // Toggle pour Ambassadrices.
  };

  return (
    <div>
      {/* Menu Toggle Icon */}
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <i className="fas fa-bars"></i> {/* Icône hamburger */}
      </button>

      {/* Menu principal */}
      <div className={`${styles.menu} ${isMenuVisible ? styles.showMenu : ''}`}>
        <ul className={styles.menuList}>
          <li>
            <Link href="/profile/dashboard" className={styles.menuItem}>
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>

          {/* Sous-menu Compte users */}
          <li>
            <button className={styles.menuItem} onClick={toggleSubMenu}>
              <i className="fas fa-cogs"></i> Compte users
              <i
                className={`fas fa-chevron-down ${isSubMenuVisible ? styles.rotated : ''}`}
                style={{ marginLeft: 25 }}
              ></i>
            </button>
            {isSubMenuVisible && (
              <ul className={styles.subMenu}>
                <li><Link href="/profile/users/list" className={styles.menuItem}>Lister les comptes</Link></li>
                <li><Link href="/profile/users/create" className={styles.menuItem}>Créer un compte</Link></li>
              </ul>
            )}
          </li>

          {/* Autres éléments du menu */}
          <li><Link href="/profile/orders" className={styles.menuItem}><i className="fas fa-tag"></i> Functions</Link></li>
          <li><Link href="/profile/orders" className={styles.menuItem}><i className="fas fa-tag"></i> Codes promos</Link></li>

          {/* Sous-menu Ambassadrices */}
          <li>
            <button className={styles.menuItem} onClick={toggleAmbassadriceSubMenu}>
              <i className="fas fa-users"></i> Ambassadrices
              <i
                className={`fas fa-chevron-down ${isAmbassadriceSubMenuVisible ? styles.rotated : ''}`}
                style={{ marginLeft: 20 }}
              ></i>
            </button>
            {isAmbassadriceSubMenuVisible && (
              <ul className={styles.subMenu}>
                <li><Link href="/profile/ambassadrices/list" className={styles.menuItem}>Lister Ambassadrices</Link></li>
                <li><Link href="/profile/ambassadrices/programmer" className={styles.menuItem}>Programmer des Lives</Link></li>
                <li><Link href="/profile/ambassadrices/configuration" className={styles.menuItem}>Configuration Palier</Link></li>
                <li><Link href="/profile/ambassadrices/activite" className={styles.menuItem}>Suivi Activité</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/profile/partners" className={styles.menuItem}><i className="fas fa-handshake"></i> Partenaires</Link></li>

          {/* Sous-menu Factures */}
          <li>
            <button className={styles.menuItem} onClick={toggleFactureSubMenu}>
              <i className="fas fa-file-invoice"></i> Factures
              <i
                className={`fas fa-chevron-down ${isFactureSubMenuVisible ? styles.rotated : ''}`}
                style={{ marginLeft: 72 }}
              ></i>
            </button>
            {isFactureSubMenuVisible && (
              <ul className={styles.subMenu}>
                <li><Link href="/profile/factures/gerer" className={styles.menuItem}>Gérer des factures</Link></li>
                <li><Link href="/profile/factures/regenerer" className={styles.menuItem}>Régénérer des factures</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/profile/settings" className={styles.menuItem}><i className="fas fa-cogs"></i> Configuration Paliers</Link></li>
          <li><Link href="/profile/schedule" className={styles.menuItem}><i className="fas fa-calendar-alt"></i> Agendas des Lives</Link></li>
          
        </ul>
      </div>
    </div>
  );
};

export default Menu;
