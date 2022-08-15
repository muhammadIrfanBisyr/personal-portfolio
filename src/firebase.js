import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: "AIzaSyCCyFJfcmvAmjZlTuSEhVTd1VOQcr9IAzg",
	authDomain: "personal-portfolio-1171f.firebaseapp.com",
	projectId: "personal-portfolio-1171f",
	storageBucket: "personal-portfolio-1171f.appspot.com",
	messagingSenderId: "743533628244",
	appId: "1:743533628244:web:0a4b69ba556d20830696c1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app); 