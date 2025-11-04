// to się wykona tylko raz, przy załadowaniu strony
document.getElementById("count-words").innerText = 0


// funkcja nie wykona się, dopóki jej nie wywołamy.
// Możemy używać jej ile razy chcemy
function analyze() {
    console.log("analizuję...")

    // let wordCounter = 0;
    const text = document.getElementById("user-input").value
    // const text = "abc abfdf asfasdf afsdf sadfsd"
    const textTrimmed = text.trim()
    // array - tablica
    const words = textTrimmed.split(" ")

    document.getElementById("count-words").innerText = words.length

    // To jest String
    // text = "The quick brown fox jumps over the lazy dog." 
    // Teraz zamieniamy na tablice
    // words = text.split(" ")
    // [0,   1,     2, 3, 4, 5, 6, 7, 8, 9]
    // [The, quick, ]
}