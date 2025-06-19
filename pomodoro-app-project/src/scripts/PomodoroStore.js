import { store, applySettingsAction } from "../lib/store/pomodoroRedux.js";
import { setStateToLocalStorage } from "../lib/utils/utils.js";

export function initStore() {
  const saveDataInLocalStorage = async () => {
    const state = store.getState();

    console.log(state);
    setStateToLocalStorage(state);
  };

  store.subscribe(saveDataInLocalStorage);
}

export const getState = () => store.getState();

export const applySettings = ({
  timePomodoro,
  timeShortBreak,
  timeLongBreak,
  font,
  color,
}) => {
  console.log({
    timePomodoro,
    timeShortBreak,
    timeLongBreak,
    font,
    color,
  });

  applySettingsAction(store, {
    timePomodoro,
    timeShortBreak,
    timeLongBreak,
    font,
    color,
  });
};
