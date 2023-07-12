import express from "express";
import * as url from "url";
import mongoose from "mongoose";
import { modelForms } from "./models/data.js";

const uri = process.env.MONGO_URI;
mongoose
    .connect(uri, { dbName: "DHI" })
    .then((db) => console.log("Se conecto a la base de datos"))
    .catch((err) => console.log(err));

const filename = url.fileURLToPath(import.meta.url);
const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(dirname + "/static"));
app.use(express.static(dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
    res.sendFile(dirname + "/static/index.html");
});
app.get("/api", async (req, res, next) => {
    try {
        const doc = await modelForms.findOne();
        res.json(doc);
    } catch (error) {
        console.log(error);
    }
});
app.post("/post", async (req, res, next) => {
    try {
        const count = await modelForms.count();
        if (count < 1) {
            const doc = new modelForms(req.body);
            await doc.save();
        } else {
            const doc = await modelForms.findOne();
            Object.keys(req.body).forEach((key) => {
                if (req.body[key] !== "") {
                    doc[key] = req.body[key];
                }
            });
            await doc.save();
        }
        console.log("se preparo, se puso linda y su amiga llamaba");
    } catch (error) {
        console.log("fallo guardar", error);
    } finally {
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log("Se inicio el servidor en el puerto " + port);
});
