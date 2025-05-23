document.getElementById("operacion").addEventListener("change", function() {
    generarInputs();
});


function generarInputs() {
    let operacion = document.getElementById("operacion").value; 
    let inputs = document.getElementById("inputs"); 
    inputs.innerHTML = ""; 

    if (!operacion) return; 
    
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
    let unidad = ""; 

    switch (operacion) {
        case "velocidad":
            resultado = valores[0] / valores[1];
            unidad = "m/s";
            break;
        case "aceleracion":
            resultado = valores[0] / valores[1];
            unidad = "m/s²";
            break;
        case "fuerza":
            resultado = valores[0] * valores[1];
            unidad = "N";
            break;
        case "trabajo":
            resultado = valores[0] * valores[1] * Math.cos(valores[2] * Math.PI / 180);
            unidad = "J"; 
            break;
        case "energia_cinetica":
            resultado = 0.5 * valores[0] * Math.pow(valores[1], 2);
            unidad = "J";
            break;
        case "energia_potencial":
            resultado = valores[0] * valores[1] * valores[2];
            unidad = "J"; 
            break;
        case "densidad":
            resultado = valores[0] / valores[1];
            unidad = "kg/m³";
            break;
        case "presion":
            resultado = valores[0] / valores[1];
            unidad = "Pa"; 
            break;
        case "carga_electrica":
            resultado = valores[0] * valores[1];
            unidad = "C"; 
            break;
        case "ley_ohm":
            resultado = valores[0] * valores[1];
            unidad = "V"; 
            break;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2) + " " + unidad;
}
