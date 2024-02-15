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
					<th>Classificazione</th>
					<th>Minerale</th>
					<th>Trovato in</th>
				</tr>
				{/* {minerals.map(min => {
					return (
						<TableRow key={min.item_id} mineral={min} />
					);
				})}; */}
				{minerals.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Classificazione}</td>
                            <td>{val.Minerale}</td>
                            <td>{val.Luogo}</td>
                        </tr>
                    );
                })}
			</table>
		</div>
	);
};

export default MineralTable;