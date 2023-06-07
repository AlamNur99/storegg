import React from 'react';
import { Meta, Story } from '@storybook/react';
import StepItem, {
  StepItemProps,
} from '../../../../../components/molecules/StepItem';

export default {
  title: 'Components/Atoms/StepItem',
  component: StepItem,
} as Meta;

const Template: Story<StepItemProps> = (args) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'step-1',
  title: '1. start',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
