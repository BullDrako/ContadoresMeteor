Router.configure({
    layoutTemplate: 'layout'

});

Router.route('/', {name: 'contador'});

Router.route('/admin', {name: 'admin'});