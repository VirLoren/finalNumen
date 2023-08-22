const {Farmacia} = require ('../farmacia/farmacia.js')

const laboratorio = [
    "Bayer",
    "Pzifer",
    "Poem",
    "Roemmers",
    "Roche",
    "Denver Farma",
    "Fortbenton",
    "Pablo Cassara"
];
const validarLab = async (req, res, next) =>{
    try {
        const laboratorio = await Farmacia.find(req.params.name);
        if (laboratorio !== null) {
            next();
        } else {
            res.status(400).json ({
                msg: "el nombre del laboratorio "+req.params.name+" ingresado es invalido"
            })}
        } catch(error) {
            res.status(500).json(error)
        }
}

module.exports = { validarLab }

// Bayer, Pzifer, Poem, Roemmers, Roche, Denver Farma, Fortbenton, Pablo Cassara.
