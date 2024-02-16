import React from 'react';
import { useEffect, useState } from 'react';
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
				{minerals.map((mineral, key) => {
                    return (
                        <tr key={key}>
                            <td>{mineral.Classificazione}</td>
                            <td>{mineral.Minerale}</td>
                            <td>{mineral.Luogo}</td>
                        </tr>
                    );
                })}
			</table>
		</div>
	);
};

export default MineralTable;