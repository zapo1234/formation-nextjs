'use client'; // Indique que c'est un composant client

import { useState } from "react";
import styles from "../../styles/ForgotPassword.module.css"; // Assurez-vous d'avoir ce fichier CSS


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      // Ici 
      // setMessage("Un email de réinitialisation du mot de passe a été envoyé.");
    } else {
      setMessage("Veuillez entrer une adresse email valide.");
    }
  };

  return (
    <div className={styles.forgotPasswordPage}>
      <div className={styles.forgotPasswordContainer}>
        <h1 className={styles.title}>Mot de pass oublié</h1>

        <form onSubmit={handleSubmit} className={styles.forgotPasswordForm}>
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

          <button type="submit" className={styles.submitButton}>
            Envoyer l'email de réinitialisation
          </button>

          {message && <div className={styles.message}>{message}</div>}
        </form>

        <div className={styles.backToLogin}>
          <a href="/login">Retour à la connexion</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
