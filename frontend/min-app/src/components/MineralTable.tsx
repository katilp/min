import React from 'react';
import { useEffect, useState } from 'react';
import { MineralResponse } from '../models/MineralResponse';
import { getAll } from '../services/minerals';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

const MineralTable = () => {

	const [minerals, setMinerals] = useState<MineralResponse[]>([]);

	useEffect(() => {
		fetchData();
	}, []);
    
	const fetchData = async () => {
		const mineralList : MineralResponse[] = await getAll();	
		setMinerals(mineralList);
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
					{minerals.map((mineral) => {
						return (
							//TODO: make sure extracted logic in TableRow does not break layout
							// <TableRow key={mineral.item_id} mineral={mineral}></TableRow>	
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