export type UserRole = "customer" | "admin"

export interface User{
  id: number,
  email: string,
  name: string, 
  password: string,
  role: UserRole,
  avatar: string | undefined
}

export interface UserReducerState{
  userList: User[],
  currentUser: User | undefined
}

export interface LoginType {
  email: string,
  password: string
}

export interface RegisterType {
  name: string,
  email: string,
  password: string
}