 async function buscar() {
    console.log("Passei por aqui")

    const resposta = await fetch("https://66186c979a41b1b3dfbd0bc5.mockapi.io/agendas");

    const respostaDadosAgenda = await resposta.json();

    console.log("Resposta: ", respostaDadosAgenda);

    const cards = document.getElementById('cards_games');
    
    cards.innerHTML = respostaDadosAgenda.map(
        (itemAgenda) => {
            return "Teste "
        }
    );
 };

 console.log("antes de buscar");
 buscar();
 console.log("depois de buscar");