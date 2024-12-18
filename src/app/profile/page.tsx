'use client'; // Important pour signaler que ce composant est un composant côté client

import { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import HeaderAuth from '../../components/HeaderAuth';  // Importer HeaderAuth
import styles from "../../styles/Profile.module.css"; // Importer le CSS
import AuthGuard from '../../components/AuthGard'; // Importer AuthGuard

const Profile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); 
  const [email, setEmail] = useState<string | null>(null); // 

  useEffect(() => {
    // Vérifiez si un token est présent dans localStorage pour confirmer l'authentification
    if (typeof window !== 'undefined') { // Vérifiez si on est côté client
      const token = localStorage.getItem('token');
      const storedEmail = localStorage.getItem('email'); // Récupérer l'email
      if (token) {
        setIsAuthenticated(true);
        setEmail(storedEmail); // Mettre à jour l'email si l'utilisateur est authentifié
      } else {
        setIsAuthenticated(false);
      }
    }
  }, []); // Se déclenche uniquement une fois lors du premier rendu

  if (isAuthenticated === null) {
    // Afficher un écran de chargement tant que l'on vérifie l'authentification
    return <div>Chargement...</div>;
  }

  // Si l'utilisateur n'est pas authentifié.
  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour accéder à cette page.</div>;
  }

  return (
    <AuthGuard>
      <div>
        {/* Afficher HeaderAuth si l'utilisateur est authentifié */}
        {isAuthenticated && <HeaderAuth />}

        {/* Contenu principal */}
        <div className={styles.menuWrapper}>
          {/* Menu latéral (affiché uniquement si l'utilisateur est authentifié) */}
          {isAuthenticated && <Menu />}

          <div className={styles.pageContent}>
            <h1>Bienvenue sur votre Profil, {email}</h1>
            <p>Voici les détails de votre profil.</p>
            <div className={styles.profileInfo}>
              <p>Informations supplémentaires ici...</p>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Profile;
