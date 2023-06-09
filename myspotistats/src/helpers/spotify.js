import { redirect } from "react-router-dom";

const getAccessToken = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');
    const expiration = urlParams.get('expires_in');

    accessToken !== null && localStorage.setItem('accessToken', accessToken);
    refreshToken !== null && localStorage.setItem('refreshToken', refreshToken);
    expiration !== null && localStorage.setItem('expiration', expiration);

    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
        expiration: expiration
    }
}

export const accessToken = getAccessToken();

export const getTokenDuration = () => {
    const storedExpirationTime = localStorage.getItem('expiration');
    const now = new Date();
    const duration = Math.round(now.getTime() / 1000); - storedExpirationTime

    return duration

}

export const getAuthToken = () => {
    const token = localStorage.getItem('accessToken');

    if(!token){
        return null;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration)


    if(tokenDuration < 0){
        return 'Expired';
    }

    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const chechkAuthLoader = () => {
    const token = getAuthToken();

    if(token === null){
        return redirect('/');
    }

    return null;
}