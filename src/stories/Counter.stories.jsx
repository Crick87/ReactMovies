import React from 'react';
import Counter from '../components/Counter/Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const InitialValueTen = Template.bind({});
InitialValueTen.args = {
  initialValue: 10,
};

export const Incrementing = Template.bind({});
Incrementing.play = async ({ canvasElement }) => {
  const incrementButton = canvasElement.querySelector('button:last-child');
  await incrementButton.click();
  await incrementButton.click();
};

export const Decrementing = Template.bind({});
Decrementing.play = async ({ canvasElement }) => {
  const decrementButton = canvasElement.querySelector('button:first-child');
  await decrementButton.click();
  await decrementButton.click();
};

export const IncrementingAndDecrementing = Template.bind({});
IncrementingAndDecrementing.play = async ({ canvasElement }) => {
    const incrementButton = canvasElement.querySelector('button:last-child');
    const decrementButton = canvasElement.querySelector('button:first-child');
    await incrementButton.click();
    await decrementButton.click();
    await incrementButton.click();
};