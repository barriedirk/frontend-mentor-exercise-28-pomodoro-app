import { getStateFromLocalStorage } from "../utils/utils.js";

const initialState = {
  timePomodoro: 25,
  timeShortBreak: 5,
  timeLongBreak: 15,
  font: "--ff-space",
  color: "--clr-purple-400",
  letterSpacing: "--ff-space",

  pomodoroMode: "pomodoro", // "pomodoro", "short-break", "long-break"

  totalDuration: 0,
  timeRemaining: 0,
  breakTime: 0,
  isRunning: false,
};

export const ActionTypes = Object.freeze({
  UPDATE_MODE: "UPDATE_MODE",
  APPLY: "APPLY_SETTINGS",
  START: "START",
  PAUSE: "PAUSE",
  STOP: "STOP",
  UPDATE_TIMER: "UPDATE_TIMER",
  RESET: "RESET",
  INIT: "@@INIT",
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.APPLY: {
      const {
        timePomodoro,
        timeShortBreak,
        timeLongBreak,
        font,
        color,
        letterSpacing,
      } = action.payload;

      return {
        ...state,
        timePomodoro,
        timeShortBreak,
        timeLongBreak,
        font,
        color,
        letterSpacing,
      };
    }
    case ActionTypes.UPDATE_MODE: {
      const { pomodoroMode } = action.payload;

      return {
        ...state,
        pomodoroMode,
      };
    }
    case ActionTypes.START: {
      const { totalDuration, timeRemaining } = action.payload;

      return {
        ...state,
        totalDuration,
        timeRemaining,
        isRunning: true,
      };
    }
    case ActionTypes.STOP: {
      return { ...state, isRunning: false };
    }
    case ActionTypes.RESET:
      return {
        ...state,
        breakTime: 5 * 60,
        isRunning: false,
      };

    case ActionTypes.UPDATE_TIMER: {
      const { totalDuration, timeRemaining, isRunning } = action.payload;

      return {
        ...state,
        totalDuration,
        timeRemaining,
        isRunning,
      };
    }
    case ActionTypes.INIT: {
      let newState = getStateFromLocalStorage() ?? structuredClone(state);

      return {
        ...newState,
      };
    }

    default:
      return state;
  }
};

export function createStore(reducer) {
  let state = undefined;
  let listeners = [];

  const getState = () => Object.freeze(state);

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({ type: "@@INIT" });

  return {
    dispatch,
    subscribe,
    getState,
  };
}

export const store = createStore(reducer);

/*  =ACTIONS---------------------- */

export const applySettingsAction = (
  store,
  { timePomodoro, timeShortBreak, timeLongBreak, font, color, letterSpacing }
) => {
  store.dispatch({
    type: ActionTypes.APPLY,
    payload: {
      timePomodoro: timePomodoro ?? initialState.timePomodoro,
      timeShortBreak: timeShortBreak ?? initialState.timeShortBreak,
      timeLongBreak: timeLongBreak ?? initialState.timeLongBreak,
      font: font ?? initialState.font,
      letterSpacing: letterSpacing ?? initialState.letterSpacing,
      color: color ?? initialState.color,
    },
  });
};

export const updateModeAction = (store, { pomodoroMode }) => {
  store.dispatch({
    type: ActionTypes.UPDATE_MODE,
    payload: {
      pomodoroMode: pomodoroMode ?? "pomodoro",
    },
  });
};

export const updateTimerAction = (
  store,
  { totalDuration, timeRemaining, isPressed, isRunning }
) => {
  store.dispatch({
    type: ActionTypes.UPDATE_TIMER,
    payload: {
      totalDuration: totalDuration ?? initialState.totalDuration,
      timeRemaining: timeRemaining ?? initialState.timeRemaining,
      isRunning: isRunning ?? initialState.isRunning,
    },
  });
};

export const startTimerAction = (store, { totalDuration, timeRemaining }) => {
  store.dispatch({
    type: ActionTypes.START,
    payload: {
      totalDuration: totalDuration ?? initialState.totalDuration,
      timeRemaining: timeRemaining ?? initialState.timeRemaining,
    },
  });
};

export const stopTimerAction = (store) => {
  store.dispatch({
    type: ActionTypes.STOP,
  });
};
