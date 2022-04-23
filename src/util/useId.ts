import { useRouter } from "next/router";

export const useId = (key: string) => {
	const router = useRouter();

	return router.query[key] as string;
};
