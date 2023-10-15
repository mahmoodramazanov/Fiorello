const flowers = [
  {
    name: "Majestry Palm",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg",
    price: 259,
    bottomText: "Add to cart",
    types: ["cactuses", "greens", "popular", "winter"],
  },
  {
    name: "Foxglove Flower",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg",
    price: 259,
    bottomText: "Add to cart",
    types: ["exotic", "winter", "popular"],
  },
  {
    name: "Sweet Alyssum",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg",
    price: 259,
    bottomText: "Read more",
    types: ["greens", "various"],
  },
  {
    name: "Spring Snowflake",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg",
    price: 170,
    bottomText: "Add to cart",
    type: ["popular"],
  },
  {
    name: "Scarlet Sage",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg",
    price: 159,
    bottomText: "Add to cart",
    type: ["popular"],
  },
  {
    name: "Rock Soapwort",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg",
    price: 259,
    bottomText: "Add to cart",
    type: ["cactuses", "various"],
  },
  {
    name: "Summer Savory",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg",
    price: 259,
    bottomText: "Add to cart",
    type: ["greens", "various"],
  },
  {
    name: "Wild Roses",
    imgUrl:
      "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg",
    price: 259,
    bottomText: "Buy on Amazon",
    type: ["exotic", "various"],
  },
];

function writeInHtml(arr) {
  const cardsWrapper = document.querySelector(".flowers-cards-wrapper");
  let txt = "";
  arr.forEach((i) => {
    txt += `
    <div class="card col-lg-3 col-md-4 col-sm-6">
        <div class="card-inner">
          <div class="card-img">
            <img
              src="${i.imgUrl}"
              alt="one_flower"
            />
          </div>
          <div class="card-text">
            <h4>${i.name.toLowerCase()}</h4>
            <div class="bottom-text">
              <p class="${i.bottomText}">Add to card</p>
              <p class="price">$${i.price}</p>
            </div>
          </div>
        </div>
      </div>
        `;
  });
  cardsWrapper.innerHTML = txt;
}

writeInHtml(flowers);

const typeButtons = document.querySelectorAll(".type-filter-btn");

function filterByType(type, arr) {
  console.log("filter");
    return arr.filter((i) => {
        console.log ("1 1 filter")
        if(i.types.includes(type)){
            return true;
        }
    });

//   arr.filter((i) => {
//     i.types.forEach(ftype=>{
//         ftype == type;
//     })
//   });
}

typeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click");
    const flowerType = btn.getAttribute("flower-type");
    writeInHtml(filterByType(flowerType, flowers));
  });
});
