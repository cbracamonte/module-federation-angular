import { AbilitiesModel } from '../Ability/Abilities.model';

export interface PokemonModel {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: AbilitiesModel[];
  location_area_encounters: string;
}
