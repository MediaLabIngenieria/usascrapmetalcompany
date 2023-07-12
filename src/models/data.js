import mongoose, { model, Schema } from "mongoose";

const schemaForms = new Schema(
    {
        Brillante: { type: String },
        Cobre1: { type: String },
        Cobre2: { type: String },
        Lightcopper: { type: String },
        Cabledepelar: { type: String },
        Cable1: { type: String },
        CableRomex: { type: String },
        CableCAT5: { type: String },
        Cable2: { type: String },
        luzdenavidad: { type: String },
        Bronce: { type: String },
        Broncesucio: { type: String },
        Radiadordecarro: { type: String },
        RadiadordeAClimpio: { type: String },
        RadiadordeACsucio: { type: String },
        Aluminum6063: { type: String },
        DirtyAluminum6063: { type: String },
        Chromewheels: { type: String },
        Aluminumrims: { type: String },
        MLC: { type: String },
        Paintedaluminum: { type: String },
        Oldsheet: { type: String },
        Radiators: { type: String },
        Cast: { type: String },
        Dirtycast: { type: String },
        Cleanlead: { type: String },
        Uncleanlead: { type: String },
        StainlessCL: { type: String },
        Stainlessunclean: { type: String },
        Motoreselectricos: { type: String },
        Motoresmalos: { type: String },
        Alternadores: { type: String },
        Motoresdearranque: { type: String },
        Compresordecarro: { type: String },
        Compresordeaire: { type: String },
        Transformador: { type: String }
    }

)
const modelForms = model("modelForms", schemaForms)
export { modelForms };