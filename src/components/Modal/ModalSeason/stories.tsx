import { ModalSeason } from ".";
import { Provider } from 'react-redux';
import store from '../../../storage/store'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ModalSeason',
  component: ModalSeason,
  args: {
    season: {
      all: ['2020', '2021', '2022']
    }
  }
}
export const Template = (args: any) => {
  return (
    <div>
      <Provider store={store}>
        <ModalSeason />
      </Provider>
    </div>
  )
}

