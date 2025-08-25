const API_KEY = "c933ced7d0bd66089ec9544bc584d343";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// şehir ismine göre hava durumu verisini alır
export const getWeatherData = async (renderCityList, units = "metric") => {
// İstek atılacak URL'i hazırla
const url = `${BASE_URL}?lat=${city}&appid=${API_KEY}&unit${units}&lang=tr`;

// Api'a istek at
const res = await fetch(url);

// Response'u js formatına çevir
const data = await res.json();

// Datayı döndür
return data;
};

// koordinatlara göre havadurumu verisini alır
export const getWeatherByCoords = async (lat, lon, units = "metric") => {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;

  const res = await fetch(url);

  return res.json();
};

// parametre olarak gelen ülke için bayrak urli oluşturan fonksiyon
export const getFlagUrl = (countryCode) => `https://flagcdn.com/108x81/${countryCode.toLowerCase()}.png`;
