import { ChakraProvider } from "@chakra-ui/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";

// addDecorator((story) => <ChakraProvider>{story()}</ChakraProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // viewport: INITIAL_VIEWPORTS,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => {
    return <ChakraProvider>{story()}</ChakraProvider>;
  },
];
