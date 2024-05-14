import { useContext } from 'react';
import reactLogo from '../assets/react.svg';
import { ThemeContext } from '../App';
import { NavLink } from 'react-router-dom';
import { BasicBtnStyled } from '../styled/menuStyled';

export const Home = () => {

    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext error.');
    }

    const { theme, setTheme } = themeContext;
    return (
        <>
            <div>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/projects'}>Projects</NavLink></li>
                </ul>
            </div>
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>My portfolio Home</h1>
            <div className="card">
                <BasicBtnStyled onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                }}>
                    Toggle theme
                </BasicBtnStyled>
            </div>
        </>
    )
}

