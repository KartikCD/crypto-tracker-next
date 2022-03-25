import * as React from "react";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";
import { Label } from "../ui-components";

const Home: NextPage = React.memo(() => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<Label>{t("description")}</Label>
		</div>
	);
});

export default Home;
