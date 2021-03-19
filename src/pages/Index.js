import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import useDarkMode from '../styles/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components'



const Home = () => {
    // Sidebar //
    // open false by default 
    const [isOpen, setIsOpen] = useState(false)
    // function to set state to go back and forth between true/false
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // Theme //
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    // jsx
    return (
        <>  
            <ThemeProvider theme={themeMode}>
            < GlobalStyles />
                <Sidebar isOpen={isOpen} toggle={toggle} theme={theme} toggleTheme={toggleTheme}/>
                <Navbar toggle={toggle} theme={theme} toggleTheme={toggleTheme}/>
                <div className="react-transition swipe-up" style={{animationDuration: '1.5s'}}>
                    <Intro/>
                    <About/>
                    <Portfolio />
                    <Contact />
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    )
}

export default Home


// const Container = styled.div``;

