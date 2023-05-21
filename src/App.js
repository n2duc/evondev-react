import React from "react";
import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import PhotoContext from "./components/contexts/PhotoContext";
import MovieSearch from "./components/movieSearch/MovieSearch";
import Nav from "./components/router-dom/Nav";
import Blog from "./components/router-dom/Blog";
import Page404 from "./components/router-dom/Page404";
import BlogDetail from "./components/router-dom/BlogDetail";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route path="/" element={<PhotoContext />} />
                    <Route path="/movie" element={<MovieSearch />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/blog/:slug" element={<BlogDetail />}/>
                </Route>
                <Route path="*" element={<Page404 />}/>
            </Routes>
        </>
    );
}

export default App;
