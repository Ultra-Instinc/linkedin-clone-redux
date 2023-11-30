import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
export default function Login() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const loginToApp = async (e) => {
		e.preventDefault();
		const cred = await signInWithEmailAndPassword(auth, email, password);
		const user = cred.user;
		dispatch(
			login({
				displayName: user.displayName,
				photoUrl: user.photoURL,
				email: user.email,
				uid: user.uid,
			})
		);
	};

	const register = async () => {
		// register new user given email + password ,
		// then we update the user profile with the
		// photo & display name
		if (!name) {
			return alert("please enter a full name");
		}
		const cred = await createUserWithEmailAndPassword(auth, email, password);
		const user = cred.user;
		await updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: profilePic,
		});
		console.log(user);
		dispatch(
			login({
				displayName: user.displayName,
				photoUrl: user.photoURL,
				email: user.email,
				uid: user.uid,
			})
		);
	};
	return (
		<div className='login'>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'
				alt='linkedInLogo'
			/>
			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Full name (required if registering)'
					type='text'
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder='Profile pic URL (optional)'
					type='text'
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
					type='text'
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
					type='password'
				/>
				<button
					type='submit'
					onClick={loginToApp}>
					Sign in
				</button>
			</form>
			<p>
				Not a member?{" "}
				<span
					className='login__register'
					onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}
