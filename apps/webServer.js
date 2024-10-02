import express from 'express';
import bodyParser from "body-parser";

import accountRoute from "../routes/account.route.js";
import gameServerRoute from "../routes/gameServer.route.js";

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(req.method, req.path, req.body?? {});
    next();
})

app.use('/account/v1/external', accountRoute);
app.use('/gameserver/v1/external', gameServerRoute);

app.use((err, req, res, next) => {
    console.error(err.message, err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default () => {
    return app.listen(15021, () => {
        console.log('WebServer init');
    });
};