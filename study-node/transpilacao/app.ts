interface Pessoa {
  nome: string;
  idade?: number;
}

function ola1(p: Pessoa): string {
  return `Olá, ${p.nome}`;
}

const joao1: Pessoa = {
  nome: "Teste",
};

ola(joao);
