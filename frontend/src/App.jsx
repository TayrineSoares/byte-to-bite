import './App.css';
import Fridge from './components/Fridge';
import Nav from './components/Nav';
import SavedRecipesPage from './components/SavedRecipesPage';
import SearchPage from './components/SearchPage';
import MakeRecipePage from './components/MakeRecipePage';
import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from "./context/FavoritesContext";
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <FavoritesProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Fridge />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/saved-recipes" element={<SavedRecipesPage />} />
        <Route path="/make-recipe" element={<MakeRecipePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </FavoritesProvider>
  );
};

export default App;