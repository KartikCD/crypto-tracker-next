import * as React from "react";
import useCoinName from "./useCoinName";

const CoinName = React.memo(() => {
	const coinName = useCoinName();

	return <div>{coinName}</div>;
});

export default CoinName;
