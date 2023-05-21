import { Heading } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Heading',
  component: Heading,
  args: {
    children: 'Heading text',
    uppercase: false,
    big: false,
  }
}

export const Template = (args: any) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  )
}
