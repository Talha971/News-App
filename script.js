let main_div = document.createElement("div");
main_div.setAttribute("class", "container");

let sub_div = document.createElement("div");
sub_div.setAttribute("class", "d-flex justify-content-around row sub_div");

document.body.appendChild(main_div);
main_div.appendChild(sub_div);

document.getElementById("src_btn").addEventListener("click", () => {
  let input = document.getElementById("inp");

  fetch(
    `https://newsapi.org/v2/everything?q=${input.value}&from=2024-02-01&sortBy=publishedAt&apiKey=da46bc187cab479b978e1edbeef04b6d`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      input.value = "";
      sub_div.innerHTML = "";

      data.articles.forEach((value) => {
        let div1 = document.createElement("div");
        div1.setAttribute("class", " col-12 col-md-4 col-lg-3 my-3 d1");

        let image = document.createElement("img");
        image.src = value.urlToImage;
        image.setAttribute("class", "card-img-top");

        let div2 = document.createElement("div");
        div2.setAttribute("class", "card-body bg-light");

        let card_title = document.createElement("h5");
        card_title.setAttribute("class", "card-title");
        card_title.textContent = value.title.slice(0, 30) + "...";

        let card_text = document.createElement("p");
        card_text.setAttribute("class", "card-text");
        card_text.textContent = value.description.slice(0, 75) + "...";

        let link = document.createElement("a");
        link.textContent = `source`;
        link.setAttribute("href", `${value.url}`);

        sub_div.appendChild(div1);
        div1.appendChild(image);
        div1.appendChild(div2);
        div2.appendChild(card_title);
        div2.appendChild(card_text);
        div2.appendChild(link);
      });
    });
});
