import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from './pages/Home.jsx';
import Messages from './pages/Messages.jsx';
import Search from './pages/Search.jsx';
import Navbar from './components/Navbar.jsx';
import { useState } from 'react';

function App() {
    const [showModal, setShowModal] = useState(false);
    return (
        <BrowserRouter>
            <Navbar showModal={showModal} setShowModal={setShowModal} />
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
