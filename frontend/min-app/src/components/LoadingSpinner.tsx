import React from 'react';
import './Helpers.css';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
	return (
		<div className=' flex-center-align'>
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	);
};

export default LoadingSpinner;