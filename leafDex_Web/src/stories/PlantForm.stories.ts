import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import PlantForm from '../components/ui/PlantForm.tsx';

const meta: Meta<typeof PlantForm> = {
    title: 'plantForm',
    component: PlantForm,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PlantForm>;

export const Story: Story = {
    
};