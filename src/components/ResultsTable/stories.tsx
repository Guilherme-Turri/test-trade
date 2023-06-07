import { ResultsTable } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ResultsTable',
  component: ResultsTable,
  args: {
    wins: '10',
    draws: '3',
    loses: '0',
    total: '13',
  }
}

export const Template = (args: any) => {
  return (
    <div>
      <ResultsTable {...args} />
    </div>
  )
}
