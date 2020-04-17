import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <h2>Todos</h2>
            <Link style={linkStyle} to='/'>Home</Link> {" |  "}
            <Link style={linkStyle} to='/About'>About</Link>
        </header>
    )

}
const linkStyle ={
    color:'#fff'
}
const headerStyle={
    background:'#333',
    margin:'bold',
    color:'#fff',
    textAlign:'center'
}
export default Header;