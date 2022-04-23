import { Coins } from "../types/Coins.type";
import http from "../util/http-common";

class CryptoTrackerDataService {
	getAllCoins(currency: string) {
		return http.get<Array<Coins>>(
			`/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
		);
	}
}

export default new CryptoTrackerDataService();
