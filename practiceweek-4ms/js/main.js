import QuizSelection from './components/quizSelection.js';
import QuizNavigation from './components/quizNavigation.js';

class QuizApp {
  #container;
  #quizSelection;
  #activeQuiz;
  #quizNavigation;

  // when we create the instance of the quizApp
  //we need to provide tthe HYNL DOM element of where we
  // wanr our quizApp to process / put content in there
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
    this.#quizSelection = new QuizSelection(
      selectionContainer,
      this.#onQuizSelectionChange.bind(this)
    );

    let navigationContainer = this.#container.querySelector(
      '[data-compnent="navigation"]'
    );
    this.#quizNavigation = new QuizNavigation(navigationContainer);
  }

  #onQuizSelectionChange(selectedValue) {
    console.log(selectedValue);
    // to do fetch we need to know the url we arbout to fetch
    // 1. construct the url so we can fetch
    // What do we want: data/javascript-quiz.json
    //
    let url = `data/${selectedValue}.json`;
    console.log(url);

    // fetch data
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (result) {
          // to this point we know what quiz we selected
          console.log(result);

          // we need to save the selected quiz to our #activeQuiz so we can use it later
          this.#activeQuiz = result;
          this.#quizNavigation.setQuizData(this.#activeQuiz);
        }.bind(this)
      );
  }
}

let appContainer = document.querySelector('#app');
let app = new QuizApp(appContainer);
