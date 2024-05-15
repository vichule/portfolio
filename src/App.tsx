import { createContext, useState } from 'react'
import './App.css'
import { Footer } from './components/footer';
import { Home } from './views/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Projects } from './views/projectsPage';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


function App() {

  const [theme, setTheme] = useState('dark')
  console.log(theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }
