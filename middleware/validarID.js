const {Farmacia} = require ('../farmacia/farmacia.js');

const validarID = async (req,res, next) =>{
    try {
        const farmaco = await Farmacia.findById(req.params.id);
        if(persona !== null){
            next();
        } else (
            res.status(400).json({
                msg: "el id "+req.params.id+" ingresado no es valido"
            })
        )
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {validarID}