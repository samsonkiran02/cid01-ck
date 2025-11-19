document.addEventListener("DOMContentLoaded", () => {
  fetch("menu.json")
    .then(res => res.json())
    .then(data => {
      loadMenu("starters", data.starters);
      loadMenu("breakfast", data.breakfast);
      loadMenu("lunch", data.lunch);
      loadMenu("dinner", data.dinner);
    })
    .catch(err => console.error("Error loading menu:", err));
});

function loadMenu(category, items) {
  const container = document.getElementById(`${category}-list`);
  container.innerHTML = "";

  items.forEach(item => {
    container.innerHTML += `
      <div class="col-lg-4 menu-item">
        <a href="${item.img}" class="glightbox">
          <img src="${item.img}" class="menu-img img-fluid" alt="">
        </a>
        <h4>${item.name}</h4>
        <p class="ingredients">${item.ingredients}</p>
        <p class="price">${item.price}</p>
      </div>
    `;
  });

  // reinitialize glightbox after new items load
  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".glightbox" });
  }
}
