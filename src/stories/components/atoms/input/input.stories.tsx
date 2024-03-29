import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from '../../../../../components/atoms/Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Nama Lengkap',
  placeHolder: 'Masukkan Nama Lengkap',
};
