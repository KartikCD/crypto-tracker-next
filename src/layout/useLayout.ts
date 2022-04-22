import * as React from "react";
import { useTranslation } from "react-i18next";
import { LayoutState } from "./types";

export function useLayout() {
	const [currency, setCurrency] = React.useState<string>("INR");
	const [language, setLanguage] = React.useState<string>("en");

	const { i18n } = useTranslation();

	const onCurrencyChange = React.useCallback(
		(value: string) => {
			setCurrency(value);
		},
		[setCurrency]
	);

	const onLanguageChange = React.useCallback(
		(value: string) => {
			i18n.changeLanguage(value);
			setLanguage(value);
		},
		[setLanguage, i18n]
	);

	const initialState: LayoutState = React.useMemo(
		() => ({
			language,
			currency,
			changeCurrency: onCurrencyChange,
			changeLanguage: onLanguageChange,
		}),
		[language, currency, onLanguageChange, onCurrencyChange]
	);

	return {
		initialState,
	};
}
