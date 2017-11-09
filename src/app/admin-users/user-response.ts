import { IUser } from "./user";

export interface IUserResponse{
    status: string,
    users: IUser[]
}