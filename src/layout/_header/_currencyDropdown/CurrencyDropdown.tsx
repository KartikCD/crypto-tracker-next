import * as React from "react";
import { Dropdown } from "../../../ui-components";
import { LayoutContext } from "../../_context/LayoutContextProvider";

import styles from "./CurrencyDropdown.module.css";

export const CurrencyDropdown = React.memo(() => {
	const { currency, changeCurrency } = React.useContext(LayoutContext);

	const onChange = React.useCallback(
		e => {
			changeCurrency(e.target.value);
		},
		[changeCurrency]
	);

	return (
		<Dropdown
			value={currency}
			onChange={onChange}
			className={styles.dropdownStyle}>
			<option value='USD'>USD</option>
			<option value='INR'>INR</option>
		</Dropdown>
	);
});
