function loginUser (payload: any) {
    return {
        email: payload.email,
        passwor: payload.password
    }
}

export const AuthService = {
    loginUser
}