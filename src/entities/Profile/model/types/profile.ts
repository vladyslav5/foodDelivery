export enum ValidateProfileError {
    INCORRENCT_USER_DATA = 'INCORRENCT_USER_DATA',
    NOT_DATA = 'NOT_DATA',
    INCORRENCT_USER_AVATAR_IMAGE = 'INCORRENCT_USER_AVATAR_IMAGE',
    SERVER_ERROR = 'SERVER_ERROR',

}

export interface Profile {
    username?: string
    avatar?: string
    lastName?: string
    firstName?: string,
    avatarFile?: File
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean,
    validateError?: ValidateProfileError[]
}