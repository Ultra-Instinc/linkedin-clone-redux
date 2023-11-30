import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getFirestore } from "firebase/firestore";

// the firebase config from the firebase project settings
const firebaseConfig = {
	apiKey: "AIzaSyCVMTw0kBhSnQrxXxD26KGo2lj9sR0Q8nY",
	authDomain: "linkedin-clone-6b7b4.firebaseapp.com",
	projectId: "linkedin-clone-6b7b4",
	storageBucket: "linkedin-clone-6b7b4.appspot.com",
	messagingSenderId: "599347981635",
	appId: "1:599347981635:web:77be75011de238ed6d93f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);
