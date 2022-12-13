import { AbilityModel } from './Ability.model';

export interface AbilitiesModel {
  is_hidden: boolean;
  slot: number;
  ability: AbilityModel;
}
