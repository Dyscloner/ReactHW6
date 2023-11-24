import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
export default function Home() {
    return (
        <>
        <div className="outerbox" >
            <h1>This is Main Page</h1>
            <h2>Daniel Cho</h2>
        </div>
        <div className='navpan'>
            <h3>Click to Move</h3>
            <nav className='navpanel'>
                <ul>
                    <li>
                        <Link to="/tictactoe" className='link1'>Tic-Tac-Toe</Link>
                    </li>
                    <li>
                        <Link to="/dadjoke" className="link2">Dad Joke</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </>
    );
}
