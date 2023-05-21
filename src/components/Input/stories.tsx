import { Input } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Input',
  component: Input,
  args: {
    type: 'text',
    name: 'Nome',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => { },
    value: 'TestName',
    error: ''
  }
}

export const Template = (args: any) => {
  return (
    <div>
      <Input {...args} />
    </div>
  )
}
export const Template2 = (args: any) => {
  return (
    <div>
      <Input {...args} />
    </div>
  )
}
Template2.args = {
  type: 'text',
  name: 'Nome',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => { },
  value: 'T',
  error: 'preencha duas palavras'
}