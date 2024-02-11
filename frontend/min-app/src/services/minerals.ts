import { MineralResponse } from '../models/MineralResponse';

const baseUrl = 'http://localhost:3001/list';

export const getAll = async () => {
	const response = await fetch(baseUrl); //TODO: see if method and headers need to be specified
	console.log(response.status);
	if (response.ok) {
		const minerals : MineralResponse[] = await response.json();
		return minerals;
	}
	//TODO: clean up this try catch bc it is horrendous --> do proper error handling
	else {
		throw Error('it went sideways');
	}
};
