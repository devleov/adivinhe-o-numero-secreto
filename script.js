let palpites;
let numeroSecreto;
let acertos = [];
let rodadasCriadas = 0;

const msg = document.getElementById("msg");
const ul = document.getElementById("ul");

function novoJogo() {
    document.getElementById("chute").value = "";

    /* Quantidade de vezes que criou as rodadas */
    rodadasCriadas++;

    /* Cria um array para armazenar os palpites do usuário */
    palpites = [];

    /* Retorna um número aleatório entre 1 a 100 */
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log(numeroSecreto)

    /* Esvazia a mensagem para o usuário */
    msg.innerHTML = "";

    /* Esvazia a lista de palpites para evitar bugs */
    ul.innerHTML = "";
}

document.getElementById("btn-send-num").addEventListener("click", () => {

    const chute = document.getElementById("chute").value;

    /* Esvazia a mensagem para o usuário */
    msg.innerHTML = "";

    /* Se não declarou `palpites` significa que não começou o jogo ainda */
    if (!palpites) {
        return msg.innerHTML = "Comece o jogo no botão clicando abaixo!"
    }

    /* Verificação de palpite já tentado */
    if (palpites.includes(chute)) {
        return msg.innerHTML = "Opa.. você já fez este palpite antes. Tente outro!";
    }

    /* Verificação se o chute é igual ao número secreto */
    if (chute == numeroSecreto) {

        /* A cada acerto é criado um registro no array e a quantidade de palpites que levou a acertar */
        acertos.push({ rodada: rodadasCriadas, numeroSecreto: numeroSecreto, quantPalpites: palpites.length })
        console.log(acertos)

        msg.innerHTML = `Você acertou! O número secreto é ${numeroSecreto}!`;

        // Exibir os resultados na lista de vencedores
        const ul = document.getElementById("winners");
        const li = document.createElement("li");

        li.textContent = `Rodada: ${rodadasCriadas}, Palpites: ${palpites.length}, Número secreto: ${numeroSecreto}`;
        ul.appendChild(li);

        /* Jogo é resetado */
        palpites = [];

        return; // Finaliza a execução se o usuário acertou
    }

    /* Verificação se o chute é maior ou menor que o número secreto */
    if (chute > numeroSecreto) {
        msg.innerHTML = `O número secreto é menor que ${chute}!`;
    } else {
        msg.innerHTML = `O número secreto é maior que ${chute}!`;
    }

    /* Adiciona o palpite do usuário à lista de palpites */
    palpites.push(chute)

    /* Esvazia a lista de palpites para evitar bugs */
    ul.innerHTML = "";

    /* Percorre cada valor insirido na lista de palpites e cria uma lista desordenada para cada e atribuI o valor a ela. */
    palpites.forEach(data => {
        const li = document.createElement("li")
        li.textContent = data;
        ul.appendChild(li)
    })

})
