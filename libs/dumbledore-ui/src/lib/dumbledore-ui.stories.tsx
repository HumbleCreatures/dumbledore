import React from 'react';
import DumbledoreUi from './dumbledore-ui'

export default {
  component: DumbledoreUi,
  title: 'Task',
};

const Template = (args:any) => <DumbledoreUi {...args} />;

export const Default = Template.bind({});
