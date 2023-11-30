import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function Sidebar() {
	const user = useSelector(selectUser);
	console.log(user);
	const recentItem = (topic) => {
		return (
			<div className='sidebar__recentItem'>
				<span className='sidebar_hash'>#</span>
				<p>{topic}</p>
			</div>
		);
	};

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://freedesignfile.com/upload/2018/07/Colorful-splash-background-Stock-Photo-04.jpg'
					alt=''
				/>
				<Avatar
					src={user?.photoUrl}
					className='sidebar__avatar'>
					{user?.displayName[0]}
				</Avatar>
				<h2>{user?.displayName}</h2>
				<h4>{user?.email}</h4>
			</div>
			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p className='sidebar__statText'>Who viewed you</p>
					<p className='sidebar__statNumber'>2.543</p>
				</div>
				<div className='sidebar__stat'>
					<p className='sidebar__statText'>Views on post</p>
					<p className='sidebar__statNumber'>2.446</p>
				</div>
			</div>
			<div className='sidebar__bottom'>
				<p className='recent__p'>Recent</p>
				{recentItem("ReactJS")}
				{recentItem("Programming")}
				{recentItem("Software Engineering")}
				{recentItem("UX/UI Design")}
				{recentItem("Developer")}
			</div>
		</div>
	);
}
