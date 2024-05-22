import { createContext, useState } from 'react'
import './App.css'
import { Footer } from './components/footer';
import { Home } from './views/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Projects } from './views/projectsPage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, dark, light } from './theme/themeConfig';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


function App() {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }
