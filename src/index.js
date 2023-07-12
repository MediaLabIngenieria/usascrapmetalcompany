import express from "express";
import * as url from 'url';

const filename = url.fileURLToPath(import.meta.url);
const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('/static'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res, next) => { res.sendFile(dirname + '/static/index.html') })
app.get('/api', (req, res, next) => { res.json({ placeholder: "placeholder" }) })
app.post('/post', (req, res, next) => { console.log(req.body) })


app.listen(port, () => { console.log("Se inicio el servidor en el puerto " + port) })