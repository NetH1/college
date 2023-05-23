import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import logo from './logo.svg';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import NewsPage from './pages/NewsPage';
import AzsPage from './pages/AzsPage';
import BlogPage from './pages/BlogPage';
import EnginePage from './pages/EnginePage';
import LastPage from './pages/LastPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/last' element={<LastPage />} />
        <Route path='/engine' element={<EnginePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/azs' element={<AzsPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
