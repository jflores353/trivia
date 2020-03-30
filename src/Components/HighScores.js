import React, { useEffect, useState } from 'react';
import { useFirebase } from './Firebase/FirebaseContext';
import { Link } from 'react-router-dom';

export default function HighScores() {
	const firebase = useFirebase();
	const [scores, setScores] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		firebase.scores().once('value', snapshot => {
			const data = snapshot.val();
			const sortedScores = formatScoreData(data);
			setScores(sortedScores);
			setLoading(false);
			// console.log(sortedScores);
		});
	});

	const formatScoreData = firebaseScores => {
		const scores = [];

		//* The firebaseScore(s) have a key generated outside each object,
		//* This loop assigns that key to a new key that we then push inside the object and can now have all
		//* key values inside a more user friendly layout
		for (let key in firebaseScores) {
			const val = firebaseScores[key];
			val['key'] = key;
			scores.push(val);
		}

		return scores
			.sort((score1, score2) => score2.score - score1.score)
			.slice(0, 10);
	};

	return (
		<>
			{loading && <div id='loader'></div>}
			{!loading && (
				<>
					<h1>High Scores</h1>
					<div id='highScoreList'>
						{scores.map((record, index) => (
							<li key={record.key}>
								{index + 1}. {record.name} - {record.score}
							</li>
						))}
					</div>
				</>
			)}
			<Link to='/' className='btn' id='return'>
				Back to Home
			</Link>
		</>
	);
}
