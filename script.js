document.getElementById('contatoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Simula envio do formulário
  document.getElementById('feedback').textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

  // Limpa os campos
  document.getElementById('contatoForm').reset();
});
