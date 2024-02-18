import React from 'react';
import '../App.css';
import { MineralResponse } from '../models/MineralResponse';
import { Link } from 'react-router-dom';

interface TableRowProps {
	mineral: MineralResponse;
}

const TableRow = ({mineral}:TableRowProps) => {
	console.log(mineral);
	return ( 
		<div>
			<tr>
				<td><Link to ={`/minerals/${mineral.item_id}`}>{mineral.item_id}</Link></td>
				<td>{mineral.Classificazione}</td>
				<td>{mineral.Minerale}</td>
				<td>{mineral.Luogo}</td>
			</tr>
		</div>
	);
};

export default TableRow;