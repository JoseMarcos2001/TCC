const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = this.elements.nome.value;
  const sobrenome = this.elements.sobrenome.value;
  const email = this.elements.email.value;
  const telefone = this.elements.telefone.value;

  const pessoa = { nome, sobrenome, email, telefone };
  adicionarPessoa(pessoa);
});

const tabela = document.querySelector('table tbody');

function adicionarPessoa(pessoa) {
  const linha = document.createElement('tr');

  const colunaNome = document.createElement('td');
  colunaNome.textContent = pessoa.nome;
  linha.appendChild(colunaNome);

  const colunaSobrenome = document.createElement('td');
  colunaSobrenome.textContent = pessoa.sobrenome;
  linha.appendChild(colunaSobrenome);

  const colunaEmail = document.createElement('td');
  colunaEmail.textContent = pessoa.email;
  linha.appendChild(colunaEmail);

  const colunaTelefone = document.createElement('td');
  colunaTelefone.textContent = pessoa.telefone;
  linha.appendChild(colunaTelefone);

  tabela.appendChild(linha);
}
function voltar(){
    location.href = "orcamento.html";
}