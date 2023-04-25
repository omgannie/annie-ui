import { CardInfoForm } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'CardInfoForm',
  component: CardInfoForm,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};