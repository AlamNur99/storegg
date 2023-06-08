import React from 'react';
import { Meta, Story } from '@storybook/react';
import FooterLink, {
  FooterLinkProps,
} from '../../../../../components/atoms/FooterLink';

export default {
  title: 'Components/Atoms/FooterLink',
  component: FooterLink,
} as Meta;

const Template: Story<FooterLinkProps> = (args) => <FooterLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'support',
};
