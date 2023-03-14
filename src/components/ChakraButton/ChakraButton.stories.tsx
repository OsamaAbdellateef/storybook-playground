import { Button, ButtonProps } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"

export default {
    title: "Chakra/Button",
    component: Button,
} satisfies Meta


const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const GhostButton = Template.bind({});
GhostButton.args = { variant: "ghost", children: "this is text" }

export const ChakraButton = Template.bind({});
ChakraButton.args = { variant: "solid", children: "this is text", color: "blue.500", backgroundColor: "blue.300" }