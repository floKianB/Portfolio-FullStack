import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function AllRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    )
}

export default AllRoutes;