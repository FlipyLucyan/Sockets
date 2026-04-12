import dgram from 'dgram';

const client = dgram.createSocket('udp4');

const message = Buffer.from('Hello from client');

client.send(message, 8081, 'localhost', (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Message sent to server');
  }
  // client.close();
});
