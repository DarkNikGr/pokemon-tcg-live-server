export const serviceInfo = async (req, res, next) => {
    try {
        return res.json({
            image: "",
            commit: "",
            sdkVersion: "",
            engineSource: "",
            engineVersion: ""
        })
    } catch (err) {
        next(err);
    }
}

export const query = async (req, res, next) => {
    try {
        const id = req.body.queryId;
        const encryptedContent = req.body.gameContext;
        const gameContext = JSON.parse(atob(encryptedContent));

        console.log(id, gameContext);

        return res.json({});
    } catch (err) {
        next(err);
    }
}