import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MineralResponse } from '../models/MineralResponse';
import { getMineralById } from '../services/minerals';
import './PageLayout.css';

const Mineral = () => {
	const {id} = useParams();
	const [mineral, setMineral] = useState<MineralResponse>();

	useEffect(() => {
		fetchData();
	}, []);
    
	const fetchData = async () => {
		//TODO: fix this null assertion
		const mineralResponse : MineralResponse = await getMineralById(id!);	
		setMineral(mineralResponse);
	};

	return (
		<div className='margin'>
			{mineral?.Minerale}
		</div>
	);

};

export default Mineral;