import {ICircuit} from "../Shared/Circuit/circuit";

export interface IRace {
  season: number;
  round: number;
  raceName: string;
  Circuit: ICircuit;
  date: string;
  time: string;
}
