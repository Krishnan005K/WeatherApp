const cityname = document.querySelector(".cityname");
const datetime = document.querySelector(".date");
const fulldate = document.querySelector(".fulldate");
const searchdiv = document.querySelector("#searchdiv");
const searchinput = document.querySelector("#searchinput");
const searchbtn = document.querySelector("#searchbtn");
const temp = document.querySelector(".temp");
const skysit = document.querySelector(".skysit");
const skyicon = document.querySelector(".skysiticon");
const skysituation = document.querySelector(".skysituation");
const region = document.querySelector(".region");
const speed = document.querySelector(".speed");
const humidite = document.querySelector(".humidite");
const presuare = document.querySelector(".presuare");
const sunset = document.querySelector(".sunsettime");
const sunrise = document.querySelector(".sunrisetime");
const max = document.querySelector("#max");
const min = document.querySelector("#min");
const backgroundimg = document.querySelector("#backgroundimg");

function currentTime() {
  let date = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentfulldate =
    weekdays[date.getDay()] +
    " " +
    date.getDate() +
    " ," +
    date.toLocaleString("default", { month: "short" }) +
    " " +
    date.getFullYear();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + " : " + mm + " : " + ss + " " + session;

  datetime.innerText = time;
  fulldate.innerText = currentfulldate;
  setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();

function fetching(term, ee) {
  let ApiKey = "8a84ea5f93efbc7c269dad9d3cf888b2";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${term}&lang=${ee}&appid=${ApiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const timestamp = new Date().getTime();

      cityname.textContent = data.name;
      temp.innerHTML = `${data.main.temp}°<span>C</span>`;
      skysituation.textContent = data.weather[0].description;
      if (data.main.temp > 25) {
        skysit.style.color = "#ffff70";
        skyicon.classList.replace("fa-snowflake", "fa-sun");
      } else if (data.main.temp > 15) {
        skysit.style.color = "#7c7892";
        skyicon.classList.replace("fa-sun", "fa-cloud");
      } else {
        skysit.style.color = "#a4e6fe";
        skyicon.classList.replace("fa-cloud", "fa-snowflake");
      }
      max.textContent = `${data.main.temp_max}°`;
      min.textContent =  `${data.main.feels_like}°`;
      region.textContent = data.sys.country;
      speed.textContent = `${data.wind.speed} km/h`;
      humidite.textContent = `${data.main.humidity} %`;
      presuare.textContent = `${data.main.pressure} kPa`;
      sunrise.textContent = new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString();
      sunset.textContent = new Date(
        data.sys.sunset * 1000
      ).toLocaleTimeString();
    });
}
fetching("coimbatore", "en");

let c = {
  coord: { lon: 3.042, lat: 36.7525 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  base: "stations",
  main: {
    temp: 13.9,
    feels_like: 12.99,
    temp_min: 13.9,
    temp_max: 13.9,
    pressure: 1028,
    humidity: 63,
  },
  visibility: 10000,
  wind: { speed: 1.54, deg: 80 },
  clouds: { all: 0 },
  dt: 1672514924,
  sys: {
    type: 1,
    id: 1060,
    country: "DZ",
    sunrise: 1672470009,
    sunset: 1672504861,
  },
  timezone: 3600,
  id: 2507480,
  name: "Algiers",
  cod: 200,
};

let imgarr = [
  "https://www.itl.cat/pngfile/big/123-1235712_hd-wallpaper-4k-minimalist-wallpaper-phone.jpg",
  "https://i.pinimg.com/474x/61/8f/69/618f69a7fe4b2d659ba17b88807a39f5.jpg",
  "https://wallpaperaccess.com/full/2452306.jpg",
  "https://wallpaperaccess.com/full/1506250.jpg",
  "https://wallpaperaccess.com/full/3116830.jpg",
  "https://coolhdwall.com/storage/thumbnail/2205/aurora-borealis-forest-scenery-river-digital-art-hd-phone-wallpaper-y-preview-17.jpg",
  "https://img5.goodfon.com/wallpaper/nbig/7/91/huang-bacon-by-huang-bacon-priroda-zima-sneg-sobaka-derevia.jpg",
  "https://w0.peakpx.com/wallpaper/526/99/HD-wallpaper-mountain-2d-2d-landscape-black-blue-foggy-mountains-purple-trees-violet.jpg",
  "https://i.pinimg.com/564x/b9/49/07/b949076dfbe6a8d92502a2321fdfe71a.jpg",
  "https://i.pinimg.com/originals/07/b2/09/07b209b7c78697627e253e1b43c1cb84.jpg",
  "https://i.pinimg.com/originals/74/72/41/747241a8abd068bf0b09d303ce458c4c.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxl0Iop7qIbYngH9w5IxYBcJus4nu3ygIzMsUpxn0QWZOfTFlhJbHXkW6XLIgyue7zyUA&usqp=CAU",
  "https://qph.cf2.quoracdn.net/main-qimg-02de6b29bc8cd3fb6cfe9605ca40af49-lq",
  "https://w0.peakpx.com/wallpaper/657/489/HD-wallpaper-forest-hood-japan-mount-mountain-night-sky-thumbnail.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZ1SYQEzpOKix7PU4t036SDWkzlRoVECyD4iKSTlhPbkxhZUIUb4EdsfU7UdIkIuLQls&usqp=CAU",
  "https://www.wallpapertip.com/wmimgs/123-1238372_new-york-city.jpg",
  "https://i.pinimg.com/236x/cf/63/37/cf6337de108fb3839ada500e167be99f.jpg",
  "https://i.pinimg.com/736x/8f/ea/28/8fea2829de683850226310c65f673eaa.jpg",
];

searchinput.addEventListener("keyup", (e) => {
  let value = e.target.value.trim();

  if (e.keyCode === 13 && value !== "") {
    backgroundimg.src = imgarr[Math.floor(Math.random() * imgarr.length)];
    fetching(value);
  }
});
searchbtn.addEventListener("click", (e) => {
  let value = searchinput.value.trim();
  if (value !== "") {
    fetching(value);
  }
});

window.addEventListener("click", (e) => {
  searchinput === document.activeElement
    ? searchdiv.classList.add("activesearch")
    : searchdiv.classList.remove("activesearch");
});
window.addEventListener("load", (e) => {
  backgroundimg.src = imgarr[Math.floor(Math.random() * imgarr.length)];
});
