import {useState} from 'react'

export const useDarkMode = () => {
    
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }
    
    
    
    return [ theme, toggleTheme ] // return array of instead of normally jsx UI
}

export default useDarkMode