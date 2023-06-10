const {Farmacia} = require ('../farmacia/farmacia')

class ApiController {
    async list (req,res) {
        const stock = await Farmacia.find();
        res.status(200).json(stock)
    };

    async buscarSegunId (req,res){
            const medicamento = await Farmacia.findById(req.params.id);
            res.status(200).json(medicamento)
    };

    async listaPorFarmaco (req,res){
        const medicamento = await Farmacia.find({farmaco:req.params.farmaco});
        res.status(200).json(medicamento)
    };

    async listaPorComercial (req,res){
    const medicamento = await Farmacia.find({nombreComercial:req.params.nombreComercial});
    res.status(200).json(medicamento)
    };

    async crear (req,res) {
        try {
            const nuevoFarmaco = new Farmacia(req.body)
            await nuevoFarmaco.save()
            res.status(201).json(nuevoFarmaco)
        } catch (error) {
            res.status(500).json(error)
        }
    };
    async editar (req,res) {
        try {
            await Farmacia.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({
                msg: "El fármaco "+req.params.id+" fue actualizado con éxito."
            })
        } catch (error) {
            res.status(500).json(error)
        }
    };

    async eliminar (req,res) {
        await Farmacia.findByIdAndDelete(req.params.id)
        res.startus(200).json({
            msg: "el farmaco "+req.params.id+" ha sido eliminado"
        })    
        };
    };


module.exports = new ApiController