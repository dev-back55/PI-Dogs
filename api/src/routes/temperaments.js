const router = require('express').Router();
const {Temperament} = require('../db');


router.get('/', async (req,res,next)=>{
    try{
        const listTemp = await Temperament.findAll();
        const listToSend = [];
        listTemp.forEach((elem,index)=>{
            const newTemp = {
                id:elem.id,
                temperament: elem.name
            }
            
            listToSend.push(newTemp);
        })
        res.json(listToSend);
    }catch(e){
        next(e);
    }
});

module.exports = router