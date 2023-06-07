export const initialState={
  parameters:{
    country:{
      all: null,
      selected:null
    },
    league:{
      all:null, 
      selected:null
    },
    club:{
      all: null,
      selected:null
    },
    season:{
      all:null,
      selected:null,
   }
  }
  }

export const mockCountries = [
  {
    name: 'C1',
    code: '01',
    flag: 'flag1'
  }, 
  {
    name: 'C2',
    code: '02',
    flag: 'flag2'
  },
]

export const mockLeagues =[
  {
    league:{
      id:'l1',
      name:'league01',
      logo:'logo01'
    },
  },
  {
    league:{
      id:'l2',
      name:'league02',
      logo:'logo02'
    },
  }
]

export const mockClubs =[
  {
    team:{
      id:'c1',
      name:'club01',
      logo:'logo01',
      code:'123'
    },
  },
  {
    team:{
      id:'c2',
      name:'club02',
      logo:'logo02',
      code:'2345'
    },
  }
]

