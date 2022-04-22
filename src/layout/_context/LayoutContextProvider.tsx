import * as React from "react";
import { LayoutState } from "../types";

interface Props {
	initialState: LayoutState;
	children: React.ReactNode;
}

export const LayoutContext = React.createContext<LayoutState>({
	changeCurrency: () => null,
	changeLanguage: () => null,
	currency: "",
	language: "",
});

export const LayoutContextProvider: React.FC<Props> = React.memo(
	({ children, initialState }) => {
		return (
			<LayoutContext.Provider value={initialState}>
				{children}
			</LayoutContext.Provider>
		);
	}
);
