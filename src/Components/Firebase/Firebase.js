import app from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: 'https://react-trivia-ba048.firebaseio.com',
	projectID: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.db = app.database();
	}

	scores = () => this.db.ref('scores');
}

export default Firebase;
