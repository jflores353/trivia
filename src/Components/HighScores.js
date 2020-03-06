import React, { useEffect } from 'react';
import { useFirebase } from './Firebase/FirebaseContext';

export default function HighScores() {
	const firebase = useFirebase();

	useEffect(() => {
		firebase.scores().once('value', snapshot => {
			const data = snapshot.val();
			const sortedScores = formatScoreData(data);
			console.log(sortedScores);
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
			<h1>High Scores</h1>
		</>
	);
}
