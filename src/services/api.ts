const API_URL = ' https://v3.football.api-sports.io/'

export function AUTH_USER_API(apiKey:string) {
  return {
    url: `${API_URL}countries`,
    options: {
      method: 'GET',
      headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': apiKey
    },
    },
  };
}
export function SEASON_API (apiKey:string) {
  return {
    url: `${API_URL}leagues/seasons`,
    options: {
      method: 'GET',
      headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': apiKey
    },
    },
  };
}
export function LEAGUES_API (apiKey:string, country:string, season:string) {
    return {
    url: `${API_URL}leagues?country=${country}&season=${season}`,
    options: {
      method: 'GET',
      headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': apiKey
    },
    },
  };
}
export function CLUB_API (apiKey:string, league:string, season:string) {
  return {
    url: `${API_URL}teams?league=${league}&season=${season}`,
    options: {
      method: 'GET',
      headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': apiKey
    },
    },
  };
}
export function STATISTICS_API (apiKey:string, league:string, season:string, club:string) {
    return {
    url: `${API_URL}teams/statistics?league=${league}&season=${season}&team=${club}`,
    options: {
      method: 'GET',
      headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': apiKey
    },
    },
  };
}

export function CHART_STATISTICS_API (apiKey:string, league:string, season:string, club:string) {
  return {
  url: `${API_URL}players?league=${league}&season=${season}&team=${club}`,
  options: {
    method: 'GET',
    headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': apiKey
  },
  },
};
}