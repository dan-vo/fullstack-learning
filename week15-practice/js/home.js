let prevButton = document.querySelector(
  '[data-component="pagination:previous"]'
);
let paginationSelect = document.querySelector(
  '[data-component="pagination:select"]'
);
let nextButton = document.querySelector('[data-component="pagination:next"]');
let buildPagination = function (pagination) {
  //the purpose of this function is to build all the options for the select element
  // create the variable to hold our new HTLM content
  let newContent = '';
  // 1st, we loop through the number of page we want to put inside the select
  for (let i = 1; i <= pagination.items.count; i++) {
    console.log(i);
    // 2nd now we know the number we want to put inside the select
    // we will create a new option to put in the select

    newContent = newContent + `<option value="${i}">${i}</option>`;
  }

  paginationSelect.innerHTML = newContent;
};
let loadListWithPageNumber = function () {};
let renderList = function (data) {
  // render the data to the listview.
  // choose the listview

  let listView = document.querySelector('[data-component="list"]');

  // create the Newcontent to hold all contents
  let newContent = '';
  let allNewContent = '';

  // Use the result.data we just above to create the UI for list
  // result.data is an array so we need to loop throught the array
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    newContent = `<div class="col-6 col-md-3 mb-5 text-center" title="${item.title_english}">
    <a href="details?id=${item.mal_id}" class="link-primary d-block position-relative text-decoration-none" data-component="item">
      <span class="position-absolute badge bg-danger top-0 end-0">
          <i class="bi bi-star-fill"></i> ${item.score}
      </span>
      <span class="d-flex flex-column justify-content-center">
          <img class="rounded shadow" src="${item.images.jpg.large_image_url}" data-component="image" />
          <span class="text-dark mt-2" data-component="title">${item.title_english}</span>
      </span>
    </a>
  </div>`;
    // add all the contents into the listview
    allNewContent = newContent + allNewContent;
  }
  //display the content in the the listview
  listView.innerHTML = allNewContent;
};
// we need to fetch the data from the link
fetch('https://api.jikan.moe/v4/top/anime')
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);

    // identify the data will be used in the list
    // in this case, we will use result.data

    const data = result.data;

    const pagination = result.pagination;
    buildPagination(pagination);
    renderList(data);
  });

// When we change to a new item inside the pagination select
paginationSelect.addEventListener('change', function () {
  // Get the current option value from the pagination select
  let selectedPage = paginationSelect.value;

  console.log(selectedPage);
  // we want to load the new list of anime based on the selectedPage above
  // so load the new list: it means we "fetch" data of that page
  fetch(`https://api.jikan.moe/v4/top/anime?page=${selectedPage}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);

      // identify the data will be used in the list
      // in this case, we will use result.data

      const data = result.data;

      renderList(data);
    });
});

// when next button is clicked
prevButton.addEventListener('click', function () {
  // get current option
  let currentPaginationValue = paginationSelect.value;
  // change cuurentPaginationValue to number
  currentPaginationValue = Number(currentPaginationValue);
  //value will change to +1
  let newPaginationValue = currentPaginationValue + 1;

  paginationSelect.value = newPaginationValue;
  loadListWithPageNumber(newPaginationValue);

  // load the list again using the new option value (after +1)
});
