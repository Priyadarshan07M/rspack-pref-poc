
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';

// Lazy load pages
const AboutPage = lazy(() => import('@pages/AboutPage'));
const DashboardPage = lazy(() => import('@pages/DashboardPage'));
const ProfilePage = lazy(() => import('@pages/ProfilePage'));
const SettingsPage = lazy(() => import('@pages/SettingsPage'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
