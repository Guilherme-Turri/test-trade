import { SubmitButton } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'TextComponent',
  component: SubmitButton,
  args: {
    children: 'Submit',
    apyKey: '123',
    error: ''
  }
}

export const Template = (args: any) => {
  return (
    <div>
      <SubmitButton {...args} />
    </div>
  )
}

export const Template2 = (args: any) => {
  return (
    <div>
      <SubmitButton {...args} />
    </div>
  )
}
Template2.args = {
  children: 'Submit',
  apyKey: '',
  error: '123'
}
