import React from 'react';
import { useEffect, useState } from 'react';
import { MineralResponse } from '../models/MineralResponse';
import { getAll } from '../services/minerals';

const MineralTable = () => {

	const [minerals, setMinerals] = useState<MineralResponse[]>([]);
	const [filteredMinerals, setFilteredMinerals] = useState<MineralResponse[]>([]);

	useEffect(() => {
		fetchData();
	}, []);
    
	const fetchData = async () => {
		const mineralList : MineralResponse[] = await getAll();	
		setMinerals(mineralList);
		setFilteredMinerals(mineralList);
	};

	const handleMineralFilter = (event : React.ChangeEvent<HTMLInputElement>) : void => {
		const value = event.target.value;
		const filtered = minerals.filter(min => min.Minerale.toLowerCase().includes(value.toLowerCase()));
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
						<th>
							<input></input>
						</th>
						<th>
							<input type="text" onChange={handleMineralFilter}></input>
						</th>
						<th>
							<input></input>
						</th>
					</tr>
					{filteredMinerals.map((mineral) => {
						return (
							<tr key={mineral.item_id}>
								<td>{mineral.item_id}</td>
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