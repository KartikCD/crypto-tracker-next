import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Label } from "..";

storiesOf("Label", module).add("default", () => (
	<Label>Some Text in Label</Label>
));
