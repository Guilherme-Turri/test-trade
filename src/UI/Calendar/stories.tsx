import { Calendar } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Calendar',
  component: Calendar,

}
const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Template = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Calendar {...args} />
    </div>
  )
}