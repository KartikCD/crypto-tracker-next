import * as React from "react";
import classnames from "classnames";

import styles from "./Label.module.css";

interface Props {
	as?: keyof React.ReactHTML;
	className?: string;
}

export function Label({
	as: As = "label",
	className,
	children,
}: React.PropsWithChildren<Props>) {
	return (
		<As className={classnames(styles.labelStyle, className)}>{children}</As>
	);
}
