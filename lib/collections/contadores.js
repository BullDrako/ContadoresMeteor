Contadores = new Mongo.Collection('contadores');

Meteor.methods({
    modificarContador: function (contador, nuevoValor) {
        Contadores.update(contador, {$inc: {value: nuevoValor}});
    },

    resetearContador: function (contador) {
        Contadores.update(contador, {$set:{value: 0}});
    }
});

    