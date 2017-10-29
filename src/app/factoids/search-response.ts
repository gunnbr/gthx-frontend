import { IFactoid } from "./factoid";

export interface ISearchResponse{
    status: string,
    data: IFactoid[]
}