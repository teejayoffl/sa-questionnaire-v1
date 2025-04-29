import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OnboardingLayout from './pages/OnboardingLayout';
import CompletionPage from './pages/CompletionPage';
import TestRoutes from './pages/TestRoutes';
import WelcomePage from './pages/WelcomePage';
import { FormProvider } from './context/FormContext';

// Simple debug component
const DebugPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Debug Page</h1>
      <p>If you can see this, basic React rendering is working!</p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/onboarding" element={<OnboardingLayout />} />
          <Route path="/completion" element={<CompletionPage />} />
          <Route path="/test" element={<TestRoutes />} />
          <Route path="/debug" element={<DebugPage />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
