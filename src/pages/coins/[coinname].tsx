import * as React from "react";
import useCoinName from "./useCoinName";

const CoinName = React.memo(() => {
	const coinname = useCoinName();

	return <div>{coinname}</div>;
});

export default CoinName;
