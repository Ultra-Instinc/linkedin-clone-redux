import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Widget from "./Widget";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (userAuth) => {
			if (userAuth) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user

				dispatch(
					login({
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
						email: userAuth.email,
					})
				);
				// ...
			} else {
				// User is signed out
				dispatch(logout());
			}
		});
		// eslint-disable-next-line
	}, []);
	return (
		<div className='app'>
			{/* header */}
			<Header />
			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					{/* sidebar       || left panel */}
					<Sidebar />
					{/* feed          || middle panel */}
					<Feed />
					{/* widgets       || right panel */}
					<Widget />
				</div>
			)}
			{/* app body */}
		</div>
	);
}

export default App;
