import React from 'react';
import { useEffect, useState } from 'react';
import { MineralResponse } from '../models/MineralResponse';
import { getAll } from '../services/minerals';
import TableRow from './TableRow';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const MineralTable = () => {

	const [loading, setLoading] = useState<boolean>(true);
	const [fetchingError, setFetchingError] = useState<boolean>(false);
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
		try {
			const mineralList : MineralResponse[] = await getAll();	
			setMinerals(mineralList);
			setFilteredMinerals(mineralList);
		}
		catch (e) {
			setFetchingError(true);
		}
		setLoading(false);
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
			{fetchingError &&
				<Alert variant='danger'>
					Error fetching the data
				</Alert>	
			}
			{loading && 
				<LoadingSpinner/>
			}
			{!loading && !fetchingError &&
				<Table striped>
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
				</Table>
			}
		</div>
	);
};

export default MineralTable;