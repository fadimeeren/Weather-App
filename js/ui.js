import {cities} from "./constants.js";



// Arayüz elementleri
const uiElement = {
    themeBtn: document.querySelector(".theme-btn"),
     dataList: document.querySelector("#city-list"),
};

// Tema ikonunu güncelleyecek fonksiyon
const updateThemeIcon = (theme) => {
    const icon  =  uiElement.themeBtn.querySelector("i");
    icon.className = theme === "Light" ? "bi bi-moon-fill" : "bi bi-sun-fill";
};

// Data List içerisine şehirleri basıcak fonsiyon
const renderCityList = () => {
cities.forEach((city) => {
const opt = document.createElement("option");
opt.value = city ;
uiElement.dataList.appendChild(opt);
});
};

// Değişken/fonksiyonları diğer dosyalarda kullanmak için export ediyoruz
export { uiElement, updateThemeIcon, renderCityList };