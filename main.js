async function getData() {
  await fetch("data.json")
    .then((response) => response.json())
    .then((data) => renderData(data))
    .catch((error) => console.log(`There is this ${error}`));
}

function renderData(data) {
  let mainContainer = document.querySelector(".main-container");
  let output = "";
  data.forEach((element) => {
    element.combined = [...element.languages, ...element.tools];
    element.combined.unshift(element.role);
    output += `
  <div class="${element.featured ? "list border" : "list"}">
  <div class="left">
    <div class="image">
      <img src=${element.logo} alt="photosnap" />
    </div>
    <div class="text">
      <div class="top">
        <h3>${element.company}</h3>
        <p class = ${element.new ? "" : "hidden"}>New</p>
        <p class = ${element.featured ? "" : "hidden"}>Featured</p>
      </div>
      <div class="middle">
        <h2>${element.position}</h2>
      </div>
      <div class="bottom">
        <p>${element.postedAt}</p>
        <p>${element.contract}</p>
        <p>${element.location}</p>
      </div>
    </div>
  </div>
  <div class="right">
  <ul class ="btn-container">
    ${element.combined
      .map(
        (item) => `
      <li>${item}</li>
    `
      )
      .join("")}
  </ul>
</div>
</div>
  `;
  });
  mainContainer.innerHTML = output;

  let btnContainer = document.querySelectorAll(".main-container");
  mainContainer.addEventListener("click", (e) => {
    const filtered = document.querySelector(".filtered");
    const filter = filtered.querySelector(".filter");
    let category = "";
    category += `
    <li>${e.target.innerText}<span><img src="./images/icon-remove.svg" alt=""></span></li>
    `;
    filter.innerHTML = category;
    filtered.classList.remove("hidden");
  });
}
getData();
