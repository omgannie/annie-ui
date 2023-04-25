import { OptionPicker } from ".";

export default {
    title: 'OptionPicker',
    component: OptionPicker,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  };
  
  export const Example = {
    args: {
      selectionIdentifier: "addresses",
      label: "Saved Addresses",
      options: [
        {
          optionValue: "first",
          optionLabel: "100 First Street"
        },
        {
          optionValue: "second",
          optionLabel: "200 Second Street"
        },
        {
          optionValue: "third",
          optionLabel: "300 Third Avenue"
        }
      ],
      buttonText: "Submit"
    }
  };
