async function getData(output) {
  await fetch("data.json")
    .then((response) => response.json())
    .then((data) => renderData(data))
    .catch((error) => console.log(`There is this ${error}`));
}

function renderData(data) {
  let mainContainer = document.querySelector(".main-container");
  let output = "";
  data.forEach((element) => {
    output += `
  <div class="${element.featured ? 'list border' : 'list'}">
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
  <ul>
    <li>${element.level}</li>
    ${element.languages
      .map(
        (lang) => `
      <li>${lang}</li>
    `
      )
      .join("")}
    ${element.tools
      .map(
        (tool) => `
      <li>${tool}</li>
    `
      )
      .join("")}

  </ul>
</div>
</div>
  `;
  });
  mainContainer.innerHTML = output;
}

getData();
