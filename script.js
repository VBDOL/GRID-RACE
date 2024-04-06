let participantes = [];

function calcularPontuacao(participante) {
  return Math.floor(Math.random() * 100);
}

function atualizarRanking() {
  participantes.sort((a, b) => b.pontos - a.pontos);

  document.getElementById('ranking').innerHTML = '';

  participantes.forEach((participante, index) => {
    const row = document.createElement('tr');
    const posicao = document.createElement('td');
    posicao.textContent = index + 1;
    row.appendChild(posicao);
    const nome = document.createElement('td');
    nome.textContent = participante.nome;
    row.appendChild(nome);
    const pontos = document.createElement('td');
    pontos.textContent = participante.pontos;
    row.appendChild(pontos);
    document.getElementById('ranking').appendChild(row);
  });
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('name').value;
  const valor = document.getElementById('valor').value;

  let participanteExistente = participantes.find(part => part.nome === nome);

  if (participanteExistente) {
    participanteExistente.pontos += parseInt(valor);
  } else {
    const participante = {
      nome: nome,
      valor: valor,
      pontos: parseInt(valor)
    };
    participantes.push(participante);
  }

  atualizarRanking();
  document.querySelector('form').reset();
});
