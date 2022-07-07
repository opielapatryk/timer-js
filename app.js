const godziny  = document.querySelector(".godziny")
const minuty = document.querySelector(".minuty")
const ending = document.querySelector(".ending")
const div = document.querySelector("div")
const hours = function (date) {
    let godzina = date.getHours()
    let minuta = date.getMinutes()
    let amorpm = godzina < 12 ? 'AM' : "PM"
    godzina = godzina / 12 == 1 ? godzina = 12 : godzina = godzina % 12 
    godzina = godzina < 10 ? '0' + godzina : godzina
    minuta = minuta < 10 ? '0' + minuta : minuta
    return div.innerHTML = godzina + ':' + minuta + amorpm 
}
setInterval(()=>hours(new Date()), 1000)