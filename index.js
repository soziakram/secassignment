async function fetchProducts() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    let person = ``;
    data.results.forEach((element) => {
      if (
        element.status == "Alive" ||
        Object.keys(element.episode).length >= 25
      ) {
        person =
          person +
          `
                  <div class="info">
                  <h3> ${element.name}</h3>
                  <span class="id">${element.id}</span>
                  <span>${element.gender}</span>
                  <span>${element.status}</span>
                  <span>${Object.keys(element.episode).length} main</span>
                 </div>`;
      }
    });

    const sections = document.querySelector(".section");
    const myJSON = JSON.stringify(person);
    sections.innerHTML = person;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}
fetchProducts();
