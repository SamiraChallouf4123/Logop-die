// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Home/Navbar';
import Hero from './Home/Hero';
import Stats from './Home/Stats';
import Features from './Home/Features';
import HowItWorks from './Home/HowItWorks';
import Audiences from './Home/Audiences';
import Testimonials from './Home/Testimonials';
import CTA from './Home/CTA';
import Footer from './Home/Footer';
import AuthModal from '../components/Auth/AuthModal';
import { CREAM } from '../constants/colors';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // État du modal
  const [authModal, setAuthModal] = useState({ open: false, signUp: false });

  // Charger l'utilisateur depuis localStorage au démarrage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setCurrentUser(userData);
        setIsLoggedIn(true);
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const openLogin = () => setAuthModal({ open: true, signUp: false });
  const openSignUp = () => setAuthModal({ open: true, signUp: true });
  const closeModal = () => setAuthModal({ open: false, signUp: false });

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('user');   // Supprimer les données
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: CREAM,
      fontFamily: "'Atkinson Hyperlegible', sans-serif",
    }}>
      <Navbar
        isLoggedIn={isLoggedIn}
        user={currentUser}
        onLogin={openLogin}
        onSignUp={openSignUp}
        onLogout={handleLogout}
      />

      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Audiences />
      <Testimonials />
      <CTA />
      <Footer />

      <AuthModal
        isOpen={authModal.open}
        defaultSignUp={authModal.signUp}
        onClose={closeModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}