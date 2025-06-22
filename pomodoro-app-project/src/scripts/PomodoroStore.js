import {
  store,
  applySettingsAction,
  updateModeAction,
  updateTimerAction,
  startTimerAction,
  stopTimerAction,
  resetTimerAction,
  increaseCountPomodoroAction,
} from "../lib/store/pomodoroRedux.js";
import { setStateToLocalStorage } from "../lib/utils/utils.js";

// export { store };

export function initStore() {
  const saveDataInLocalStorage = async () => {
    const state = store.getState();

    console.log(state);
    setStateToLocalStorage(state);
  };

  store.subscribe(saveDataInLocalStorage);
}

export function addListener(listenerFn) {
  store.subscribe(() => listenerFn(store));

  listenerFn(store);
}

export const getState = () => store.getState();

export const applySettings = ({
  timePomodoro,
  timeShortBreak,
  timeLongBreak,
  color,
  font,
  letterSpacing,
}) => {
  applySettingsAction(store, {
    timePomodoro,
    timeShortBreak,
    timeLongBreak,
    font,
    color,
    letterSpacing,
  });
};

export const updateMode = ({ pomodoroMode }) => {
  updateModeAction(store, {
    pomodoroMode,
  });
};

export const updateTimer = ({ totalDuration, timeRemaining, isRunning }) => {
  updateTimerAction(store, {
    totalDuration,
    timeRemaining,
    isRunning,
  });
};

export const startTimer = ({ totalDuration, timeRemaining }) => {
  startTimerAction(store, {
    totalDuration,
    timeRemaining,
  });
};

export const stopTimer = () => {
  stopTimerAction(store);
};

export const resetTimer = () => {
  resetTimerAction(store);
};

export const increaseCountPomodoro = () => {
  increaseCountPomodoroAction(store);
};
