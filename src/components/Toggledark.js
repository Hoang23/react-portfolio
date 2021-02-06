import React from 'react'
import styled from 'styled-components';

import { CgSun } from 'react-icons/cg';
import { HiMoon} from 'react-icons/hi';

const Toggledark = ({ theme, toggleTheme }) => {
    console.log(theme);

    return (
        <darkToggleIcons onClick={toggleTheme}>
            { theme === 'light' ? <HiMoon fill="#303030" size={18}/>  : <CgSun size={18}/> }
        </darkToggleIcons>
    )
}

export default Toggledark 


const darkToggleIcons = styled.div`
    border: 2px solid red;
    
 
`;