let brutto = document.getElementById("brutto-netto");
let percent = document.getElementById("percentValue");
let betrag = document.getElementById("price");
let aMwSt = document.getElementById("ausgabeMwSt");
let aEnd = document.getElementById("ausgabeEndpreis");

function chanceValue() {
    if (brutto.value == "netto") {
        document.getElementById("brutto-netto-description").innerHTML = "Mehrwertsteuer abziehen(Brutto zu Netto)"
    } else {

    }
}
chanceValue()

function calculate() {

    if (brutto.value == "brutto" && percent.value == "seven%") {
        aMwSt.innerHTML = Number((betrag.value * 0.07).toFixed(2))
        aEnd.innerHTML = Number((betrag.value + aMwSt.innerHTML) / 10)
        console.log("Brutto 7%")

    } else if (brutto.value == "brutto" && percent.value == "nineTeen%") {
        aMwSt.innerHTML = Number((betrag.value * 0.19).toFixed(2))
        aEnd.innerHTML = Number((betrag.value + aMwSt.innerHTML) / 10)
        console.log("Brutto 19%")

    } else if (brutto.value == "netto" && percent.value == "seven%") {

        aEnd.innerHTML = Number((betrag.value / 1.07).toFixed(2))
        aMwSt.innerHTML = Number((betrag.value - aEnd.innerHTML).toFixed(2))
        console.log("Netto 7%")

    } else if (brutto.value == "netto" && percent.value == "nineTeen%") {

        aEnd.innerHTML = Number((betrag.value / 1.19).toFixed(2))
        aMwSt.innerHTML = Number((betrag.value - aEnd.innerHTML).toFixed(2))
        console.log("Netto 19%")

    }

}