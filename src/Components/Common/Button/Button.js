import React from 'react';
import './Button.scss';

const Button = ({ name, stl, lnk }) => {
	return (
		<>
			<button type="button" onClick={lnk} className={`button ${stl}`}>
				{name}
			</button>
		</>
	);
};

export default Button;
