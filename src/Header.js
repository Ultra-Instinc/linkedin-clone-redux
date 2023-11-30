import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

export default function Header() {
	const dispatch = useDispatch();
	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src={
						"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
					}
					alt='linkedIn'
				/>
				<div className='header__search'>
					<SearchIcon />
					<input
						type='text'
						placeholder='Search'
					/>
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption
					Icon={HomeIcon}
					title='Home'
				/>
				<HeaderOption
					Icon={SupervisorAccountIcon}
					title='My Network'
				/>
				<HeaderOption
					Icon={BusinessCenterIcon}
					title='Jobs'
				/>
				<HeaderOption
					Icon={ChatIcon}
					title='Messaging'
				/>
				<HeaderOption
					Icon={NotificationIcon}
					title='Notifications'
				/>
				<HeaderOption
					onClick={logoutOfApp}
					title={"Me"}
					avatar={true}
				/>
			</div>
		</div>
	);
}
