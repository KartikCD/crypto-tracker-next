import * as React from "react";
import { Dropdown } from "../../../ui-components";
import { LayoutContext } from "../../_context/LayoutContextProvider";

import styles from "./LanguageDropdown.module.css";

export const LanguageDropdown = React.memo(() => {
	const { language, changeLanguage } = React.useContext(LayoutContext);

	const onChange = React.useCallback(
		e => {
			changeLanguage(e.target.value);
		},
		[changeLanguage]
	);

	return (
		<Dropdown
			value={language}
			onChange={onChange}
			className={styles.dropdownStyle}>
			<option value='en'>English</option>
			<option value='hindi'>Hindi</option>
		</Dropdown>
	);
});
