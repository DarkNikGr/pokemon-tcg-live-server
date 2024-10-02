import * as uuid from "uuid";

export const generateAccessToken = async (req, res, next) => {
    try {
        const dateNow = new Date();
        const expireDate = new Date().setFullYear(new Date().getFullYear() + 1);
        const nowTimestamp = Math.floor(dateNow / 1000);
        const expireTimestamp = Math.floor(expireDate / 1000);

        const baseData = {
            "alg":"RS256",
            "kid":"private:4084b754-24f7-44d6-8fd2-71924e169dbf",
            "typ":"JWT"
        };

        const accessTokenData = {
            "dat": [
                'RAD'
            ].join(','),
            "aud":[
                "http://localhost:15021"
            ],
            "client_id":"tpci-tcg-app",
            "exp": expireTimestamp,
            "ext":{
                "consent_age":"over",
                "country_code":"GR",
                "screen_name":"DarkNik2"
            },
            "iat": nowTimestamp,
            "iss":"http://localhost:15021",
            "jti": uuid.v4(),
            "nbf": nowTimestamp,
            "scp":[
                "offline",
                "screen_name",
                "openid",
                "friends"
            ],
            "sub": uuid.v4(),
        }

        const base = Buffer.from(JSON.stringify(baseData)).toString('base64').replaceAll('+', '-').replace('/', '_');
        const token = Buffer.from(JSON.stringify(accessTokenData)).toString('base64').replaceAll('+', '-').replace('/', '_');

        return res.json({
            AccessToken: `${base}.${token}`,
            AccountData: JSON.stringify(accessTokenData),
        });
    } catch (e) {
        next(e)
    }
}