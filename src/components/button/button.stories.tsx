import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"
import { readmeCleanup } from "../../../utils/readme"
import Button from "."

// @ts-ignore
import readme from "./README.md"

const mockStory = storiesOf("Button", module)

const subData = {
  readme: {
    sidebar: readmeCleanup(readme),
  },
  jest: ["button.test.tsx"],
}

mockStory.add(
  "Button",
  () => {
    return <Button label={text("Label prop", "")} onClick={action("clicked")} />
  },
  subData
)

mockStory.add(
  "Button2",
  () => (
    <Button
      onClick={action("clicked")}
      isLoading={boolean("isLoading prop", true)}
      label={text("Label prop", "Hello loading button")}
    />
  ),
  subData
)
