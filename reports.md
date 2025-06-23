Generate a new report to resolve errors and warnings.
Reports are only visible to you
aria-allowed-role
(3 occurrences)
warning

ARIA role should be appropriate for the element

<label id="label-pomodoro" for="f-option-pomodoro" class="flex justify-center items-center" tabindex ...


Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
no-inline-style
(3 occurrences)
error

Inline style is not allowed

<body class="flex flex-col fade-in" style="--clr-pomodoro: var(--clr-purple-400); --ff-pomodoro: var ...

Learn more
wcag/h32
(1 occurrence)
error
<form> element must have a submit button

<form id="f-pomodoro-mode" class="pomodoro__options w-full flex flex-row justify-center items-center ...

Learn more
prefer-native-element
(3 occurrences)
error

Prefer to use the native <input> element

<label id="label-pomodoro" for="f-option-pomodoro" class="flex justify-center items-center" tabindex ...

Learn more
aria-label-misuse
(1 occurrence)
error

"aria-label" cannot be used on this element

<svg class="w-[18px] h-[18px]" aria-label="Reset Pomodoro" data-astro-cid-h75oeh72="">

Learn more
element-name
(1 occurrence)
error
<dialog> is not a valid element name

<dialog id="modal-dialog" aria-modal="true" role="dialog" class="modal-dialog settings-dialog relati ...

Learn more
element-required-attributes
(1 occurrence)
error

<button> is missing required "type" attribute

<button id="btnCloseDialog" class="form-settings__close" aria-label="Close settings dialog" data-ast ...


Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
frontend-mentor/no-fixed
(1 occurrence)
warning

Avoid position: fixed as it can cause content to be cut off when zoomed, creating accessibility issues for users who need to enlarge content.

position: fixed;

pomodoro-app-project/src/styles/global.css:36
Learn more
frontend-mentor/prefers-reduced-motion
(2 occurrences)
warning

Provide alternatives for users who prefer reduced motion to prevent motion sickness and other accessibility issues.

transition: opacity 1s ease-in-out;

pomodoro-app-project/src/styles/global.css:15
Learn more
declaration-property-unit-disallowed-list
(2 occurrences)
warning

Consider using relative units (em, rem) instead of absolute units (px, pt) to support resizing and improve accessibility.

max-width: 620px;

pomodoro-app-project/src/styles/global.css:40
Learn more
frontend-mentor/encourage-css-functions
(1 occurrence)
info

Consider using CSS functions like calc(), min(), and clamp() to create more responsive and flexible layouts that adapt to different viewport sizes.

padding: 0.5rem;

pomodoro-app-project/src/styles/global.css:64
Learn more
frontend-mentor/encourage-css-variables
(1 occurrence)
info

Use CSS custom properties (variables) to centralize values, improve consistency, and make site-wide changes easier to implement.

background-color: rgba(0, 0, 0, 0.2);

pomodoro-app-project/src/styles/global.css:57



Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
no-undef
(1 occurrence)
error

Don't use undefined variables - declare them first

console.error("Failed to save to localStorage:", error);

pomodoro-app-project/src/lib/utils/utils.js:21
Learn more
prefer-const
(1 occurrence)
warning

Use const for variables that are never reassigned

let newState = getStateFromLocalStorage() ?? structuredClone(state);

pomodoro-app-project/src/lib/store/pomodoroRedux.js:114
Learn more
no-shadow
(9 occurrences)
warning

Don't declare variables that hide outer variables with the same name

export function createStore(reducer) {

pomodoro-app-project/src/lib/store/pomodoroRedux.js:126
Learn more
no-unused-vars
(2 occurrences)
warning

Remove variables that are declared but never used

{ totalDuration, timeRemaining, isPressed, isRunning }

pomodoro-app-project/src/lib/store/pomodoroRedux.js:186