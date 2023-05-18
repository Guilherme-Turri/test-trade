const API_URL = ' https://v3.football.api-sports.io/'

export function AUTH_USER_API(apiKey:string) {
  return {
    url: `${API_URL}/countries`,
    options: {
      method: 'GET',
      headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': apiKey
    },
    },
  };
}