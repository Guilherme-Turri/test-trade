import { League } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'League',
  component: League,

}
const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Template = (args: any) => {
  return (
    <div style={ajustDiv}>
      <League {...args} />
    </div>
  )
}