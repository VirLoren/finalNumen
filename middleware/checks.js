const {check} = require ('express-validator');

const checks = [
    check ("farmaco")
            .notEmpty().withMessage("el campo Farmaco es obligatorio")
            .isString().withMessage("el campo Farmaco tiene que ser de tipo string"),
    check ("nombreComercial")
            .notEmpty().withMessage("el campo nombreComercial es obligatorio")
            .isString().withMessage("el campo nombreComercial tiene que ser de tipo string"),
    check ("laboratorio")
            .notEmpty().withMessage("el campo Laboratorio es obligatorio")
            .isString().withMessage("el campo Laboratorio tiene que ser de tipo string"),
    check ("precio")
            .notEmpty().withMessage("el campo Precio es obligatorio")
            .isNumeric().withMessage("el campo Precio tiene que ser de tipo numeros"),
    check ("presentacion")
            .notEmpty().withMessage("el campo Presentacion es obligatorio")
            .isString().withMessage("el campo Presentacion tiene que ser de tipo string"),
    check ("receta")
            .notEmpty().withMessage("el campo Receta es obligatorio")
            .isBoolean().withMessage("el campo Receta tiene que ser de tipo true o false"),       
] 

module.exports = checks