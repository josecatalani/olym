import React, { useContext } from 'react';
import './Header.css';
import { Filters } from '../constants/types';
import { AppContext, defaulState } from './App';
import classNames from 'classnames';

const FilterPills = () => {
    /* @ts-ignore */
    const { state, setState } = useContext(AppContext);

    const onClick = (key: string) => {
        setState({
            ...defaulState, 
            activeFilters: {
                ...defaulState.activeFilters,
                [key]: state.activeFilters[key] === true ? false : true
            }
        })
    }

    return (
        <div className="FilterPills" >
            <ul>
                {
                    Object.entries(Filters).map(([name, key]) => 
                        <li
                            className={classNames(['FilterLabel', state.activeFilters[key] ? 'active': null])}
                            attr-key={key}
                            onClick={() => onClick(key)}
                        >
                            {name}
                        </li>
                    )
                }
            </ul>
        </div >
    )
}

const Header = () => {
    return (
        <header className='Header'>
            <FilterPills />
        </header>
    )
}

export { Header };
