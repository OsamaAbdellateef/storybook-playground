import Button, { ButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react"


export default {
    title: "Button",
    component: Button,
    argTypes: {
        variant: {
            description: "you can change the button variant",
            control: { type: "select" },
            options: ["primary", "secondary", "success", "danger"]
        }
    }
} satisfies Meta;



const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    children: "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "secondary",
}

export const Success = Template.bind({});
Success.args = {
    variant: "success",
    children: "success"
}

export const Danger = Template.bind({});
Danger.args = {
    variant: "danger",
    children: "danger"
}