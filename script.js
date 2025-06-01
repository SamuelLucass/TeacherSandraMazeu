document.getElementById('contatoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;

  document.getElementById('feedback').textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
  this.reset();
});
