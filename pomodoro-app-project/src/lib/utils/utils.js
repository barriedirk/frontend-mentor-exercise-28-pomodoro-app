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

export const setAccesibilityRadio = (
  selectorInputRadio,
  selectorInputLabel
) => {
  document.querySelectorAll(selectorInputRadio).forEach((input) => {
    input.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();

        input.checked = true;
      }
    });
  });

  document.querySelectorAll(selectorInputLabel).forEach((label) => {
    label.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();

        const inputId = label.getAttribute("for");
        if (!inputId) return;

        const input = document.getElementById(inputId);

        if (input) {
          input.checked = true;
          input.focus();
        }
      }
    });
  });
};

export const setInputValue = (selector, type, value) => {
  const inputEl = document.querySelector(selector);

  if (inputEl) {
    if (type === "value") {
      inputEl.value = value;
    } else if (type === "checked") {
      inputEl.checked = value;
    }
  }
};

export const onlyInputNumberAllowed = (selectorInputs) => {
  document.querySelectorAll(selectorInputs).forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^\d]/g, "");
    });
  });
};
