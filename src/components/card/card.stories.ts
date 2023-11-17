import type { StoryObj, Meta } from '@storybook/html';

import { card } from './index';
import type {CardProps} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Card',
  tags: ['autodocs'],
  render: (args) => {
    return card(args);
  },
  argTypes: {
    nome: {description: 'nome do profile'},
    cargo: {description: 'cargo do profile'},
    img: {description: 'endereço para a imgaem do avatar'},
}
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    nome: 'Rodolfo Bertini', 
    cargo: 'Empresário',
    img: 'https://github.com/rodolfobertini/rodolfobertini.github.io/blob/main/docs/images/perfillinkedin150x150.jpg?raw=true',
  }
};

