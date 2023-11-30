import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function Widget() {
	const newsArticle = (heading, subtitle) => (
		<div className='widget__article'>
			<div className='widget__articleLeft'>
				<FiberManualRecordIcon style={{ width: "15px" }} />
			</div>
			<div className='widget__articleRight'>
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className='widget'>
			<div className='widget__header'>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("React JS mastery", "Top news - 50M views")}
			{newsArticle("FireBase great", "Top news - 33M views")}
			{newsArticle("TypeScript Robust", "Top news - 27M views")}
			{newsArticle("Node JS Awesome", "Top news - 13.5M views")}
			{newsArticle("Redux Is OP", "Top news - 951K views")}
			{newsArticle("MongoDB is nice", "Top news - 357K views")}
			{newsArticle("GitLens is Fire", "Top news - 135K views")}
		</div>
	);
}
