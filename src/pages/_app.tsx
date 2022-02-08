import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n/i18n";

const MyApp = React.memo(({ Component, pageProps }: AppProps) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Component {...pageProps} />
));

export default MyApp;
