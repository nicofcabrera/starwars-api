import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Tabs from './components/Tabs/Tabs';
import Home from './views/Home/Home';
import PageElement from './views/PageElement/PageElement';


function App() {
  return (
    <>
      <header>
        <Navbar title='The Star Wars API' />
        <Tabs />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people' element={<PageElement element='people' />} />
          <Route path='/planets' element={<PageElement element='planets' />} />
          <Route path='/starships' element={<PageElement element='starships' />} />
          <Route path='/species' element={<PageElement element='species' />} />
          <Route path='/vehicles' element={<PageElement element='vehicles' />} />
          <Route path='/films' element={<PageElement element='films' />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
