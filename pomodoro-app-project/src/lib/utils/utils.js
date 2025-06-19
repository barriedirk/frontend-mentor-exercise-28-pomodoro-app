const KEY_ITEM = "state_pomodoro";

export const getStateFromLocalStorage = () => {
  try {
    const item = localStorage.getItem(KEY_ITEM);

    if (item === null) return null;

    return JSON.parse(item);
  } catch (error) {
    console.error("Failed to read from localStorage:", error);

    return null;
  }
};

export const setStateToLocalStorage = (state) => {
  try {
    localStorage.setItem(KEY_ITEM, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save to localStorage:", error);
  }
};
