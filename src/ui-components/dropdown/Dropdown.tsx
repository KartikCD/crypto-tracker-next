import * as React from "react";
import classnames from "classnames";

import styles from "./Dropdown.module.css";

export interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
	value?: string;
}

export const Dropdown: React.FC<React.PropsWithChildren<Props>> = React.memo(
	({ value, className, children, ...rest }) => {
		return (
			<select
				value={value}
				className={classnames(styles.selectDropdown, className)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...rest}>
				{children}
			</select>
		);
	}
);
