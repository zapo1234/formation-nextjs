'use client'; // Indique un composant client

import { useState, useEffect } from "react";
import Image from "next/image"; // Importer le composant Image
import styles from "../styles/Login.module.css"; 
import { useRouter } from 'next/navigation'; 
import { login } from "../service/authApi"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Gérer les erreurs
  const [loginAttempt, setLoginAttempt] = useState(false); // Suivi de la tentative de connexion

  const router = useRouter(); // Utilisation de useRouter pour la redirection après connexion

  useEffect(() => {
    if (loginAttempt) {
      const performLogin = async () => {
        setErrorMessage(""); // Réinitialiser le message d'erreur avant chaque tentative

        try {
          // Appel de l'API login
          const data = await login(email, password); 

          // Stockage des informations dans localStorage
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("email", data.session.userEmail);
          localStorage.setItem("id", data.session.userId);
          localStorage.setItem("isAdmin", data.session.is_admin);

          // Rediriger vers la page de profil ou d'accueil
          router.push("/profile"); 

        } catch (error) {
          setErrorMessage("Identifiants incorrecte"); // Gérer l'erreur
        } finally {
          setLoginAttempt(false); // Réinitialiser l'état de la tentative de connexion
        }
      };

      performLogin(); // Appeler la fonction de connexion
    }
  }, [loginAttempt, email, password, router]); // Dépendances de useEffect

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Empêcher le rechargement de la page
    setLoginAttempt(true);  // Lancer la tentative de connexion
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        {/* Logo centré en haut */}
        <div className={styles.logContainer}>
          <Image
            src="/assets/logo_elyamaje.png" 
            alt="Logo"
            width={150}  // Taille de l'image (largeur)
            height={150} // Taille de l'image (hauteur)
            className={styles.logo} 
          />
        </div>

        <h1 className={styles.title}>Se connecter</h1>

        {/* Affichage du message d'erreur si présent */}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Se connecter
          </button>

          <div className={styles.forgotPassword}>
            <a href="/forgot-password">Mot de passe oublié ?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
