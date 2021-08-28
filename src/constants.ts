interface ConstantsType {
    API_HOST: string
    API_URL: string
    IS_LIVE: boolean
    APP_PATHS: {
        [key: string]: {
            path: string
            isAuth: boolean
        }
    }
}

const Constants: ConstantsType = {
    API_HOST: String(process.env.API_HOST),
    API_URL: process.env.API_HOST+"/api/v1",
    IS_LIVE: Boolean(process.env.IS_LIVE),


    APP_PATHS: {
        LOGIN: {
            path: '/login',
            isAuth: false
        },
        LOGOUT: {
            path: '/logout',
            isAuth: true
        },
        HOME: {
            path: '/',
            isAuth: true
        },
        PROJECT: {
            path: '/project/[id]',
            isAuth: true
        },
        NEW_DB: {
            path: '/project/[id]/newdb',
            isAuth: true
        },
        DB: {
            path: '/db/[id]',
            isAuth: true
        },
    }

}

export default Constants