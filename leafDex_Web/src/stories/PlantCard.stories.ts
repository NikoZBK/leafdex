import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import PlantCard from '../components/ui/PlantCard.tsx';

const meta: Meta<typeof PlantCard> = {
    title: 'Example / plantcard',
    component: PlantCard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PlantCard>;

export const Story: Story = {

};