import { uiElement, updateThemeIcon, renderCityList } from "./ui.js";

// Body
const body = document.body;


//! Projede tutulan veriler
const STATE = {
theme: localStorage.getItem("theme") || "dark",
};

// Body'e tema değerini attribute olarak ekle
body.setAttribute("data-theme", STATE.theme);
updateThemeIcon(STATE.theme);


// ! Fonsiyonlar
// Mevcut değerleri localStoreage'e kaydet
const persist = () => {
    localStorage.setItem("theme", STATE.theme);
}
// ! Events
// Sayfa içeriği yüklendiğinde 
document.addEventListener("DOMContentLoaded", ()=> {
    renderCityList();
;})
// Tema butonuna tıklanma olayını izle
uiElement.themeBtn.addEventListener("click", () => {

    // STATE'de tema değerinin tersini al
    STATE.theme = STATE.theme  === "light" ? "dark" : "light" ;

    // Tema değerini body'e attribute olarak ekle
    body.setAttribute("data-theme", STATE.theme);

    // Son temayı localStoreage'e kaydet
    persist();

    // İconu güncelle
    updateThemeIcon(STATE.theme);
});