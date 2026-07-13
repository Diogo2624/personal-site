const textos = [
    "Oii :D",
    "Eu sou a Isabella!",
    "Vamos jogar juntas?"
];

const elementos = [
    document.getElementById("text1"),
    document.getElementById("text2"),
    document.getElementById("text3")
];

async function escrever(){

    for(let i = 0; i < textos.length; i++){

        const texto = textos[i];
        const elemento = elementos[i];

        elemento.innerHTML = '<span class="cursor"></span>';

        const cursor = elemento.querySelector(".cursor");

        for(let j = 0; j < texto.length; j++){

            elemento.insertBefore(
                document.createTextNode(texto[j]),
                cursor
            );

            await new Promise(r => setTimeout(r,150));

        }

        // deixa o cursor piscando um pouco
        await new Promise(r => setTimeout(r,500));

        // remove o cursor dessa linha
        cursor.remove();

    }

    // Cursor final continua piscando
    elementos[elementos.length-1].innerHTML +=
        '<span class="cursor"></span>';

}

window.onload = escrever;