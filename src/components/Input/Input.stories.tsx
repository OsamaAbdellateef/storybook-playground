import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from "./Input";
export default {
    title: "FormGroup/Input",
    component: Input,
    argTypes: {
        size: {
            description: "change input size",
            control: {
                type: "select"
            },
            options: ["small", "medium", "large"]
        }
    }
} as Meta

export const Small: Story<InputProps> = (args) => <Input {...args} />
Small.args = {
    size: "small"
}