import { store, actionTypes } from "../store/pomodoroStore.js";

export default function TimerIsland() {
  const timerElement = document.querySelector('[data-island="timer"]');
  const countdownElement = timerElement.querySelector(".countdown");
  const startStopButton = timerElement.querySelector(".start-stop");
  const resetButton = timerElement.querySelector(".reset");
  const sessionTimeElement = timerElement.querySelector(".session-time");
  const breakTimeElement = timerElement.querySelector(".break-time");

  let intervalId;

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  function updateUI(state) {
    const time = state.isBreak ? state.breakTime : state.sessionTime;
    countdownElement.textContent = formatTime(time);
    sessionTimeElement.textContent = formatTime(state.sessionTime);
    breakTimeElement.textContent = formatTime(state.breakTime);
    startStopButton.textContent = state.isRunning ? "Stop" : "Start";
  }

  function startStop() {
    if (store.getState().isRunning) {
      clearInterval(intervalId);
      store.dispatch({ type: actionTypes.STOP });
    } else {
      store.dispatch({ type: actionTypes.START });
      intervalId = setInterval(() => {
        const state = store.getState();
        const time = state.isBreak ? state.breakTime : state.sessionTime;
        if (time <= 0) {
          clearInterval(intervalId);
          store.dispatch({ type: actionTypes.TOGGLE_BREAK });
          store.dispatch({ type: actionTypes.START });
        } else {
          store.dispatch({
            type: state.isBreak
              ? actionTypes.SET_BREAK_TIME
              : actionTypes.SET_SESSION_TIME,
            payload: time - 1,
          });
        }
      }, 1000);
    }
  }

  function reset() {
    clearInterval(intervalId);
    store.dispatch({ type: actionTypes.RESET });
  }

  store.subscribe(updateUI);
  startStopButton.addEventListener("click", startStop);
  resetButton.addEventListener("click", reset);
}
