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

const loadAudio = (src) => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(src);

    audio.addEventListener("canplaythrough", () => resolve(audio), {
      once: true,
    });

    audio.addEventListener("error", (e) => reject(e), { once: true });
  });
};

export const initSounds = async (base) => {
  const [startSound, pauseSound, breakSound, endSound] = await Promise.all([
    loadAudio(`${base}assets/sounds/start.mp3`),
    loadAudio(`${base}assets/sounds/pause.mp3`),
    loadAudio(`${base}assets/sounds/break.mp3`),
    loadAudio(`${base}assets/sounds/end.mp3`),
  ]);

  return {
    startSound,
    pauseSound,
    breakSound,
    endSound,
  };
};

export const playSound = (sounds, type) => {
  if (sounds && sounds[type]) {
    sounds[type].currentTime = 0;
    sounds[type]
      .play()
      .then(() => {
        setTimeout(() => {
          sounds[type].pause();
          sounds[type].currentTime = 0;
        }, 5000);
      })
      .catch((err) => console.warn(`Playback failed: ${err}`));
  }
};
