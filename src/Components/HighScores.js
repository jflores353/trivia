import React, { useEffect } from 'react';
import { useFirebase } from './Firebase/FirebaseContext';

export default function HighScores() {
	const firebase = useFirebase();

	useEffect(() => {
		firebase.scores().once('value', snapshot => {
			const data = snapshot.val();
			console.log(data);
		});
	});

	return (
		<>
			<h1>High Scores</h1>
		</>
	);
}
