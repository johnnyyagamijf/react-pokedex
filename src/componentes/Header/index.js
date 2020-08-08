import React from 'react'

import './style.css';

export default function Header({onChangePage}) {
function handleChangePage(){
    onChangePage(1);
}
    return (
         <header className="header"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon_logo" onClick={handleChangePage}/></header>

    )
}
