import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from './pages/Home.jsx';
import Messages from './pages/Messages.jsx';
import Search from './pages/Search.jsx';
import Navbar from './components/Navbar.jsx';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute.jsx';
import PrivateRouteSign from './components/PrivateRouteSign.jsx';
import { useSelector } from 'react-redux';

function App() {
    const [showModal, setShowModal] = useState(false);
    const { currentUser } = useSelector((state) => state.user);

    return (
        <BrowserRouter>
            {currentUser && <Navbar showModal={showModal} setShowModal={setShowModal} />}
            <Routes>
                <Route element={<PrivateRouteSign />}>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
