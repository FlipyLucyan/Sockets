import dgram from 'dgram';

const server = dgram.createSocket('udp4');

server.on('message', (msg, info) => {
  console.log(`Received message: ${msg} from ${info.address}:${info.port}`);

  server.send(msg.toString(), 8081, '255.255.255.255');
});


server.on('listening', () => {
  const addr = server.address();
  console.log(`Server listening on ${addr.address}:${addr.port}`);

  server.setBroadcast(true);
});

server.bind(8081);

