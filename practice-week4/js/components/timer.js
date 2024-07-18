class Timer {
  #container;
  #clock;

  constructor(container) {
    this.#container = container;
  }

  startRunning() {
    this.#container.innerHTML = `<div class="alert alert-info p-1 px-3 mt-3 d-inline-block">
  <i class="bi bi-clock"></i>
  <span data-component="clock">00:00:00</span>
</div>`;

    this.#clock = this.#container.querySelector('[data-component="clock"]');
  }
  #startClock() {}
}
export default Timer;
