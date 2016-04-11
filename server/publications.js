//lo que vamos a hacer visible
//todos lo ven

Meteor.publish('contadores', function () {
    return Contadores.find();
});
