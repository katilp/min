import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MineralResponse } from '../models/MineralResponse';
import { getMineralById } from '../services/minerals';
import './PageLayout.css';

const Mineral = () => {
	const {id} = useParams();
	const [mineral, setMineral] = useState<MineralResponse>();
	const imgUrl = 'http://34.168.8.74/img/';

	useEffect(() => {
		fetchData();
	}, []);
    
	const fetchData = async () => {
		//TODO: fix this null assertion
		const mineralResponse : MineralResponse = await getMineralById(id!);	
		setMineral(mineralResponse);
	};

	//TODO: count the number of photos 0/1/2/3 and display accordingly
	//TODO: configure the IP elsewhere 
	//TODO: scale the image properly
	return (
		<div className='margin'>
			<img src={imgUrl+mineral?.item_id+'-1.jpg'}></img>
			<ul>
				<li>{mineral?.Minerale}</li>
				<li>{mineral?.item_id} - {mineral?.Classificazione}</li>
				<li>{mineral?.Luogo}, {mineral?.Stato}</li>
				<li>Trovato: {mineral?.Anno_di_ritr}</li>
				<li>In collezzione: {mineral?.Anno_in_coll}</li>
				<li>Note: {mineral?.Note}</li>
			</ul>
		</div>
	);

};

export default Mineral;