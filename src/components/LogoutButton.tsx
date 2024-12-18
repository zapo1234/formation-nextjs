'use client'; // Assurez-vous que ce composant s'exécute côté client

import { useRouter } from 'next/navigation'; 
import { useState } from 'react';

const LogoutButton = () => {
  const [loading, setLoading] = useState(false); // Gère l'état de chargement
  const router = useRouter(); // Utiliser useRouter pour la redirection

  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    setLoading(true); // Met l'état de chargement à true

    // Supprimer le token du localStorage pour déconnecter l'utilisateur
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');

    // Vous pouvez ajouter un délai avant de rediriger pour que l'utilisateur voit la déconnexion
    setTimeout(() => {
      // Redirige vers la page de connexion après la déconnexion
      router.push('/login');
    }, 500); // Délai de 500ms avant la redirection

    setLoading(false); // Réinitialiser l'état de chargement
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading} // Désactive le bouton pendant le chargement
      style={{
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease', // Transition pour un effet visuel
      }}
    >
      {loading ? 'Déconnexion...' : 'Déconnexion'} {/* Texte dynamique en fonction de l'état */}
    </button>
  );
};

export default LogoutButton;
