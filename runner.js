var server = require ('../../build/main-dev.js')
var apiServer = require ('../../apimock/server.js')

server.ready.then (() => {
  var spawn = require ('cross-spawn')
  var runner = spawn ('./node_modules/.bin/protractor test/e2e/protractor.conf.js', [], {stdio: 'inherit'})

  runner.on ('exit', function (code) {
    server.close ()
    apiServer.close ()
    process.exit (code)
  })

  runner.on ('error', function (err) {
    server.close ()
    apiServer.close ()
    throw err
  })
})

