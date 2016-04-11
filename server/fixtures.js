if (Contadores.find().count() === 0){
    Contadores.insert({name: 'contador', value: 0});
    Contadores.insert({name: 'contador2', value: 0});
    Contadores.insert({name: 'contador3', value: 0});
}