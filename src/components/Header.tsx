import React from 'react';
import './Header.css';
import { Filters } from '../constants/types';

const FilterPills = () => {
    console.log()
    return (
        <div className="FilterPills" >
            <ul>
                {
                    Object.entries(Filters).map(([name, key]) => 
                        <li className='FilterLabel' attr-key={key}>{name}</li>
                    )
                }
            </ul>
        </div >
    )
}

const SearchBar = () => {
    return <div><form><input type='search' placeholder="Vôlei..." /></form></div>
}

const Header = () => {
    return (
        <header className='Header'>
            <SearchBar />
            <FilterPills />
        </header>
    )
}

export { Header };
