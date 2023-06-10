const {Schema,model} = require ('mongoose');

const schema = new Schema ({
    farmaco: {
        type: String,
        require: true,
    },
    nombreComercial: {
        type: String,
        require: true,
    },
    laboratorio: {
        type: String,
        require: true,
    },
    precio: {
        type: Number,
        require: true,
    },
    presentacion: {
        type: String,
        require: true,
    },
    receta: {
        type: Boolean,
        require: true,
    },
 })
   
const Farmacia = model ('Farmacia', schema);
module.exports = {Farmacia}