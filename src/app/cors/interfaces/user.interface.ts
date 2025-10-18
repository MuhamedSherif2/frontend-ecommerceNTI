export interface IResponse {
    message: string,
    data: string,
}

export interface ILogin {
    email: string,
    password: string,
}

export interface ISignup {
    name: string,
    email: string,
    phoneNumber: string,
    address?: string,
    isDeleted?: boolean,
    role?: string,
    password: string
}

export interface ITokenDecode {
    id: string,
    name: string,
    role: string,
    iat: number,
    exp: number
}

export interface IUserRespose {
    _id:string,
    name: string,
    email: string,
    phoneNumber: string,
    address?: string,
    isDeleted?: boolean,
    role?: string,
}

export interface IUserRes {
    message: string,
    data: IUserRespose,
}

export interface IUsersRes {
    message: string,
    data: IUserRespose[]
}