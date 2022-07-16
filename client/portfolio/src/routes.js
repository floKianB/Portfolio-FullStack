import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import AllBlogs from './pages/allblogs';

function AllRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/kian" element={<Home />} />
            <Route path="/kian/blogs" element={<AllBlogs />} />
        </Routes>
    </BrowserRouter>
    )
}

export default AllRoutes;