import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar } from "@mui/material";

export default function HeaderOption({ Icon, title, avatar, onClick }) {
	const user = useSelector(selectUser);
	return (
		<div
			className='headerOption'
			onClick={onClick}>
			{Icon && <Icon className='headerOption__icon' />}
			{avatar && (
				<Avatar
					style={{ width: "25px", height: "25px" }}
					className='headerOption__avatar'
					src={user?.photoUrl && user.photoUrl}>
					{user?.displayName[0]}
				</Avatar>
			)}
			<h3 className='headerOption__title'>{title}</h3>
		</div>
	);
}
