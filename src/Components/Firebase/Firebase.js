import app from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectID: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET
};

export default class Firebase {
	constructor() {
		app.initializeApp(config);
		this.db = app.database();
	}

	scores = () => this.db.ref('scores');
}
