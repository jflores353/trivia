import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<div className='title'>
				<h1>React Quiz App</h1>
			</div>
			<Link to='/game' className='btn'>
				Start Game
			</Link>
			<Link to='/highscores' className='btn'>
				High Scores
			</Link>
		</>
	);
}
