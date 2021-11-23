fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  .then((res) => res.json())
  .then((data) => displayMeal(data));

const displayMeal = (meals) => {
  const mealsDetails = document.getElementById("meals");
  for (let i = 0; i < meals.length; i++) {
    const userMenu = meals[i];

    const mealDiv = document.createElement("div");
    const h3 = document.createElement("h3");

    mealClass.className = "strMeal";
    const mealsInfo = `
    <h3 class ="mealName" > ${meal.name.common}</h3>
    
    `;

    countryDiv.innerHTML = countryInfo;

    countriesDiv.appendChild(countryDiv);
  }
};

{
  /* <p class="capitalName" > Capital: ${country.capital} </p>
    <p class="regionName" > Region: ${country.region} </p>
    <button onclick="displayCountry('${country.name.common}')">Details </button> */
}
