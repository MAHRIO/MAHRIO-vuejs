process.env.NODE_ENV="development"

require('mahrio').runServer(process.env, __dirname)
    .then( function(server) {

        server.route({
            path: '/{param*}',
            method: 'GET',
            handler: {
              directory: {
                path: ['../public/']
              }
            }
        });


        server.route({
            path: '/stats',
            method: 'GET',
            handler: function(req, rep){

                environment_vars = "<pre>" + JSON.stringify(process.env, null, 4) + "</pre>";

                headers = "<pre>"+JSON.stringify(req.headers, null, 4)+"</pre>";

                rep(environment_vars + headers)
            }
        })
    });
