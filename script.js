async function buscarPokemon() {

    const nomePokemon = document
    .getElementById("pokemon")
    .value
    .toLowerCase()
    .trim();
    
    
    const resposta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
    );
    
    
    if (!resposta.ok) {
    
    alert("Pokémon não encontrado!");
    
    return;
    }
    
    
    const pokemon = await resposta.json();
   
    document.getElementById("nome").textContent =
    pokemon.name + " #" + pokemon.id;
    
    document.getElementById("imagem").src =
    pokemon.sprites.other["official-artwork"].front_default;
    
    document.getElementById("tipo").textContent =
    pokemon.types[0].type.name;
    
    document.getElementById("altura").textContent =
    (pokemon.height / 10) + " m";
    
    document.getElementById("peso").textContent =
    (pokemon.weight / 10) + " kg";
    
    const hp = pokemon.stats[0].base_stat;
    const ataque = pokemon.stats[1].base_stat;
    const defesa = pokemon.stats[2].base_stat;   
    const velocidade = pokemon.stats[5].base_stat;
   
    document.getElementById("hp").textContent = hp; 
  
    document.getElementById("ataque").textContent = ataque;   
    document.getElementById("defesa").textContent = defesa; 
  
    document.getElementById("velocidade").textContent = velocidade;
  
    document.getElementById("barra-hp").width =
    hp + "%";  
    document.getElementById("barra-hp").textContent =
    hp;
   
    document.getElementById("barra-ataque").width =
    ataque + "%";
    document.getElementById("barra-ataque").textContent =
    ataque;
    
    document.getElementById("barra-defesa").width =
    defesa + "%";  
    document.getElementById("barra-defesa").textContent =
    defesa;
   
    document.getElementById("barra-velocidade").width =
    velocidade + "%";
    document.getElementById("barra-velocidade").textContent =
    velocidade;
    
    let textoHabilidades = "";
    
    
    pokemon.abilities.forEach(function(item) {
    
    textoHabilidades +=
    "<table align='center' cellpadding='5'>" +
    "<tr>" +
    "<td bgcolor='#777777'>" +
    "<font color='white'>" +
    "&nbsp;" + item.ability.name + "&nbsp;" +
    "</font>" +
    "</td>" +
    "</tr>" +
    "</table>" +
    "<br>";
    
    });
    
    
    document.getElementById("habilidades").innerHTML =
    textoHabilidades;
    
    }
    
    
    
    window.onload = function() {
    
    buscarPokemon();
    
    };