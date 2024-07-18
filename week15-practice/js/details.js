// Create a URLSearchParams object
let urlParams = new URLSearchParams(window.location.search);
let animeId = urlParams.get('id');

console.log(animeId);


fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    renderDetails(result);
  });

//fetch data from the link

let content = document.querySelector('[data-component="content"]');

let allGenre = '';

    let genres = [];

    for (let i = 0; i < data.genres.length; i++) {
      let currentGenre = data.genres[i];
      let genresName = currentGenre.name;

      if(i=== 0){
        allGenres = genresName;
      } else {
        allGenre = allGenre + ` - ${genresName}`;
      }

      genres.push(currentGenre.name);
    }

    let producers = [];

    for (let i = 0; i < data.producers.length; i++) {
      let currentProducer = data.producers[i];
      let producersName = currentProducer.name

      producers.push(currentProducer.name);
    }

   

    let title = [];
    for (let i = 0; i < data.titles.length; i++){
        let currentTitle = data.titles[i];
        let titleName = currentTitle.title;

        titles.push(titleName);

    }

  let newContent = `
      <div class="col col-md-4">
          <img class="rounded shadow" src="${data.images.jpg.large_image_url}" />
      </div>
      <div class="col col-md-8">
          <div class="display-5 mb-2">${data.title_english}</div>
          <div class="mb-3">
              <strong class="me-3">Alternative</strong>
              <span>$</span>
          </div>
          <div class="mb-3">
              <strong class="me-3">Producers</strong>
              <span></span>
          </div>
          <div class="mb-3">
              <strong class="me-3">Status</strong>
              <span>${data.status}</span>
          </div>
          <div class="mb-3">
              <strong class="me-3">Genres</strong>
              <span></span>
          </div>
          <div class="mb-3">
              <strong class="me-3">Rating</strong>
              <span>${data.rating}</span>
          </div>
          <div class="mb-3">
              <strong class="me-3">Rank</strong>
              <span class="badge bg-danger me-1">
                  #${data.rank}
              </span>
              <span>(Score: ${data.score})</span>
          </div>
          <div>${data.synopsis}</div>
      </div>`;
  content.innerHTML = newContent;
};
