import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';

export function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}
