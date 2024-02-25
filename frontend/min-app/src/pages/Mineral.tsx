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

	return (
		<div className='margin'>
			{!!mineral?.Foto_1 && <img src={imgUrl+mineral?.item_id+'-1.jpg'}></img>}
			{!!mineral?.Foto_2 && <img src={imgUrl+mineral?.item_id+'-2.jpg'}></img> }
			{!!mineral?.Foto_3 && <img src={imgUrl+mineral?.item_id+'-3.jpg'}></img> }
			<ul>
				<li>{mineral?.Minerale}</li>
				<li>{mineral?.item_id}: {mineral?.Classificazione}</li>
				<li>{mineral?.Luogo}, {mineral?.Stato}</li>
				<li>Trovato: {mineral?.Anno_di_ritr}</li>
				<li>In collezione: {mineral?.Anno_in_coll}</li>
				<li>Note: {mineral?.Note}</li>
			</ul>
		</div>
	);

};

export default Mineral;