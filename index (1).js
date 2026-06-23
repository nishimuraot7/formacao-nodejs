// Projeto Mario Kart - DIO
// simulação de corrida com personagens do mario kart

const personagens = {
  mario: { nome: "Mario", velocidade: 4, manobrabilidade: 3, poder: 3 },
  peach: { nome: "Peach", velocidade: 3, manobrabilidade: 4, poder: 2 },
  yoshi: { nome: "Yoshi", velocidade: 2, manobrabilidade: 4, poder: 3 },
  bowser: { nome: "Bowser", velocidade: 5, manobrabilidade: 2, poder: 5 },
  luigi: { nome: "Luigi", velocidade: 3, manobrabilidade: 4, poder: 4 },
  donkeykong: { nome: "Donkey Kong", velocidade: 2, manobrabilidade: 2, poder: 5 },
};

// jogadores escolhidos pra corrida
const jogador1 = personagens.mario;
const jogador2 = personagens.bowser;

// rola um dado de 6 lados
function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// sorteia o tipo do bloco da pista
function sortearBloco() {
  const blocos = ["reta", "curva", "confronto"];
  const index = Math.floor(Math.random() * blocos.length);
  return blocos[index];
}

// logica de cada rodada
function jogarRodada(p1, p2, rodada) {
  console.log(`\n🏁 --- Rodada ${rodada} ---`);

  const bloco = sortearBloco();
  console.log(`Bloco sorteado: ${bloco.toUpperCase()}`);

  let atributo;

  if (bloco === "reta") {
    atributo = "velocidade";
  } else if (bloco === "curva") {
    atributo = "manobrabilidade";
  } else {
    atributo = "poder";
  }

  const dado1 = rolarDado();
  const dado2 = rolarDado();

  const total1 = dado1 + p1[atributo];
  const total2 = dado2 + p2[atributo];

  console.log(`${p1.nome}: dado ${dado1} + ${atributo} ${p1[atributo]} = ${total1}`);
  console.log(`${p2.nome}: dado ${dado2} + ${atributo} ${p2[atributo]} = ${total2}`);

  if (bloco === "confronto") {
    // no confronto quem perde perde um ponto
    if (total1 > total2) {
      console.log(`💥 ${p2.nome} perdeu o confronto e perde 1 ponto!`);
      return { resultado: "p2perde" };
    } else if (total2 > total1) {
      console.log(`💥 ${p1.nome} perdeu o confronto e perde 1 ponto!`);
      return { resultado: "p1perde" };
    } else {
      console.log("🤝 Confronto empatado, ninguem perde ponto");
      return { resultado: "empate" };
    }
  } else {
    // reta e curva: quem ganhar soma um ponto
    if (total1 > total2) {
      console.log(`✅ ${p1.nome} venceu a rodada!`);
      return { resultado: "p1ganha" };
    } else if (total2 > total1) {
      console.log(`✅ ${p2.nome} venceu a rodada!`);
      return { resultado: "p2ganha" };
    } else {
      console.log("🤝 Empate na rodada!");
      return { resultado: "empate" };
    }
  }
}

// funcao principal que roda a corrida inteira
function iniciarCorrida(p1, p2) {
  console.log("🎮 =================================");
  console.log(`   BEM VINDO AO MARIO KART JS!`);
  console.log("🎮 =================================");
  console.log(`\n🏎️  ${p1.nome} vs ${p2.nome}`);
  console.log("Que a corrida comece!\n");

  let pontos1 = 0;
  let pontos2 = 0;

  const totalRodadas = 5;

  for (let i = 1; i <= totalRodadas; i++) {
    const { resultado } = jogarRodada(p1, p2, i);

    if (resultado === "p1ganha") {
      pontos1++;
    } else if (resultado === "p2ganha") {
      pontos2++;
    } else if (resultado === "p1perde") {
      // nao pode ter pontuacao negativa
      if (pontos1 > 0) pontos1--;
    } else if (resultado === "p2perde") {
      if (pontos2 > 0) pontos2--;
    }

    console.log(`Placar: ${p1.nome} ${pontos1} x ${pontos2} ${p2.nome}`);
  }

  // resultado final
  console.log("\n🏆 =================================");
  console.log("         RESULTADO FINAL");
  console.log("🏆 =================================");
  console.log(`${p1.nome}: ${pontos1} pontos`);
  console.log(`${p2.nome}: ${pontos2} pontos`);

  if (pontos1 > pontos2) {
    console.log(`\n🥇 ${p1.nome} VENCEU A CORRIDA! PARABENS!`);
  } else if (pontos2 > pontos1) {
    console.log(`\n🥇 ${p2.nome} VENCEU A CORRIDA! PARABENS!`);
  } else {
    console.log("\n🤝 FOI EMPATE! Que corrida acirrada!");
  }
}

// inicia o jogo
iniciarCorrida(jogador1, jogador2);
