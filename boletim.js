const nome = "Ana";
const idade = 16;
const turma = "2o Ano A";
const notas = [8.0, 7.5, 9.0, 6.5];
const codigoDisciplina = 1;

// === Parte 1: mostrar dados do aluno ===
console.log("=== DADOS DO ALUNO ===");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Turma:", turma);

// === Parte 2: mostrar notas com for ===
console.log("\n=== NOTAS COM FOR ===");
for (let i = 0; i < notas.length; i++) {
  console.log(`Nota ${i + 1}: ${notas[i]}`);
}

// === Parte 3: mostrar notas com for...of ===
console.log("\n=== NOTAS COM FOR...OF ===");
let contadorNotas = 1;
for (const nota of notas) {
  console.log(`Nota ${contadorNotas}: ${nota}`);
  contadorNotas++;
}

// === Parte 4: calcular média ===
let soma = 0;
for (const nota of notas) {
  soma += nota;
}

const media = soma / notas.length;

console.log("\n=== MÉDIA ===");
console.log("Média:", media.toFixed(2));

// === Parte 5: verificar situação ===
console.log("\n=== SITUAÇÃO ===");
let situacao = "";

if (media >= 7) {
  console.log("Aprovado");
  situacao = "aprovada";
} else if (media >= 5) {
  console.log("Recuperação");
  situacao = "em recuperação";
} else {
  console.log("Reprovado");
  situacao = "reprovada";
}

// === Parte 6: classificar desempenho ===
console.log("\n=== CONCEITO ===");
if (media >= 9) {
  console.log("Conceito A");
} else if (media >= 7) {
  console.log("Conceito B");
} else if (media >= 5) {
  console.log("Conceito C");
} else {
  console.log("Conceito D");
}

// === Parte 7: mostrar disciplina com switch ===
console.log("\n=== DISCIPLINA ===");
switch (codigoDisciplina) {
  case 1:
    console.log("Matemática");
    break;
  case 2:
    console.log("Português");
    break;
  case 3:
    console.log("História");
    break;
  default:
    console.log("Outra disciplina");
}

// === Parte 8: contagem com while ===
console.log("\n=== CONTAGEM COM WHILE ===");
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

// =========================
// 🚀 DESAFIOS EXTRAS
// =========================

// Desafio 1 — Maior e menor nota
let maiorNota = notas[0];
let menorNota = notas[0];

for (const nota of notas) {
  if (nota > maiorNota) {
    maiorNota = nota;
  }
  if (nota < menorNota) {
    menorNota = nota;
  }
}

console.log("\n=== MAIOR E MENOR NOTA ===");
console.log("Maior nota:", maiorNota);
console.log("Menor nota:", menorNota);

// Desafio 2 — Quantidade de notas >= 7
let notasAzuis = 0;

for (const nota of notas) {
  if (nota >= 7) {
    notasAzuis++;
  }
}

console.log("\n=== NOTAS AZUIS ===");
console.log("Quantidade:", notasAzuis);

// Desafio 3 — Mensagem personalizada
console.log("\n=== MENSAGEM FINAL ===");
console.log(`Parabéns, ${nome}, você foi ${situacao}!`);

// Desafio 4 — Validar idade
console.log("\n=== VALIDAÇÃO DE IDADE ===");
if (idade < 0 || idade > 120) {
  console.log("Idade inválida");
} else {
  console.log("Idade válida");
}

// Desafio 5 — Tabuada do 5
console.log("\n=== TABUADA DO 5 ===");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}