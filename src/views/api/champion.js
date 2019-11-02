import axios from "axios";
import { api_key } from "../../variables/key";

export const getChampionData = () => {
    return axios.get(
      `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`
    );
  };