import QuizSelection from './components/quizSelection.js';
import QuizNavigation from './components/quizNavigation.js';

class QuizApp {
  #container;
  #quizSelection;
  #activeQuiz;
  #quizNavigation;

  // when we create an instance of the quizApp
  //We need to provide the HTML DOM element of where we
  // want our quizApp to process / put content in there

  constructor(container) {
    this.#container = container;
    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
    <div class="container mt-5 text-center">
       <div data-component="selection"></div>
       <div data-component="content"></div>
       <div data-component="timer"></div>
       <div data-component="navigation"></div>
       <div data-component="report"></div>
     </div>`;
  }

  #setup() {
    let selectionContainer = this.#container.querySelector(
      '[data-component="selection"]'
    );
    this.QuizSelection = new QuizSelection(
      selectionContainer,
      this.#onQuizSelectionChange.bind(this)
    );

    let navigationContainer = this.#container.querySelector(
      '[data-component="navigation"]'
    );

    this.#quizNavigation = new QuizNavigation(navigationContainer);
  }

  #onQuizSelectionChange(selectedValue) {
    console.log(selectedValue);
    //to do the fectch we need to know the url we about to fetch
    // 1. construct the url so we can fetch
    let url = `data/${selectedValue}.json`;
    console.log(url);

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (result) {
          console.log(result);
          this.#activeQuiz = result;
          this.#quizNavigation.setQuizData(this.#activeQuiz);
        }.bind(this)
      );
  }
}

let appContainer = document.querySelector('#app');
let app = new QuizApp(appContainer);
