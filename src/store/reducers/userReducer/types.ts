export interface UserState{
    user: any,
    message: null | string,
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    selectedUser: any,
    allUsers: []
}

export enum UserActionTypes {
    START_REQUEST = "START_REQUEST",
    FINISHED_REQUEST = "FINISHED_REQUEST",
    LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
    LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
    SERVER_ERROR = "SERVER_ERROR",
    LOGOUT_USER = "LOGOUT_USER",
    GETALLUSERS_REQUEST = "GETALLUSERS_REQUEST",
    REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS"
}

interface RegisterUserSuccessAction {
    type: UserActionTypes.REGISTER_USER_SUCCESS;
    payload: string;
}

interface StartRequestAction {
    type: UserActionTypes.START_REQUEST
}

interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
  }

interface FinishRequestAction {
    type: UserActionTypes.FINISHED_REQUEST
}

interface LoginUserSuccessAction{
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: any
}

interface LoginUserErrorAction{
    type: UserActionTypes.LOGIN_USER_ERROR,
    payload: any
}

interface ServerErrorAction{
    type: UserActionTypes.SERVER_ERROR,
    payload: any
}

interface UserListAction{
    type: UserActionTypes.GETALLUSERS_REQUEST,
    payload: any
}

export type UserActions = UserListAction | RegisterUserSuccessAction | LogoutUserAction | StartRequestAction | FinishRequestAction | LoginUserSuccessAction | LoginUserErrorAction | ServerErrorAction