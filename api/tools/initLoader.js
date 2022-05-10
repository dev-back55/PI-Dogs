const axios = require('axios');
const {Temperament} = require('../src/db');

module.exports = async function initLoader(){
    try{
        const allData = await axios('https://api.thedogapi.com/v1/breeds');
        const doggys = allData.data;  
        doggys.forEach(elem=>{
            if(elem.temperament){  
                const listOfTemps = elem.temperament.split(', ');
                
                if(listOfTemps.length){
                    
                    listOfTemps.forEach(async (item)=>{
                        await Temperament.findOrCreate({ 
                            where:{
                                name:item
                            }
                        });
                    });
                }
            }
        })
    }catch(e){
        return console.log('Error => ', e)
    }
};