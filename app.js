let texto = document.getElementById('textoAnalisar');
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');

function criptografar() {
    if (/^[a-z ]+$/.test(texto.value)) {
        let criptografado = texto.value
            .replaceAll("e","enter")
            .replaceAll("i","imes")
            .replaceAll("a", "ai")
            .replaceAll("o","ober")
            .replaceAll("u","ufat");
        // alert(criptografado);
        document.getElementById("resultado-cripto").innerHTML = criptografado;
        mostrarResultado();
    } else {
        alertaMinuscula()
    }
}

function descriptografar() {
    if (/^[a-z ]+$/.test(texto.value)) {
        let descriptografado = texto.value
            .replaceAll("enter","e")
            .replaceAll("imes","i")
            .replaceAll("ai", "a")
            .replaceAll("ober","o")
            .replaceAll("ufat","u");
        // alert(descriptografado);
        document.getElementById("resultado-cripto").innerHTML = descriptografado;
        mostrarResultado();
    } else {
        alertaMinuscula();   
    }           
}

function alertaMinuscula() {
    alert("O texto digitado debe conter somente letras minúsculas.\nNão devem ser utilizados letras com acentos nem caracteres especiais");
}

function limparCampo() {
    // texto = document.getElementById('textoAnalisar');
    texto.value = "" ; 
}

function mostrarResultado() {
    section1.style.display = 'none';
    section2.style.display = 'block';
}

document.getElementById('toggleButton').addEventListener('click', (event) => {
    event.stopPropagation();
    criptografar();    
    limparCampo();
});
document.querySelector('.principal__botao__descritografar').addEventListener('click', (event) => {
    event.stopPropagation();
    descriptografar();    
    limparCampo();
});

async function copiar() {
    let textoCopiado = document.getElementById("resultado-cripto");
    let text = textoCopiado.value;

    await navigator.clipboard.writeText(text);
    alert("Texto copiado!")
}