// making a simple api
import http from 'http';
import data from './a_file.js';
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type': 'application\json' });
  res.write(JSON.stringify(data));
res.end();
}).listen(5500);