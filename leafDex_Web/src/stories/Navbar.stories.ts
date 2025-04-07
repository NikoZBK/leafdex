import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Navbar from '../components/ui/Navbar.tsx';

const meta: Meta<typeof Navbar> = {
    title: 'Example/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const FirstStory: Story = {

};