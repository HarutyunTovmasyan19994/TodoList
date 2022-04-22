export interface iAction {
    type: string,
    payload?: any
}
export interface iUserData {
    name:string,
    email:string,
    id:number,
    status?:string
}