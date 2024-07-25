import React, { useContext } from 'react';
import './Listing.css';
import { Game } from '../constants/types';
import { games } from '../constants/games';
import classNames from 'classnames';
import { AppContext } from './App';
import { JSX } from 'react/jsx-runtime';

const Item = ({ date, discipline, player, against, stage, isLiveGame}: Game & {isLiveGame?: boolean}) => {
    const getDisciplineIdToMatchIcon = () => {
        const withoutAccents = discipline.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const withoutSpaces = withoutAccents.replace(/\s+/g, '');
        return withoutSpaces.toLowerCase();
    }

    const formatDate = () => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
      
        return `${day}/${month}`;
    }

    const formatHour = () => {
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
      
        return `${hour}:${minute}`;
    }

    return (
        <li className={classNames(['ListingItem', getDisciplineIdToMatchIcon()])} key={`listing-item-${date}-${discipline}`}>
            <div>                
                <p>{isLiveGame ? <div className='LiveCircleHolder'><div className='LiveCircle' /></div> : null} <b>{discipline}</b></p>
                <p>{stage}</p>
                <hr/>
                {against ? <p>Brasil vs {against}</p> : <p>🇧🇷 - {player}</p>}
            </div>
            <div>
                <p><b>{formatDate()}</b></p>
                <p><b>{formatHour()}</b></p>
            </div>
        </li>
    )
}

const Listing = () => {
    /* @ts-ignore */
    const { state, setState } = useContext(AppContext);
    return (
        <>
            <ul className='ListingList'>
                {
                     state.liveGames.map((game: Game, idx: any) => <Item isLiveGame {...game}/>)
                }
            </ul>
            <hr/>
            <ul className='ListingList'>
                {
                    state.games.length > 0 
                        ? state.games.map((game: Game, idx: any) => <Item {...game}/>)
                        : <div>Nenhum joguinho hoje :(</div>
                }
            </ul>
        </>
    )
}

export { Listing };
