const pessoas = [
  { nome: 'Guilherme', altura: 1.83, sexo: 'M' },
  { nome: 'Jhonatan', altura: 1.87, sexo: 'M' },
  { nome: 'Raphael', altura: 1.84, sexo: 'M' },
  { nome: 'Lili', altura: 1.57, sexo: 'F' },
  { nome: 'Joyce', altura: 1.59, sexo: 'F' },
  { nome: 'Monique', altura: 1.58, sexo: 'F' },
  { nome: 'Romulo', altura: 1.77, sexo: 'M' },
  { nome: 'Milleyd', altura: 1.63, sexo: 'F' },
  { nome: 'Lucas', altura: 1.75, sexo: 'M' },
  { nome: 'Larissa', altura: 1.62, sexo: 'F' },
  { nome: 'Pedro', altura: 1.80, sexo: 'M' },
  { nome: 'Camila', altura: 1.70, sexo: 'F' },
  { nome: 'Thiago', altura: 1.76, sexo: 'M' },
  { nome: 'Ana', altura: 1.68, sexo: 'F' },
  { nome: 'Rafaela', altura: 1.75, sexo: 'F' }
];

let maiorAltura = Number.MIN_VALUE;
let menorAltura = Number.MAX_VALUE;
let somaAlturaHomens = 0;
let quantidadeHomens = 0;
let quantidadeMulheres = 0;

for (let i = 0; i < pessoas.length; i++) {
  const pessoa = pessoas[i];

  if (pessoa.altura > maiorAltura) {
      maiorAltura = pessoa.altura;
  }
  if (pessoa.altura < menorAltura) {
      menorAltura = pessoa.altura;
  }

  if (pessoa.sexo === 'M') {
      somaAlturaHomens += pessoa.altura;
      quantidadeHomens++;
  } else {
      quantidadeMulheres++;
  }
}

const mediaAlturaHomens = quantidadeHomens > 0 ? somaAlturaHomens / quantidadeHomens : 0;

document.getElementById('valores').innerHTML = `
  <h2>Valores</h2>
  <ul>
      <li>Maior altura do grupo: ${maiorAltura.toFixed(2)}m</li>
      <li>Menor altura do grupo: ${menorAltura.toFixed(2)}m</li>
      <li>Média de altura dos homens: ${mediaAlturaHomens.toFixed(2)}m</li>
      <li>Número de mulheres: ${quantidadeMulheres}</li>
  </ul>
`;
