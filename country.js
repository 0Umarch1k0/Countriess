const btn = document.getElementById("dark-btn");
const infosImg = document.getElementById("infos-img");
const flagsInfo = document.getElementById("flags-info");



btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  

  



  const davlat = JSON.parse(localStorage.getItem("davlat"))[0];
console.log(davlat);

infosImg.src = davlat.flags.svg;


let bordersInfo = '';
if (davlat.borders && davlat.borders.length > 0) {
  bordersInfo = davlat.borders.join(', '); 
} else {
  bordersInfo = "Bu davlatda qo'shni davlatlar yo'q"; 
}

flagsInfo.innerHTML = `
  <h1 class="uz">${davlat.name.common}</h1>
  <h3><span>Capital</span>: ${davlat.capital}</h3>
  <h3><span>Population</span>: ${davlat.population}</h3>
  <h3><span>Area:</span> ${davlat.area} km kv</h3>
  <h3 class="millat"><span>Borders:</span> ${bordersInfo}</h3>
`;








  