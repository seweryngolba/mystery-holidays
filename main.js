const drawBtn = document.querySelector("#drawBtn");
const pageBody = document.querySelector("#page-body");

const destinations = [
  {
    country: "France",
    city: "Paris",
    type: "Citybreak",
    attraction: "Eiffel Tower",
    photo: "./assets/tower.jpg",
  },
  {
    country: "Italy",
    city: "Rome",
    type: "Citybreak",
    attraction: "Colosseum",
    photo: "./assets/colosseum.jpg",
  },
  {
    country: "Poland",
    city: "Cracow",
    type: "Citybreak",
    attraction: "Wawel Castle",
    photo: "./assets/wawel.jpg",
  },
  {
    country: "Spain",
    city: "Barcelona",
    type: "Citybreak",
    attraction: "Sagrada Familia",
    photo: "./assets/sagrada.jpg",
  },
  {
    country: "USA",
    city: "New York",
    type: "Citybreak",
    attraction: "Statue of Liberty",
    photo: "./assets/statue.jpg",
  },
  {
    country: "England",
    city: "London",
    type: "Citybreak",
    attraction: "Big Ben",
    photo: "./assets/big-ben.jpg",
  },
  {
    country: "Turkey",
    city: "Cappadocia",
    type: "Exploring",
    attraction: "Air Balloon",
    photo: "./assets/capadocia.jpg",
  },
  {
    country: "Maldives",
    city: "Male",
    type: "Sunbathing",
    attraction: "Beaches",
    photo: "./assets/maledives.jpg",
  },
  {
    country: "Croatia",
    city: "Dalmatia",
    type: "Sunbathing",
    attraction: "Beaches",
    photo: "./assets/cro.jpg",
  },
  {
    country: "Italy",
    city: "Sardinia",
    type: "Sunbathing",
    attraction: "Beaches",
    photo: "./assets/sardegna.jpg",
  },
  {
    country: "Portugal",
    city: "Faro",
    type: "Sunbathing",
    attraction: "Beaches",
    photo: "./assets/portugal.jpg",
  },
  {
    country: "Japan",
    city: "Tokyo",
    type: "Exploring",
    attraction: "Culture",
    photo: "./assets/jap.jpg",
  },
  {
    country: "Austria",
    city: "Alpes",
    type: "Active",
    attraction: "Snowboarding",
    photo: "./assets/alpes.jpg",
  },
  {
    country: "Iceland",
    city: "Westfjords",
    type: "Exploring",
    attraction: "Waterfalls",
    photo: "./assets/islandia.jpg",
  },
  {
    country: "Thailand",
    city: "Phuket",
    type: "Exploring",
    attraction: "Beaches",
    photo: "./assets/thailand.jpg",
  },
];

const drawDestination = () => {
  const countrySelect = document.querySelector("#destination-country");
  const citySelect = document.querySelector("#destination-city");
  const travelType = document.querySelector("#destination-type");
  const attractionSelect = document.querySelector("#destination-atrr");

  const randomDestination =
    destinations[Math.floor(Math.random() * destinations.length)];
  const { country, city, type, attraction, photo } = randomDestination;

  countrySelect.textContent = `${country}`;
  citySelect.textContent = `${city}`;
  travelType.textContent = `${type}`;
  attractionSelect.textContent = `${attraction}`;
  pageBody.style.backgroundImage = `url(${photo})`;
  pageBody.style.backgroundPosition = "center";
  pageBody.style.backgroundSize = "cover";
  pageBody.style.backgroundRepeat = "no-repeat";
};

drawBtn.addEventListener("click", drawDestination);
