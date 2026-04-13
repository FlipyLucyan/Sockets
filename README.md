# TCP e UDP - Clientes e servidores 

TCP ou Transmission Control Protocol é um protocolo a base de connecção que trata dados como um fluxo contínuo e promete que os dados cheguem de forma organizada e em ordem.

UDP ou User Datagram Protocol é um protocolo que envia mensagens discretas sem garantia de entrega, ordem ou duplicação.


Ambos os protocolos têm o mesmo fim: envio de dados. Neste projecto, há uma coleção de servidores e clientes para cada protocolo com e sem interface gráfica, vamos ver como rodar 
cada um dos programas

## TCP 

Na pasta `cli` contém o código sem interface gráfica do servidor e do cliente. Podemos rodar ambos usando o programa `node`. `node` é uma ferramenta usada para executar código 
javascript.

Dentro da pasta `cli/tcp` vamos encontrar 2 arquivos: `server.js` e `client.js`. Primeiro vamos rodar o servidor e depois o cliente.

```
# servidor 

node server.js 


# Numa outra instancia do terminal

node client.js 

```
