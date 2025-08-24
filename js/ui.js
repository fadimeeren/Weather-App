// Arayüz elementleri
const uiElement = {
    themeBtn: document.querySelector(".theme-btn"),
};

// Tema ikonunu güncelleyecek fonksiyon
const updateThemeIcon = (theme) => {
    const icon  =  uiElement.themeBtn.querySelector("i");
    icon.className = theme === "Light" ? "bi bi-moon-fill" : "bi bi-sun-fill";
};

// Değişken/fonksiyonları diğer dosyalarda kullanmak için export ediyoruz
export { uiElement, updateThemeIcon };