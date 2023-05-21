import { ErrorMessage } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ErrorMessage',
  component: ErrorMessage,
  args: {
    children: 'this is an error message'
  }
}

export const Template = (args: any) => {
  return (
    <div>
      <ErrorMessage {...args} />
    </div>
  )
}
