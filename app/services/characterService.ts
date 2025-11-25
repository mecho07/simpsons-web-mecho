import axios from "axios";
import { character } from "../types/character"; 

export const characterSercices = {

getAllCharacters: async(): Promise<character[]> => {
    const { data } = await axios.get("https://thesimpsonsapi.com/api/characters")

    return data.results;

}
}