const Hapi = require('hapi');
const Hoek = require('hoek');

const server = new Hapi.Server();

server.connection({port: 4000});

server.register(require('inert'), (err) => {
  Hoek.assert(!err, true);

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: 'bin'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.file('./index.html');
    }
  });
});

server.start(() => {
  console.log('Server running at', server.info.uri);
});
