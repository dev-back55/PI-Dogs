function dbDog(target){
    if(target.temperaments){
        const tempss = target.temperaments;
        const tempToJoin = [];
        tempss.forEach(elem=>{
            tempToJoin.push(elem.name) 
        });
    target.temperament = tempToJoin.join(', ');
    }
    const toSend={
        id: target.id,
        name: target.name,
        height: target.height,
        weight: target.weight,
        lifeSpan: target.lifeSpan,
        img: target.img,
        temperament: target.temperament
    }
    
    return toSend;
}

function apiDog(elem){
    return {
        id: elem.id,
        name: elem.name,
        height: elem.height.metric,
        weight: elem.weight.metric,
        lifeSpan: elem.life_span,
        img: elem.image.url,
        temperament: elem.temperament,
    }
};

function dbTemps(elem){
    return {
        id:elem.id,
        temperament: elem.name
    }
}

module.exports = {
    dbDog,
    apiDog,
    dbTemps
}