import React from 'react';
import loginIcon from '../img/login.svg'
const Header = props => {
    const { login } = props;
    const handleClick = () => login()
    return ( 
        <header>
            <h1>Todo List</h1>
            <button onClick={handleClick}>
                <img src={loginIcon} alt="login" />
            </button>
        </header>
     );
}
 
export default Header;