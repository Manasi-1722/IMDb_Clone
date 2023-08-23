const APP_PATH = 'http://localhost:3000';

export const routePath  = {
    home            : `/`,
    categories      : `/${APP_PATH}/categories`,
    movie           : `${APP_PATH}/movie`,
    movies          : `${APP_PATH}/movies`,
    topRated        : `${APP_PATH}/movies`,
    upcoming        : `${APP_PATH}/movies`,
    invalid         : `${APP_PATH}/*`
}