import * as React from "react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import "../styles/application.css";
import "../i18n/i18n";
import { Layout } from "../layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress
				color='#ffd700'
				startPosition={0.3}
				stopDelayMs={200}
				height={2}
				showOnShallow
			/>
			<Layout>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
