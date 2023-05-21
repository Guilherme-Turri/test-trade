import { NotFoundLocation } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'NotFoundLocation',
  component: NotFoundLocation,
}

const ajustDiv = {
  width: '200px',
  height: '200px'
}
export const Template = (args: any) => {
  return (
    <div style={ajustDiv}>
      <NotFoundLocation {...args} />
    </div>
  )
}