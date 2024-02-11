import React from 'react';
import { MineralResponse } from '../models/MineralResponse';

interface TableRowProps {
	mineral: MineralResponse;
}

const TableRow = ({mineral}:TableRowProps) => {
	console.log(mineral);
	return ( 
		<div>
			<tr>
				<td>{mineral.Classificazione}</td>
				<td>{mineral.Luogo}</td>
			</tr>
		</div>
	);
};

export default TableRow;