document.getElementById("operacion").addEventListener("change", function() {
    generarInputs();
});

function generarInputs() {
    let operacion = document.getElementById("operacion").value;
    let inputs = document.getElementById("inputs");
    inputs.innerHTML = ""; // Limpiar inputs previos

    if (!operacion) return; // Si el usuario no ha seleccionado una operación válida, no generar inputs

    let campos = {
        "velocidad": ["Distancia (m)", "Tiempo (s)"],
        "aceleracion": ["Cambio de velocidad (m/s)", "Cambio de tiempo (s)"],
        "fuerza": ["Masa (kg)", "Aceleración (m/s²)"],
        "trabajo": ["Fuerza (N)", "Distancia (m)", "Ángulo (°)"],
        "energia_cinetica": ["Masa (kg)", "Velocidad (m/s)"],
        "energia_potencial": ["Masa (kg)", "Gravedad (m/s²)", "Altura (m)"],
        "densidad": ["Masa (kg)", "Volumen (m³)"],
        "presion": ["Fuerza (N)", "Área (m²)"],
        "carga_electrica": ["Corriente (A)", "Tiempo (s)"],
        "ley_ohm": ["Corriente (A)", "Resistencia (Ω)"]
    };

    campos[operacion].forEach(parametro => {
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = parametro;
        inputs.appendChild(input);
    });
}

function calcular() {
    let operacion = document.getElementById("operacion").value;
    let inputs = document.getElementById("inputs").getElementsByTagName("input");
    let valores = Array.from(inputs).map(input => parseFloat(input.value));

    if (valores.some(isNaN)) {
        document.getElementById("resultado").innerText = "Por favor ingresa valores válidos.";
        return;
    }

    let resultado = 0;
    switch (operacion) {
        case "velocidad": resultado = valores[0] / valores[1]; break;
        case "aceleracion": resultado = valores[0] / valores[1]; break;
        case "fuerza": resultado = valores[0] * valores[1]; break;
        case "trabajo": resultado = valores[0] * valores[1] * Math.cos(valores[2] * Math.PI / 180); break;
        case "energia_cinetica": resultado = 0.5 * valores[0] * Math.pow(valores[1], 2); break;
        case "energia_potencial": resultado = valores[0] * valores[1] * valores[2]; break;
        case "densidad": resultado = valores[0] / valores[1]; break;
        case "presion": resultado = valores[0] / valores[1]; break;
        case "carga_electrica": resultado = valores[0] * valores[1]; break;
        case "ley_ohm": resultado = valores[0] * valores[1]; break;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2);
}