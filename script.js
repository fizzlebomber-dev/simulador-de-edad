function calcularNivel() {
    const date = new Date(document.getElementById('ageDate').value);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    let message = "";

    if (age < 12) {
        message = "Nivel Primario";
    } else if (age >= 12 && age <= 15) {
        message = "Nivel Secundario Inicial";
    } else if(age >= 16 && age <= 18) {
        message = "Nivel Secundario Final"
    } else {
        message = "Edad fuera del rango escolar obligatorio"
    }

    document.getElementById('resultado').innerText = message;
}