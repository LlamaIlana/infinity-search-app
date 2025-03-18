import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Music from "./components/music.js";
import TVSeries from "./components/tvSeries.js";
import Movie from "./components/movies.js";
import Header from "./components/header.js";
import Home from "./components/home.js";
import EBook from "./components/eBooks.js";
import Podcast from "./components/podcast.js";
import Software from "./components/software.js";
import ShortFilm from "./components/shortFilms.js";
import All from "./components/all.js";
import FavoritesPage from "./components/favourites.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/ebook" element={<EBook />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/software" element={<Software />} />
        <Route path="/shortfilm" element={<ShortFilm />} />
        <Route path="/all" element={<All />} />
        <Route path="/favourites" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
