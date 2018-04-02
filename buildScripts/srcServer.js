//This file will configure a web server that will serve up our
//files in our source directory
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/*eslint-disable no-console */
const port = 3000;
const app = express();  //creates an instance of express
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) { //any references to root are
  res.sendFile(path.join(__dirname, '../src/index.html'))  //handled by this function
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
})


