import { Paths } from "../constants";

export default function getPaths(coinName: string) {
	return {
		coins: `${Paths.COIN}${coinName}`,
	};
}
