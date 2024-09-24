const form = document.getElementById("form-valida-numeros");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("O formulário é válido! O número B é maior que o número A.");
    } else {
        alert("O formulário é inválido. O número B deve ser maior que o número A.");
    }
});
