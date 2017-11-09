export interface IUser {
    username: string;
    realname: string;
    email: string;
    canEditFactoids: boolean;
    canLockFactoids: boolean;
    canCreateUsers: boolean;
}
