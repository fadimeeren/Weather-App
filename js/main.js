import { uiElement, updateThemeIcon } from "./ui.js";

// Body
const body = document.body;

// Mevcut tema değeri
const theme = "light";


// Body'e tema değerini attribute olarak ekle
body.setAttribute("data-theme", theme);

// Tema butonuna tıklanma olayını izle
uiElement.themeBtn.addEventListener("click", () => {

    // Mevcut tema değerine eriş
    const currentTheme = body.getAttribute("data-theme");
    
    // Erişilen tema değerinin tersini al
    const newTheme = currentTheme === "light" ? "dark" : "light" ;

    // Tema değerini body'e attribute olarak ekle
    body.setAttribute("data-theme", newTheme);
});