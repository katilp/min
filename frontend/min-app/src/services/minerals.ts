import { MineralResponse } from '../models/MineralResponse';

const baseUrl = 'http://localhost:3001/list';

export const getAll = async () => {
	const response = await fetch(baseUrl); //TODO: see if method and headers need to be specified
	if (response.ok) {
		const minerals : MineralResponse[] = await response.json();
		return minerals;
	}
	else {
		throw Error('it went sideways');
	}
};

export const getMineralById = async (id : string) => {
	const response = await fetch(`${baseUrl}/item_id/"${id}"`); //TODO: see if method and headers need to be specified
	if (response.ok) {
		const mineral : MineralResponse = await response.json();
		return mineral;
	}
	else {
		throw Error('it went sideways');
	}
};
