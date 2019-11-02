import axios from "axios";
import { api_key } from "../../variables/key";

export const getSummonerInfo = summonerName => {
  return axios.get(
    `/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`
  );
};

export const getSummonerLeagueInfo = summonerId => {
  return axios.get(
    `/lol/league/v4/positions/by-summoner/${summonerId}?api_key=${api_key}`
  );
};

export const getGameList = (accountId, endIndex) => {
  return axios.get(
    `/lol/match/v4/matchlists/by-account/${accountId}?endIndex=10&api_key=${api_key}`
  );
};

export const getDetailGameList = gameId => {
  return axios.get(
    `/lol/match/v4/matches/${gameId}?api_key=${api_key}`
  );
};

export const getMasteryById = summonerId => {
  return axios.get(
    `/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${api_key}`
  );
};

export const getChampionImg = champName => { //first letter is Capital
  return axios.get(
    `http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/${champName}.png`
  , { responseType: 'arraybuffer' })
}