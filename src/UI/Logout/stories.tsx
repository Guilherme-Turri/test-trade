import { Logout } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Logout',
  component: Logout,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Template = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Logout {...args} />
    </div>
  )
}