class QuizNavigation {
  #container;
  #activeIndex;
  #previousButton;
  #nextButton;

  constructor(container) {
    this.#container = container;
  }

  setQuizData(data) {
    console.log(`data passing`, data);

    //create th empty of the page
    let pageNavigation = ``;
    // using for loop to create the LI
    for (let i = 0; i < data.items.length; i++) {
      pageNavigation =
        pageNavigation +
        `<li class ="page-item">
      <button class="page-link">${i + 1}</button>
      </li>`;
    }

    this.#container.innerHTML = `<div class="d-flex justify-content-center gap-4 mt-2">
    <div>
      <button class="btn btn-secondary" data-component="previous">
        Previous
      </button>
    </div>
    <ul class="pagination" data-component="pagination">
    ${pageNavigation}
    </ul>
    <div>
      <button class="btn btn-primary" data-component="next">
        Next
      </button>
    </div>
  </div>
  `;
    this.#setup();
    this.#setActivePagination(0);
  }
  #setup() {
    let allPaginations = this.#container.querySelectorAll('.page-link');
    for (let i = 0; i < allPaginations.length; i++) {
      let currentButton = allPaginations[i];
      currentButton.addEventListener(
        'click',
        this.#onPaginationitemclick.bind(this)
      );
    }
    this.#nextButton = this.#container.querySelector('[data-component="next"]');
    this.#nextButton.addEventListener(
      'click',
      this.#onNextButtonClick.bind(this)
    );

    this.#previousButton = this.#container.querySelector(
      '[data-component="previous"]'
    );
    this.#previousButton.addEventListener(
      'click',
      this.#onPreviousButtonClick.bind(this)
    );
  }

  #onNextButtonClick() {
    //select the active button.
    let newIndex = this.#activeIndex + 1;
    this.#setActivePagination(newIndex);

    // you say get the index and +1
    // where the index come from
    // remove active all button

    // add the active class
  }

  #onPreviousButtonClick() {
    if (this.#activeIndex > 0) {
      let newIndex = this.#activeIndex - 1;
      this.#setActivePagination(newIndex);
    }
  }

  #onPaginationitemclick(event) {
    let currentButton = event.target;
    let label = currentButton.innerHTML;
    let index = Number(label) - 1;

    this.#setActivePagination(index);
    //remove the active from all pagination button
  }
  #setActivePagination(index) {
    let allPaginationButtons = this.#container.querySelectorAll('.page-link');
    for (let i = 0; i < allPaginationButtons.length; i++) {
      let button = allPaginationButtons[i];
      if (i === index) {
        button.classList.add(`active`);
      } else {
        button.classList.remove(`active`);
      }
    }
    this.#activeIndex = index;

    //when active index larger than 0
    if (this.#activeIndex > 0) {
      this.#previousButton.disabled = false;
      //set the previous button dsabled to false
    } else {
      // otherwise set the previouse button to true
      this.#previousButton.disabled = true;
    }

    // how do we know if the #activeIndex is the last item index?
    // when the #activeIndex is equal to allPaginationButtons.length -1
    if (this.#activeIndex === allPaginationButtons.length - 1) {
      // set the Next button to 'submit'
      this.#nextButton.innerHTML = 'Submit';
    }

    //otherwise set the Next Button text to "Next"
    else {
      this.#nextButton.innerHTML = 'Next';
    }
  }
}
export default QuizNavigation;
