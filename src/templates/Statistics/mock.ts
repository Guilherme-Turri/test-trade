export const mockPlayers = [
  {
    player:{
      name: 'Player1',
      age: 22,
      nationality: 'BR',
     }
   },
   {
    player:{
      name: 'Player2',
      age: 23,
      nationality: 'BR',
     }
   }
]



export const mockStatistcs ={

    fixtures:{
      wins: {
        total: '2'
      },
      draws: {
        total: '2'
      },
      loses: {
        total: '2'
      },
      played: {
        total: '6'
      },
    },
    goals:{
      for:{
        minute:{
          '0-15':{
            total:1
          },
          '16-30':{
            total:1
          },
          '31-45':{
            total:2
          },
          '46-60':{
            total:3
          },
          '61-75':{
            total:2
          },
          '76-90':{
            total:1
          },
          '91-105':{
            total:2
          },
          '106-120':{
            total:1
          }
        }
      }
    },
    lineups:[
      {
        formation:'4-4-2',
        played:6
      },
      {
        formation:'4-3-3',
        played:5
      },
    ],
  }




export const parameters = {
  country: {
    selected: {
      name: 'Brazil',
      flag: 'www.flag/BR'
    }
  },
  season: {
    selected: '2020'
  },
  league: {
    selected: {
      league: {
        id: '01',
        name: 'LeagueName'
      }
    }
  },
  club: {
    selected: {
      team: {
        id: '01',
        name: 'ClubName',
        logo: 'ClubLogo'
      }
    }
  }
}