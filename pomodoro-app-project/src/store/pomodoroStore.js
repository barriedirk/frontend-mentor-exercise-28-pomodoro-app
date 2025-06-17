const initialState = {
  time_pomodoro: 50,
  time_short_break: 34,
  time_long_break: 53,

  fs__font: "Space Mono",
  fs__color: "cyan-300",

  sessionTime: 25 * 60, // 25 minutes in seconds
  breakTime: 5 * 60, // 5 minutes in seconds
  isRunning: false,
  isBreak: false,
  intervalId: null,
};

const actionTypes = {
  APPLY: "APPLY",
  START: "START",
  STOP: "STOP",
  RESET: "RESET",
  TOGGLE_BREAK: "TOGGLE_BREAK",
  SET_SESSION_TIME: "SET_SESSION_TIME",
  SET_BREAK_TIME: "SET_BREAK_TIME",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.START:
      return { ...state, isRunning: true };
    case actionTypes.STOP:
      return { ...state, isRunning: false, intervalId: null };
    case actionTypes.RESET:
      return {
        ...state,
        sessionTime: 25 * 60,
        breakTime: 5 * 60,
        isRunning: false,
      };
    case actionTypes.TOGGLE_BREAK:
      return { ...state, isBreak: !state.isBreak };
    case actionTypes.SET_SESSION_TIME:
      return { ...state, sessionTime: action.payload };
    case actionTypes.SET_BREAK_TIME:
      return { ...state, breakTime: action.payload };
    default:
      return state;
  }
}

function createStore(initialState, reducer) {
  let state = initialState;
  const listeners = new Set();

  const proxy = new Proxy(state, {
    set(target, prop, value) {
      target[prop] = value;
      listeners.forEach((listener) => listener(state));
      return true;
    },
  });

  function dispatch(action) {
    state = reducer(state, action);
    proxy[state];
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return { dispatch, subscribe, getState: () => state };
}

const store = createStore(initialState, reducer);

export { store, actionTypes };
