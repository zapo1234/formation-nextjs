// components/AuthGuard.tsx

'use client'; // Important pour signaler que ce composant est un composant côté client

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Utiliser next/navigation pour la redirection côté client

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();

  useEffect(() => {
    // Vérification de l'authentification (par exemple, en vérifiant un token dans localStorage)
    const token = localStorage.getItem('token');
    
    // Si le token n'existe pas, rediriger l'utilisateur vers la page de connexion
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  // Afficher les enfants si l'utilisateur est authentifié
  return <>{children}</>;
};

export default AuthGuard;
