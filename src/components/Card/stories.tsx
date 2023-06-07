import { Card } from ".";
import { Earth } from '../../UI/Earth'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Card',
  component: Card,
  args: {
    title: 'Selecione o país',
    img: <Earth />,
  }
}

export const Template = (args: any) => {
  return (
    <div>
      <Card {...args} />
    </div>
  )
}
