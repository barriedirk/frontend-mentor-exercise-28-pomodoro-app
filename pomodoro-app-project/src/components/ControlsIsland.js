import { store, actionTypes } from "../store/pomodoroStore.js";

export default function ControlsIsland() {
  const controlsElement = document.querySelector('[data-island="controls"]');
  const sessionIncrementButton =
    controlsElement.querySelector(".session-increment");
  const sessionDecrementButton =
    controlsElement.querySelector(".session-decrement");
  const breakIncrementButton =
    controlsElement.querySelector(".break-increment");
  const breakDecrementButton =
    controlsElement.querySelector(".break-decrement");

  function updateUI(state) {
    // Update UI elements based on state if needed
  }

  function adjustSessionTime(amount) {
    const newSessionTime = store.getState().sessionTime + amount;
    if (newSessionTime > 0) {
      store.dispatch({
        type: actionTypes.SET_SESSION_TIME,
        payload: newSessionTime,
      });
    }
  }

  function adjustBreakTime(amount) {
    const newBreakTime = store.getState().breakTime + amount;
    if (newBreakTime > 0) {
      store.dispatch({
        type: actionTypes.SET_BREAK_TIME,
        payload: newBreakTime,
      });
    }
  }

  store.subscribe(updateUI);
  sessionIncrementButton.addEventListener("click", () => adjustSessionTime(60));
  sessionDecrementButton.addEventListener("click", () =>
    adjustSessionTime(-60)
  );
  breakIncrementButton.addEventListener("click", () => adjustBreakTime(60));
  breakDecrementButton.addEventListener("click", () => adjustBreakTime(-60));
}
