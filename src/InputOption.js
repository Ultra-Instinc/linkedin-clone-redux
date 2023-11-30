import React from "react";
import "./InputOption.css";

export default function InputOption({ title, Icon, color }) {
	return (
		<div className='inputOption'>
			<Icon style={{ color }} />
			<h4>{title}</h4>
		</div>
	);
}
