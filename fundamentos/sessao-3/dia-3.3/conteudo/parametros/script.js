let clientesTrybeBank = ['Ada', 'John', 'Gus'];

const addClients = (string) => {
  if (typeof string === 'string') {
    return clientesTrybeBank.push(string);
  } else {
    return 'Esse argumento não é do tipo string';
  };
}

addClients(7);
