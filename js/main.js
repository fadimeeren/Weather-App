import { getWeatherData } from "./api.js";
import {
  uiElement,
  updateThemeIcon,
  renderCityList,
  renderError,
  setLoader,
  clearError,
  renderWeatherData,
  renderRecentChips,
  updateUnitToggle,
} from "./ui.js";

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
};

// Form gönderilince çalışan fonksiyon
const handleSearch = async (city) => {
  // Şehir ismini al
  const name = city.trim();

  console.log(name);

  // Şehir ismi girilmediyse ekrana hata ver
  if (!name) {
    renderError("Şehir ismi zorunludur!");
    return;
  }

  // Önceden hata varsa temizle
  clearError();

  // Ekrana loader bas
  setLoader(true);

  // Api'dan hava durumu verileri al
  try {
    await getWeatherData(city);

    //Şehir bulunamazsa ekrana hatayı bas
    if (DataTransfer.cod === "404") {
      renderError;
      return renderError("Şehir bulunamadı!");
    }

    // Havadurumu verisini ekrana bas
    renderWeatherData(data);
  } catch (error) {
    renderError(error.message || "Şehir bulunamadı");
  } finally {
    setLoader(false);
  }
};

// ! Events
// Sayfa içeriği yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  renderCityList();
});

// Form gönderildiğinde
uiElement.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = uiElement.searchInput.value;

  handleSearch(city);
});

// Tema butonuna tıklanma olayını izle
uiElement.themeBtn.addEventListener("click", () => {
  // STATE'de tema değerinin tersini al
  STATE.theme = STATE.theme === "light" ? "dark" : "light";

  // Tema değerini body'e attribute olarak ekle
  body.setAttribute("data-theme", STATE.theme);

  // Son temayı localStoreage'e kaydet
  persist();

  // İconu güncelle
  updateThemeIcon(STATE.theme);
});
