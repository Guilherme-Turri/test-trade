import { Club } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Club',
  component: Club,

}
const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Template = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Club {...args} />
    </div>
  )
}