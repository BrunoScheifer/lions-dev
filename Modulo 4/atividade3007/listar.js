function listarContatos(contatos) {
    contatos.forEach(contato => {
      console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
}

module.exports = { listarContatos }