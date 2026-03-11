function convertTemp() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = document.getElementById("fahrenheit").value;

    if (celsius !== "" && document.activeElement.id !== "fahrenheit") {
        let f = (parseFloat(celsius) * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = f.toFixed(2);
    } else if (fahrenheit !== "") {
        let c = (parseFloat(fahrenheit) - 32) * 5 / 9;
        document.getElementById("celsius").value = c.toFixed(2);
    }
}