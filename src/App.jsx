import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './components/Home';
import Business from './pages/Business'
import FeaturesPage from './pages/FeaturesPage'
import LoginPage from './authentication/LoginPage'
import ForgotPage from './authentication/ForgotPage'
import SentEmailPage from './authentication/SentEmailPage'
import ConfirmPage from './authentication/ConfirmPage'
import ResetPage from './authentication/ResetPage'
import SignUpPage from './authentication/SignUpPage'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
         <Navbar /> 
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/business" element={<Business />}/>
            <Route path="/feature"  element={<FeaturesPage/>}/>
            <Route path="/login"  element={<LoginPage/>}/>
             <Route path="/forgot" element={<ForgotPage />}/>
             <Route path="/sent" element={<SentEmailPage />}/>
             <Route path="/confirm" element={<ConfirmPage />}/>
             <Route path="/reset" element={<ResetPage />}/>
             <Route path="/signup" element={<SignUpPage/>}/>
          </Routes>
        </main>
         <Footer /> 
      </div>
    </BrowserRouter>
  );
}
