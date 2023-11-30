import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscribtionIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDayRounded";
import Post from "./Post";
import {
	collection,
	addDoc,
	getDocs,
	serverTimestamp,
	query,
	orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
export default function Feed() {
	const user = useSelector(selectUser);
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isPosting, setIsPosting] = useState(false);
	const postsCollectionRef = collection(db, "posts");

	useEffect(() => {
		let fullDocs = [];
		const fetchPosts = async () => {
			const q = query(postsCollectionRef, orderBy("timestamp", "asc"));
			const querySnapshot = await getDocs(q);

			querySnapshot.forEach((doc) => {
				return fullDocs.unshift({
					id: doc.id,
					data: doc.data(),
				});
			});
			setPosts(fullDocs);
			setLoading(false);
		};

		fetchPosts();
		//eslint-disable-next-line
	}, [isPosting]);

	const sendPost = async (e) => {
		e.preventDefault();
		setIsPosting(true);
		await addDoc(collection(db, "posts"), {
			name: user?.displayName,
			description: user?.email,
			message: input,
			photoUrl: user?.photoUrl,
			timestamp: serverTimestamp(),
		});
		console.log("Document written with ID: ");
		setInput("");
		setIsPosting(false);
	};
	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input
							type='text'
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button
							onClick={sendPost}
							type='submit'>
							Send
						</button>
					</form>
				</div>
				<div className='feed__inputOptions'>
					<InputOption
						title={"Photo"}
						Icon={ImageIcon}
						color={"dodgerblue"}
					/>
					<InputOption
						title={"Video"}
						Icon={SubscribtionIcon}
						color={"orange"}
					/>
					<InputOption
						title={"Event"}
						Icon={EventNoteIcon}
						color={"lime"}
					/>
					<InputOption
						title={"Write article"}
						Icon={CalenderViewDayIcon}
						color={"violet"}
					/>
				</div>
			</div>
			{/* posts */}
			{loading ? (
				<Loader />
			) : (
				<FlipMove>
					{posts.map((post) => {
						return (
							<Post
								message={post.data.message}
								name={post.data.name}
								photoUrl={post.data.photoUrl}
								description={post.data.description}
								key={post.id}
							/>
						);
					})}
				</FlipMove>
			)}
		</div>
	);
}
