import { Ball } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Ball',
  component: Ball,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Template = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Ball {...args} />
    </div>
  )
}