import { getStateFromLocalStorage } from "../utils/utils.js";

const initialState = {
  timePomodoro: 25,
  timeShortBreak: 5,
  timeLongBreak: 15,
  font: "--ff-kumbh",
  color: "--clr-purple-400",

  pomodoroMode: "pomodoro",

  sessionTime: 25 * 60, // 25 minutes in seconds
  breakTime: 5 * 60, // 5 minutes in seconds
  isRunning: false,
  isBreak: false,
  intervalId: null,
};

export const ActionTypes = Object.freeze({
  UODATE_MODE: "UODATE_MODE",
  APPLY: "APPLY_SETTINGS",
  START: "START",
  STOP: "STOP",
  RESET: "RESET",
  TOGGLE_BREAK: "TOGGLE_BREAK",
  SET_SESSION_TIME: "SET_SESSION_TIME",
  SET_BREAK_TIME: "SET_BREAK_TIME",
  INIT: "@@INIT",
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.APPLY: {
      const { timePomodoro, timeShortBreak, timeLongBreak, font, color } =
        action.payload;

      return {
        ...state,
        timePomodoro,
        timeShortBreak,
        timeLongBreak,
        font,
        color,
      };
    }
    case ActionTypes.UODATE_MODE: {
      const { pomodoroMode } = action.payload;

      return {
        ...state,
        pomodoroMode,
      };
    }
    case ActionTypes.START:
      return { ...state, isRunning: true };
    case ActionTypes.STOP:
      return { ...state, isRunning: false, intervalId: null };
    case ActionTypes.RESET:
      return {
        ...state,
        sessionTime: state.timePomodoro * 60,
        breakTime: 5 * 60,
        isRunning: false,
      };
    case ActionTypes.TOGGLE_BREAK:
      return { ...state, isBreak: !state.isBreak };
    case ActionTypes.SET_SESSION_TIME:
      return { ...state, sessionTime: action.payload };
    case ActionTypes.SET_BREAK_TIME:
      return { ...state, breakTime: action.payload };

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
  // const listeners = new Set();

  // const proxy = new Proxy(state, {
  //   set(target, prop, value) {
  //     target[prop] = value;
  //     listeners.forEach((listener) => listener(state));
  //     return true;
  //   },
  // });

  const getState = () => Object.freeze(state);

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  // const dispatch = (action) => {
  //   state = reducer(state, action);
  //   proxy[state];
  // };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // const subscribe = (listener) => {
  //   listeners.add(listener);

  //   return () => listeners.delete(listener);
  // };

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
  { timePomodoro, timeShortBreak, timeLongBreak, font, color }
) => {
  store.dispatch({
    type: ActionTypes.APPLY,
    payload: {
      timePomodoro: timePomodoro ?? initialState.timePomodoro,
      timeShortBreak: timeShortBreak ?? initialState.timeShortBreak,
      timeLongBreak: timeLongBreak ?? initialState.timeLongBreak,
      font: font ?? initialState.font,
      color: color ?? initialState.color,
    },
  });
};
