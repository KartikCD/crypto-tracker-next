export interface LayoutState {
	currency: string;
	changeCurrency: (value: string) => void;
	language: string;
	changeLanguage: (value: string) => void;
}
