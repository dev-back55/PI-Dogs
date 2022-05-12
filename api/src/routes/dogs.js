const axios = require('axios');
const router = require('express').Router();
const {Dog, Temperament} = require('../db');
const { dbDog, apiDog } = require('../../tools/formatDog');


// route home muestra todas las razas de perros
router.get('/', async (req, res, next) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogsapi = response.data;
        const dbDogs = await Dog.findAll({
            include: Temperament
        });

        const dogsHome = [];
        const {name} = req.query;

        if(name){
            dogsapi.forEach(dog =>{
                if(dog.name.toLowerCase().includes(name.toLowerCase())){
                    dogsHome.push(apiDog(dog));
                }
            })
        

            if(dbDogs){
                for(const dogy of dbDogs){
                    if(dogy.dataValues.name.toLowerCase().includes(name.toLocaleLowerCase())){
                        dogsHome.push(dbDog(dogy.dataValues));

                    }
                }
            }
          return dogsHome.length?res.json(dogsHome):res.status(404).json()
        }

        dogsapi.forEach(dog => {
            dogsHome.push(apiDog(dog));
        })
        if(dbDogs){
            dbDogs.forEach(dog => {
                dogsHome.push(dbDog(dog));
            })
            
            return res.json(dogsHome);
        }
        
        res.json(dogsHome);

    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req,res,next)=>{
    try{
        const {id}=req.params;

        if(id.length<10 && typeof parseInt(id) === 'number'){
            const response = await axios.get('https://api.thedogapi.com/v1/breeds');
            const dogs = response.data;
            const dog = dogs.filter(elem => {
                return elem.id == id;
            });
            return dog.length?res.json(apiDog(dog[0])):res.status(404).json({error: 'Raza No exite'});
        }else{
                const dbDogy = await Dog.findByPk(id,{
                    include: Temperament
                });
                if(dbDogy) return res.json(dbDog(dbDogy));
        }
    }catch(e){
        next(e)
    }
})



router.post('/', async (req,res,next)=>{
    const {name, height, weight, lifeSpan, img, selectedTemps} = req.body;

    try{
         // se crea el perrito en la base de datos
        const newDog = await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            img,
        })
         
         if(selectedTemps){
            
             const idTempdb = await Temperament.findAll({
                 where:{
                     name: selectedTemps
                 }
             });
        
             const idTemp=[];
             idTempdb.forEach(elem=>{
                 idTemp.push(elem.dataValues.id)
             });
        
             await newDog.addTemperaments(idTemp);
        
             return res.status(201).json(newDog).send('Perrito Creado con Exito!!');
        }
        if(!newDog) return res.status(404).json({error : 'No se pudo crear el nuevo perrito'});
        
        res.status(201).json(newDog).send('Perrito Creado con Exito!!');
    }catch(e){
        next(e)
    }
})

module.exports = router;