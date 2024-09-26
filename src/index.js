
// const addBtn = document.querySelector("#new-ramen-btn");
// const ramenFormContainer = document.querySelector(".container");
// const ramenCollection = document.getElementById("ramenCollection");
// const newRamenForm = document.querySelector("#add-ramen-form")
// addBtn.addEventListener("click", () => {
//      addRamen = !addRamen;
//       if (addRamen) {
//         ramenFormContainer.style.display = "block";
//       } else {
//         ramenFormContainer.style.display = "none";
//       }
// });

//submit the form

function displayRamens() {
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(ramenArray => ramenArray.forEach(ramen => renderRamen(ramen)))
};

function renderRamen(ramen) {
  const ramenImg = document.createElement('img'); 
  ramenImg.src = ramen.image;
  ramenImg.alt = ramen.name;
  ramenImg.addEventListener('click', () => handleClick(ramen))

 const ramenMenu = document.querySelector("#ramen-menu");
 ramenMenu.append(ramenImg)


}



// Callbacks
const handleClick = (ramen) => {
  const detailImage = document.querySelector("#ramen-detail img"); 
  detailImage.src = ramen.image;

  const name = document.querySelector("#ramen-detail h2");
  name.textContent = ramen.name;

  const restaurantName = document.querySelector("#ramen-detail h3");
  restaurantName.textContent = ramen.restaurant;

  const rating = document.querySelector("#rating-display");
  rating.textContent = ramen.rating;

  const comment = document.querySelector("#comment-display");
  comment.textContent = ramen.comment;
}; 

const addSubmitListener = () => {
  const ramenForm = document.querySelector("#new-ramen");

  const handleSubmit = (e) => {
    e.preventDefault();

     const name = document.querySelector("#new-name").value
     const restaurant = document.querySelector("#new-restaurant").value
     const image = document.querySelector("#new-image").value
     const rating = document.querySelector("#new-rating").value 
     const comment = document.querySelector("#new-comment").value

     const newRamen = {
      name,
      restaurant,
      image,
      rating,
      comment
     }

     renderRamen(newRamen)

     ramenForm.reset()
  }
  ramenForm.addEventListener("submit", handleSubmit)
}

const main = () => {
 displayRamens()
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
