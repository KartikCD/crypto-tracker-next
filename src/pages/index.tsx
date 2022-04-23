import * as React from "react";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";

const Home: NextPage = React.memo(() => {
	const { t } = useTranslation();

	return <div className={styles.container}>{t("description")}</div>;
});

export default Home;
