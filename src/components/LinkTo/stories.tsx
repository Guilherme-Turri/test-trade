import { LinkTo } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'LinkTo',
  component: LinkTo,
  args: {
    children: 'Click here',
  }
}

export const Template = (args: any) => {
  return (
    <div>
      <LinkTo {...args} />
    </div>
  )
}