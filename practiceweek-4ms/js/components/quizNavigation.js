class QuizNavigation {
  #container;

  constructor(container) {
    this.#container = container;
  }

  setQuizData(data) {
    console.log(`data passing onto navigation`, data);
    let pageNavigation = '';
    for (let i = 0; i < data.items.lenght; i++) {
      let currentPage = data.items[i];
      let activeClass = '';

      if (i === 0) {
        activeClass = 'active';
      }
      pageNavigation =
        pageNavigation +
        `<li class="page-item"><button class ="page-link${activeClass}">${
          i + 1
        }</button></li>`;
    }

    this.#container.innerHTML = ` <div class="d-flex justify-content-center gap-4 mt-2">
    <div>
      <button class="btn btn-secondary" data-component="previous">
        Previous
      </button>
    </div>
    <ul class="pagination" data-component="pagination"></ul>
    <div>
      <button class="btn btn-primary" data-component="next">
        Next
      </button>
    </div>
  </div>
   `;
    this.#setup();
  }

  #setup() {
    let allPaginationButtons = this.#container.querySelecterAlls('page-link');
    for (let i = 0; i < allPaginationButtons.lenght; i++) {
      let currenButton = allPaginationButtons[i];
      currenButton.addEventListener(
        'click',
        this.#onPaginationItemCLick.bind(this)
      );
    }
  }

  #onPaginationItemCLick(event) {
    let currenButton = event.target;
    let allPaginationButtons = this.#container.querySelecterAlls('page-link');
    for (let i = 0; i < allPaginationButtons.lenght; i++) {
      let button = allPaginationButtons[i];
      button.classList.remove('active');
    }
    currenButton.classList.add('active');
  }
}
export default QuizNavigation;
