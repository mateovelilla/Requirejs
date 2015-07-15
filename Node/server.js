var Handlebars = require('handlebars');
var HandlebarsLayouts = require('handlebars-layouts');
var colors = require('colors');
var Hapi = require('hapi');
var Path = require('path');
var r = require('requirejs');
var engine = Handlebars.create();
HandlebarsLayouts.register(engine);

r.config({
	baseUrl: 'views/helpers',
	paths: {
		main:'main',
		view:'view',
		viewConfig:'viewConfig'
	},
    nodeRequire: require
});


r(['main'],
function   (main) {
	main.init();
});


var server = new Hapi.Server();
server.connection({
    host: '127.0.0.1',
    port: 3050
});

server.views({
    engines: {
        html: engine
    },
    path: Path.join(__dirname, 'views'),
    helpersPath: './views/helpers',
    partialsPath: Path.join(__dirname, 'views')
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
 		//reply('Hola, ' + encodeURIComponent(request.params.name) + '!');
    	reply.view('index');
    }
});

server.route({/*Proovedor de recursos*/
	method:'GET',
	path:'/recurso/{filename}',
    handler: {
        file: function (request) {
            return 'views/helpers/'+encodeURIComponent(request.params.filename);
        }
    }
});

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
  	r(['view'],function (view) {
  		view.append('Hola');
	});
  }
});

server.start(function(){
	console.log('servidor encendido...'.random);
});