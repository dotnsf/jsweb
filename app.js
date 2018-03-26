//. app.js

var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    multer = require( 'multer' ),
    bodyParser = require( 'body-parser' ),
    ejs = require( 'ejs' ),
    fs = require( 'fs' ),
    request = require( 'request' ),
    app = express();
var appEnv = cfenv.getAppEnv();

app.use( bodyParser.urlencoded( { extended: true, limit: '10mb' } ) );
app.use( bodyParser.json( { limit: '10mb' } ) );
app.use( express.static( __dirname + '/public' ) );

var port = appEnv.port || 3000;

var items = [];
app.post( '/item', function( req, res ){
  items.push( req.body );
  res.write( JSON.stringify( req.body, 2, null ) );
  res.end();
});
app.get( '/items', function( req, res ){
  res.write( JSON.stringify( items, 2, null ) );
  res.end();
});

app.listen( port );
console.log( "server starting on " + port + " ..." );


