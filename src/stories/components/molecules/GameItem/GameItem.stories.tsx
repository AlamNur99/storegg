import React from 'react';
import { Meta, Story } from '@storybook/react';
import GameItem, {
  GameitemProps,
} from '../../../../../components/molecules/GameItem';

export default {
  title: 'Components/Atoms/GameItem',
  component: GameItem,
} as Meta;

const Template: Story<GameitemProps> = (args) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Super March',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
