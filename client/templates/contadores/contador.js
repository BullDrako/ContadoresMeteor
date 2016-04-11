Template.contador.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('contadores');
    });
});

Template.contador.helpers({
   contador: function () {
       return Contadores.findOne({name: 'contador'});
   }, 
    contador2: function () {
        return Contadores.findOne({name: 'contador2'});
    },

    contador3: function () {
        return Contadores.findOne({name: 'contador3'});
    }
});