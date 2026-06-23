# 🏎️ Mario Kart JS

Simulação de corrida do Mario Kart feita em Node.js, desenvolvida durante a formação da DIO.

---

## 🎮 Sobre o projeto

O jogo simula uma corrida entre dois personagens do Mario Kart ao longo de 5 rodadas. A cada rodada, um bloco de pista é sorteado (reta, curva ou confronto), e os jogadores rolam dados somados aos seus atributos pra decidir quem leva o ponto.

---

## 👾 Personagens disponíveis

| Personagem   | Velocidade | Manobrabilidade | Poder |
|--------------|------------|-----------------|-------|
| Mario        | 4          | 3               | 3     |
| Peach        | 3          | 4               | 2     |
| Yoshi        | 2          | 4               | 3     |
| Bowser       | 5          | 2               | 5     |
| Luigi        | 3          | 4               | 4     |
| Donkey Kong  | 2          | 2               | 5     |

---

## 🕹️ Regras do jogo

- A corrida tem **5 rodadas**
- A cada rodada, um bloco é sorteado:
  - **Reta** → soma dado + velocidade → quem tiver maior ganha 1 ponto
  - **Curva** → soma dado + manobrabilidade → quem tiver maior ganha 1 ponto
  - **Confronto** → soma dado + poder → quem **perder** perde 1 ponto
- Nenhum jogador pode ter pontuação negativa
- Vence quem tiver mais pontos no final

---

## 🚀 Como rodar

Precisa ter o **Node.js** instalado na maquina.

```bash
# clone o repositorio
git clone https://github.com/seu-usuario/mario-kart-js

# entra na pasta
cd mario-kart-js

# roda o jogo
npm start
```

---

## 📁 Estrutura do projeto

```
mario-kart-js/
│
├── src/
│   └── index.js       # logica principal do jogo
│
├── package.json
└── readme.md
```

---

## 🔗 Links uteis

- [Repositorio original - DIO](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart)
- [Node.js](https://nodejs.org)
- [DIO](https://dio.me)

---

Feito com 💙 durante a formação Node.js da DIO
