import { Earth } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Earth',
  component: Earth,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Template = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Earth {...args} />
    </div>
  )
}