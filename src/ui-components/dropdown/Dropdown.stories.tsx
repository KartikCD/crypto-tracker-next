import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Dropdown } from "..";

storiesOf("Dropdown", module).add("default", () => (
	<Dropdown>
		<option value='Apple'>INR</option>
		<option value='Pineapple'>USD</option>
	</Dropdown>
));
