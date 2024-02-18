import React from 'react';
import { useEffect, useState } from 'react';
import { MineralResponse } from '../models/MineralResponse';
import { getAll } from '../services/minerals';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

const MineralTable = () => {

	const [minerals, setMinerals] = useState<MineralResponse[]>([]);
	const [filteredMinerals, setFilteredMinerals] = useState<MineralResponse[]>([]);
	const [mineralFilter, setMineralFilter] = useState<string>('');
	const [locationFilter, setLocationFilter] = useState<string>('');

	//let classificationList : string[] = [];

	/// DATA FETCHING AND INIT STUFF
	useEffect(() => {
		fetchData();
	}, []);
    
	const fetchData = async () => {
		const mineralList : MineralResponse[] = await getAll();	
		setMinerals(mineralList);
		setFilteredMinerals(mineralList);
	};

	/// FILTERING
	// const createClassificationList = (minList: MineralResponse[]) : string[] => {
	// 	const classList : string[] = [];
	// 	minList.forEach(min => {
	// 		const splitstring = min.Classificazione.split('-');
	// 		const recomposedString = splitstring[0] + splitstring[1];
	// 		if (!classList.includes(recomposedString)) {
	// 			classList.push(recomposedString);
	// 		}
	// 	});
	// 	return classList;
	// };

	const handleMineralFilter = (event : React.ChangeEvent<HTMLInputElement>) : void => {
		const value = event.target.value;
		setMineralFilter(value);
		const filtered = minerals.filter(min => 
			min.Minerale.toLowerCase().includes(value.toLowerCase()) && //cannot call mineralFilter bc delay in one character
			min.Luogo.toLowerCase().includes(locationFilter.toLowerCase()));
		setFilteredMinerals(filtered);
	};

	const handleLocationFilter = (event : React.ChangeEvent<HTMLInputElement>) : void => {
		const value = event.target.value;
		setLocationFilter(value);
		const filtered = minerals.filter(min => 
			min.Luogo.toLowerCase().includes(value.toLowerCase()) &&
			min.Minerale.toLowerCase().includes(mineralFilter.toLowerCase()));
		setFilteredMinerals(filtered);
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Classificazione</th>
						<th>Minerale</th>
						<th>Trovato in</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th></th>
						<th></th>
						<th>
							<input type="text" onChange={handleMineralFilter}></input>
						</th>
						<th>
							<input type="text" onChange={handleLocationFilter}></input>
						</th>
					</tr>
					{filteredMinerals.map((mineral) => {
						return (
							<tr key={mineral.item_id}>
								<td><Link to ={`/minerals/${mineral.item_id}`}>{mineral.item_id}</Link></td>
								<td>{mineral.Classificazione}</td>
								<td>{mineral.Minerale}</td>
								<td>{mineral.Luogo}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default MineralTable;