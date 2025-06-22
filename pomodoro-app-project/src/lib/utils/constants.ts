export const POMODORO_VALUES: Record<string, string> = {
  POMODORO: "pomodoro",
  SHORT_BREAK: "short-break",
  LONG_BREAK: "long-break",
};

export const POMODORO_MODE: Record<string, { time: string }> = {
  pomodoro: { time: "timePomodoro" },
  "short-break": { time: "timeShortBreak" },
  "long-break": { time: "timeLongBreak" },
};

export const POMODORO_MAX_INTERVAL = 4;

export const SOUNDS: Record<string, string> = {
  START: "startSound",
  PAUSE: "pauseSound",
  BREAK: "breakSound",
  END: "endSound",
};
