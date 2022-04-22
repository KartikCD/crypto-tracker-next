import Link from "next/link";
import * as React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

import { Paths } from "../../constants";
import { Label } from "../../ui-components";
import { LanguageDropdown } from "./_languageDropdown/LanguageDropdown";
import { CurrencyDropdown } from "./_currencyDropdown/CurrencyDropdown";

export const Header = React.memo(() => {
	const { t } = useTranslation();

	return (
		<header className={styles.headerStyle}>
			<div className={styles.headerRoot}>
				<Link href={Paths.HOME}>
					<Label className={styles.headerTitle}>{t("pageTitle")}</Label>
				</Link>
				<div className={styles.headerDropdown}>
					<LanguageDropdown />
					<CurrencyDropdown />
				</div>
			</div>
		</header>
	);
});
