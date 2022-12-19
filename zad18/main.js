const rodzaj = document.querySelector(`#rodzaj`)
const ile_litrow = document.querySelector(`#ile_litrow`)
const wynik = document. querySelector(`#wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener(`click`, function () {
    let rodz = parseInt(rodzaj.value);
    let ile = parseInt(ile_litrow.value);
    let koszt;

    if (rodz == 1) koszt = ile * 4;
    if (rodz == 2) koszt = ile * 3.5;

    wynik.innerHTML = `koszt paliwa: ${koszt} zł`;
})