import React from 'react';
import { MinKnapp } from './MinKnapp';

export default {
  component: MinKnapp,
  title: 'Min Snygga Knapp',
};

const Template = (args:any) => <MinKnapp {...args}>Test</MinKnapp>;

export const Default = Template.bind({});
export const WithLabel = Template.bind({label: 'Hej Hopp'});