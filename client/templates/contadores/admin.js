Template.admin.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('contadores');
    });
});

Template.admin.helpers({
    contador: function () {
       contador = Contadores.findOne({name: 'contador'});
       Session.set('contadorId', contador._id);
       return contador;
   },
    contador2: function () {
        contador2 = Contadores.findOne({name: 'contador2'});
        Session.set('contador2Id', contador2._id);
        return contador2;
    },
    contador3: function () {
        contador3 = Contadores.findOne({name: 'contador3'});
        Session.set('contador3Id', contador3._id);
        return contador3;
    }
});

Template.admin.events({
   'click #contador-mas': function () {
       Meteor.call('modificarContador', Session.get('contadorId'), +1);
   },

    'click #contador-menos': function () {
        Meteor.call('modificarContador', Session.get('contadorId'), -1);
    },
    'click #contador-reset': function () {
        Meteor.call('resetearContador', Session.get('contadorId'));
    },
    
    'click #contador2-mas': function () {
        Meteor.call('modificarContador', Session.get('contador2Id'), +1);
    },

    'click #contador2-menos': function () {
        Meteor.call('modificarContador', Session.get('contador2Id'), -1);
    },
    'click #contador2-reset': function () {
        Meteor.call('resetearContador', Session.get('contador2Id'));
    },

    'click #contador3-mas': function () {
        Meteor.call('modificarContador', Session.get('contador3Id'), +1);
    },

    'click #contador3-menos': function () {
        Meteor.call('modificarContador', Session.get('contador3Id'), -1);
    },
    'click #contador3-reset': function () {
        Meteor.call('resetearContador', Session.get('contador3Id'));
    }
});