async function name1(value) {
  try {
    var a = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${value}+&appid=6776c9115007808af4dcbe8f6e96b295`
    );
    var b = await a.json();

    alert(b.main.temp);
  } catch (error) {
    alert("oops !!!");
  }
}

async function getcountries() {
  try {
    var getdata = await fetch("https://restcountries.com/v3.1/all");
    var countries = await getdata.json();
    // console.log(countries);
    countries.forEach((country) => {
      var creatediv = document.createElement("div");
      creatediv.setAttribute("class", "card");
      creatediv.style.width = "10rem";
      var createbutton = document.createElement("button");
      createbutton.style.color = "blue";
      createbutton.style.width = "155px";
      createbutton.style.height = "40px";
      createbutton.innerText = "getweather";
      createbutton.addEventListener("click", () => {
        return name1(country.name.common);
      });

      creatediv.innerHTML = ` <img src="${country.flags.png}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${country.name.common}</h5>
          <p class="card-text">${country.capital}</p>
          </div> `;
      creatediv.appendChild(createbutton);
      document.body.appendChild(creatediv);
    });
    alert("data stored");
  } catch (error) {
    alert("oops !!! something went wrong");
  }
}
getcountries();

/*

<a href="http://api.openweathermap.org/data/2.5/weather?q=${country.name.common}+&appid=6776c9115007808af4dcbe8f6e96b295"  class="btn btn-primary">get Weather</a>

*/
