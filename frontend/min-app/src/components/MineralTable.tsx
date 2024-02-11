import React from 'react';
import { useEffect, useState } from 'react';
import TableRow from './TableRow';
import { MineralResponse } from '../models/MineralResponse';
import { getAll } from '../services/minerals';

const MineralTable = () => {

	const [minerals, setMinerals] = useState<MineralResponse[]>([]);

	useEffect(() => {
		fetchData();
	}, []);
    
	const fetchData = async () => {
		const mineralList : MineralResponse[] = await getAll();	
		//console.log('minerals ', mineralList);
		setMinerals(mineralList);
	};

	return (
		<div>
			<table>
				<tr>
					<th>Which rock</th>
					<th>Found in</th>
				</tr>
				{minerals.map(min => {
					return (
						<TableRow key={min.item_id} mineral={min} />
					);
				})};
			</table>
		</div>
	);
};

export default MineralTable;