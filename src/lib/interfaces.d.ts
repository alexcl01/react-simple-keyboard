
export interface KeyboardReactInterface extends SimpleKeyboard {
    options: SimpleKeyboard["options"] & {
      // eslint-disable-next-line no-unused-vars
      keyboardRef?: (r: any) => void;
    };
  }  

export interface SimpleKeyboard {
        input: KeyboardInput;
        options: KeyboardOptions;
        utilities: Utilities;
        caretPosition: number | null;
        caretPositionEnd: number | null;
        keyboardDOM: KeyboardElement;
        keyboardPluginClasses: string;
        keyboardDOMClass: string;
        buttonElements: KeyboardButtonElements;
        currentInstanceName: string;
        allKeyboardInstances: {
                [key: string]: SimpleKeyboard;
        };
        keyboardInstanceNames: string[];
        isFirstKeyboardInstance: boolean;
        physicalKeyboard: PhysicalKeyboard;
        modules: {
                [key: string]: any;
        };
        activeButtonClass: string;
        holdInteractionTimeout: number;
        holdTimeout: number;
        isMouseHold: boolean;
        initialized: boolean;
        candidateBox: CandidateBox | null;
        keyboardRowsDOM: KeyboardElement;
        defaultName: string;
        activeInputElement: HTMLInputElement | HTMLTextAreaElement | null;
        /**
            * Creates an instance of SimpleKeyboard
            * @param {Array} params If first parameter is a string, it is considered the container class. The second parameter is then considered the options object. If first parameter is an object, it is considered the options object.
            */
        constructor: (selectorOrOptions?: string | HTMLDivElement | KeyboardOptions, keyboardOptions?: KeyboardOptions) => any
        /**
            * parseParams
            */
        handleParams: (selectorOrOptions?: string | HTMLDivElement | KeyboardOptions, keyboardOptions?: KeyboardOptions) => {
                keyboardDOMClass: string;
                keyboardDOM: KeyboardElement;
                options: Partial<KeyboardOptions | undefined>;
        };
        /**
            * Getters
            */
        getOptions: () => KeyboardOptions;
        getCaretPosition: () => number | null;
        getCaretPositionEnd: () => number | null;
        /**
            * Changes the internal caret position
            * @param {number} position The caret's start position
            * @param {number} positionEnd The caret's end position
            */
        setCaretPosition(position: number | null, endPosition?: number | null): void;
        /**
            * Retrieve the candidates for a given input
            * @param input The input string to check
            */
        getInputCandidates(input: string): {
                candidateKey: string;
                candidateValue: string;
        } | Record<string, never>;
        /**
            * Shows a suggestion box with a list of candidate words
            * @param candidates The chosen candidates string as defined in the layoutCandidates option
            * @param targetElement The element next to which the candidates box will be shown
            */
        showCandidatesBox(candidateKey: string, candidateValue: string, targetElement: KeyboardElement): void;
        /**
            * Handles clicks made to keyboard buttons
            * @param  {string} button The button's layout name.
            */
        handleButtonClicked(button: string, e?: KeyboardHandlerEvent): void;
        /**
            * Get mouse hold state
            */
        getMouseHold(): boolean;
        /**
            * Mark mouse hold state as set
            */
        setMouseHold(value: boolean): void;
        /**
            * Handles button mousedown
            */
        handleButtonMouseDown(button: string, e: KeyboardHandlerEvent): void;
        /**
            * Handles button mouseup
            */
        handleButtonMouseUp(button?: string, e?: KeyboardHandlerEvent): void;
        /**
            * Handles container mousedown
            */
        handleKeyboardContainerMouseDown(e: KeyboardHandlerEvent): void;
        /**
            * Handles button hold
            */
        handleButtonHold(button: string): void;
        /**
            * Send a command to all simple-keyboard instances (if you have several instances).
            */
        syncInstanceInputs(): void;
        /**
            * Clear the keyboard’s input.
            * @param {string} [inputName] optional - the internal input to select
            */
        clearInput(inputName?: string): void;
        /**
            * Get the keyboard’s input (You can also get it from the onChange prop).
            * @param  {string} [inputName] optional - the internal input to select
            */
        getInput(inputName?: string, skipSync?: boolean): string;
        /**
            * Get all simple-keyboard inputs
            */
        getAllInputs(): KeyboardInput;
        /**
            * Set the keyboard’s input.
            * @param  {string} input the input value
            * @param  {string} inputName optional - the internal input to select
            */
        setInput(input: string, inputName?: string, skipSync?: boolean): void;
        /**
            * Replace the input object (`keyboard.input`)
            * @param  {object} inputObj The input object
            */
        replaceInput(inputObj: KeyboardInput): void;
        /**
            * Set new option or modify existing ones after initialization.
            * @param  {object} options The options to set
            */
        setOptions(options?: {}): void;
        /**
            * Detecting changes to non-function options
            * This allows us to ascertain whether a button re-render is needed
            */
        changedOptions(newOptions: Partial<KeyboardOptions>): string[];
        /**
            * Executing actions depending on changed options
            * @param  {object} options The options to set
            */
        onSetOptions(changedOptions?: string[]): void;
        /**
            * Remove all keyboard rows and reset keyboard values.
            * Used internally between re-renders.
            */
        resetRows(): void;
        /**
            * Send a command to all simple-keyboard instances at once (if you have multiple instances).
            * @param  {function(instance: object, key: string)} callback Function to run on every instance
            */
        dispatch(callback: (instance: SimpleKeyboard, key?: string) => void): void;
        /**
            * Adds/Modifies an entry to the `buttonTheme`. Basically a way to add a class to a button.
            * @param  {string} buttons List of buttons to select (separated by a space).
            * @param  {string} className Classes to give to the selected buttons (separated by space).
            */
        addButtonTheme(buttons: string, className: string): void;
        /**
            * Removes/Amends an entry to the `buttonTheme`. Basically a way to remove a class previously added to a button through buttonTheme or addButtonTheme.
            * @param  {string} buttons List of buttons to select (separated by a space).
            * @param  {string} className Classes to give to the selected buttons (separated by space).
            */
        removeButtonTheme(buttons: string, className: string): void;
        /**
            * Get the DOM Element of a button. If there are several buttons with the same name, an array of the DOM Elements is returned.
            * @param  {string} button The button layout name to select
            */
        getButtonElement(button: string): KeyboardElement | KeyboardElement[] | undefined;
        /**
            * This handles the "inputPattern" option
            * by checking if the provided inputPattern passes
            */
        inputPatternIsValid(inputVal: string): boolean;
        /**
            * Handles simple-keyboard event listeners
            */
        setEventListeners(): void;
        /**
            * Event Handler: KeyUp
            */
        handleKeyUp(event: KeyboardHandlerEvent): void;
        /**
            * Event Handler: KeyDown
            */
        handleKeyDown(event: KeyboardHandlerEvent): void;
        /**
            * Event Handler: MouseUp
            */
        handleMouseUp(event: KeyboardHandlerEvent): void;
        /**
            * Event Handler: TouchEnd
            */
        handleTouchEnd(event: KeyboardHandlerEvent): void;
        /**
            * Event Handler: Select
            */
        handleSelect(event: KeyboardHandlerEvent): void;
        /**
            * Event Handler: SelectionChange
            */
        handleSelectionChange(event: KeyboardHandlerEvent): void;
        /**
            * Called by {@link setEventListeners} when an event that warrants a cursor position update is triggered
            */
        caretEventHandler(event: KeyboardHandlerEvent): void;
        /**
            * Execute an operation on each button
            */
        recurseButtons(fn: any): void;
        /**
            * Destroy keyboard listeners and DOM elements
            */
        destroy(): void;
        /**
            * Process buttonTheme option
            */
        getButtonThemeClasses(button: string): string[];
        /**
            * Process buttonAttributes option
            */
        setDOMButtonAttributes(button: string, callback: any): void;
        onTouchDeviceDetected(): void;
        /**
            * Disabling contextual window for hg-button
            */
        disableContextualWindow(): void;
        /**
            * Process autoTouchEvents option
            */
        processAutoTouchEvents(): void;
        /**
            * Executes the callback function once simple-keyboard is rendered for the first time (on initialization).
            */
        onInit(): void;
        /**
            * Executes the callback function before a simple-keyboard render.
            */
        beforeFirstRender(): void;
        /**
            * Executes the callback function before a simple-keyboard render.
            */
        beforeRender(): void;
        /**
            * Executes the callback function every time simple-keyboard is rendered (e.g: when you change layouts).
            */
        onRender(): void;
        /**
            * Executes the callback function once all modules have been loaded
            */
        onModulesLoaded(): void;
        /**
            * Register module
            */
        registerModule: (name: string, initCallback: any) => void;
        /**
            * Load modules
            */
        loadModules(): void;
        /**
            * Get module prop
            */
        getModuleProp(name: string, prop: string): any;
        /**
            * getModulesList
            */
        getModulesList(): string[];
        /**
            * Parse Row DOM containers
            */
        parseRowDOMContainers(rowDOM: HTMLDivElement, rowIndex: number, containerStartIndexes: number[], containerEndIndexes: number[]): HTMLDivElement;
        /**
            * getKeyboardClassString
            */
        getKeyboardClassString: (...baseDOMClasses: any[]) => string;
        /**
            * Renders rows and buttons as per options
            */
        render(): void;
}
/**
    * Physical Keyboard Service
    */
export interface PhysicalKeyboard {
        getOptions: () => KeyboardOptions;
        dispatch: any;
        /**
            * Creates an instance of the PhysicalKeyboard service
            */
        constructor: ({ dispatch, getOptions }: PhysicalKeyboardParams) => any
        handleHighlightKeyDown(e: KeyboardEvent): void;
        handleHighlightKeyUp(e: KeyboardEvent): void;
        /**
            * Transforms a KeyboardEvent's "key.code" string into a simple-keyboard layout format
            * @param  {object} e The KeyboardEvent
            */
        getSimpleKeyboardLayoutKey(e: KeyboardEvent): string;
        /**
            * Retrieve key from keyCode
            */
        keyCodeToKey(keyCode: number): string;
        isMofifierKey: (e: KeyboardEvent) => boolean;
}
/**
    * Utility Service
    */
export interface Utilities {
        getOptions: () => KeyboardOptions;
        getCaretPosition: () => number | null;
        getCaretPositionEnd: () => number | null;
        dispatch: any;
        maxLengthReached: boolean;
        /**
            * Creates an instance of the Utility service
            */
        constructor: ({ getOptions, getCaretPosition, getCaretPositionEnd, dispatch, }: UtilitiesParams) => any
        /**
            * Retrieve button type
            *
            * @param  {string} button The button's layout name
            * @return {string} The button type
            */
        getButtonType(button: string): string;
        /**
            * Adds default classes to a given button
            *
            * @param  {string} button The button's layout name
            * @return {string} The classes to be added to the button
            */
        getButtonClass(button: string): string;
        /**
            * Default button display labels
            */
        getDefaultDiplay(): {
                "{bksp}": string;
                "{backspace}": string;
                "{enter}": string;
                "{shift}": string;
                "{shiftleft}": string;
                "{shiftright}": string;
                "{alt}": string;
                "{s}": string;
                "{tab}": string;
                "{lock}": string;
                "{capslock}": string;
                "{accept}": string;
                "{space}": string;
                "{//}": string;
                "{esc}": string;
                "{escape}": string;
                "{f1}": string;
                "{f2}": string;
                "{f3}": string;
                "{f4}": string;
                "{f5}": string;
                "{f6}": string;
                "{f7}": string;
                "{f8}": string;
                "{f9}": string;
                "{f10}": string;
                "{f11}": string;
                "{f12}": string;
                "{numpaddivide}": string;
                "{numlock}": string;
                "{arrowup}": string;
                "{arrowleft}": string;
                "{arrowdown}": string;
                "{arrowright}": string;
                "{prtscr}": string;
                "{scrolllock}": string;
                "{pause}": string;
                "{insert}": string;
                "{home}": string;
                "{pageup}": string;
                "{delete}": string;
                "{forwarddelete}": string;
                "{end}": string;
                "{pagedown}": string;
                "{numpadmultiply}": string;
                "{numpadsubtract}": string;
                "{numpadadd}": string;
                "{numpadenter}": string;
                "{period}": string;
                "{numpaddecimal}": string;
                "{numpad0}": string;
                "{numpad1}": string;
                "{numpad2}": string;
                "{numpad3}": string;
                "{numpad4}": string;
                "{numpad5}": string;
                "{numpad6}": string;
                "{numpad7}": string;
                "{numpad8}": string;
                "{numpad9}": string;
        };
        /**
            * Returns the display (label) name for a given button
            *
            * @param  {string} button The button's layout name
            * @param  {object} display The provided display option
            * @param  {boolean} mergeDisplay Whether the provided param value should be merged with the default one.
            */
        getButtonDisplayName(button: string, display: KeyboardOptions["display"], mergeDisplay?: boolean): string;
        /**
            * Returns the updated input resulting from clicking a given button
            *
            * @param  {string} button The button's layout name
            * @param  {string} input The input string
            * @param  {number} caretPos The cursor's current position
            * @param  {number} caretPosEnd The cursor's current end position
            * @param  {boolean} moveCaret Whether to update simple-keyboard's cursor
            */
        getUpdatedInput(button: string, input: string, caretPos: any, caretPosEnd?: any, moveCaret?: boolean): string;
        /**
            * Moves the cursor position by a given amount
            *
            * @param  {number} length Represents by how many characters the input should be moved
            * @param  {boolean} minus Whether the cursor should be moved to the left or not.
            */
        updateCaretPos(length: number, minus?: boolean): void;
        /**
            * Action method of updateCaretPos
            *
            * @param  {number} length Represents by how many characters the input should be moved
            * @param  {boolean} minus Whether the cursor should be moved to the left or not.
            */
        updateCaretPosAction(length: number, minus?: boolean): number | null;
        /**
            * Adds a string to the input at a given position
            *
            * @param  {string} source The source input
            * @param  {string} str The string to add
            * @param  {number} position The (cursor) position where the string should be added
            * @param  {boolean} moveCaret Whether to update simple-keyboard's cursor
            */
        addStringAt(source: string, str: string, position?: number, positionEnd?: number, moveCaret?: boolean): string;
        /**
            * Check whether the button is a standard button
            */
        isStandardButton: (button: string) => boolean | "";
        /**
            * Removes an amount of characters before a given position
            *
            * @param  {string} source The source input
            * @param  {number} position The (cursor) position from where the characters should be removed
            * @param  {boolean} moveCaret Whether to update simple-keyboard's cursor
            */
        removeAt(source: string, position?: number, positionEnd?: number, moveCaret?: boolean): string;
        /**
            * Removes an amount of characters after a given position
            *
            * @param  {string} source The source input
            * @param  {number} position The (cursor) position from where the characters should be removed
            */
        removeForwardsAt(source: string, position?: number, positionEnd?: number, moveCaret?: boolean): string;
        /**
            * Determines whether the maxLength has been reached. This function is called when the maxLength option it set.
            *
            * @param  {object} inputObj
            * @param  {string} updatedInput
            */
        handleMaxLength(inputObj: KeyboardInput, updatedInput: string): boolean | undefined;
        /**
            * Gets the current value of maxLengthReached
            */
        isMaxLengthReached(): boolean;
        /**
            * Determines whether a touch device is being used
            */
        isTouchDevice(): number | true;
        /**
            * Determines whether pointer events are supported
            */
        pointerEventsSupported(): boolean;
        /**
            * Bind all methods in a given class
            */
        /**
            * Transforms an arbitrary string to camelCase
            *
            * @param  {string} str The string to transform.
            */
        camelCase(str: string): string;
        /**
            * Split array into chunks
            */
        chunkArray<T>(arr: T[], size: number): T[][];
        /**
            * Escape regex input
            */
        escapeRegex(str: string): string;
        /**
            * Calculate caret position offset when using rtl option
            */
        getRtlOffset(index: number, input: string): number;
        /**
            * Reusable empty function
            */
}
export interface KeyboardLayoutObject {
        [key: string]: string[];
}
export type KeyboardButtonTheme = {
        class: string;
        buttons: string;
} | null;
export interface KeyboardButtonAttributes {
        attribute: string;
        value: string;
        buttons: string;
}
export interface KeyboardInput {
        [key: string]: string;
}
export type CandidateBoxParams = {
        utilities: Utilities;
        options: KeyboardOptions;
};
export type CandidateBoxShowParams = {
        candidateValue: string;
        targetElement: KeyboardElement;
        onSelect: (selectedCandidate: string, e: MouseEvent) => void;
};
export type CandidateBoxRenderParams = {
        candidateListPages: string[][];
        targetElement: KeyboardElement;
        pageIndex: number;
        nbPages: number;
        onItemSelected: (selectedCandidate: string, e: MouseEvent) => void;
};
export type KeyboardElement = HTMLDivElement | HTMLButtonElement;
export type KeyboardHandlerEvent = any;
export interface KeyboardButtonElements {
        [key: string]: KeyboardElement[];
}
export interface UtilitiesParams {
        getOptions: () => KeyboardOptions;
        getCaretPosition: () => number | null;
        getCaretPositionEnd: () => number | null;
        dispatch: any;
}
export interface PhysicalKeyboardParams {
        getOptions: () => KeyboardOptions;
        dispatch: any;
}
export interface KeyboardOptions {
        /**
            * Modify the keyboard layout.
            */
        layout?: KeyboardLayoutObject;
        /**
            * Specifies which layout should be used.
            */
        layoutName?: string;
        /**
            * Replaces variable buttons (such as `{bksp}`) with a human-friendly name (e.g.: `backspace`).
            */
        display?: {
                [button: string]: string;
        };
        /**
            * By default, when you set the display property, you replace the default one. This setting merges them instead.
            */
        mergeDisplay?: boolean;
        /**
            * A prop to add your own css classes to the keyboard wrapper. You can add multiple classes separated by a space.
            */
        theme?: string;
        /**
            * A prop to add your own css classes to one or several buttons.
            */
        buttonTheme?: KeyboardButtonTheme[];
        /**
            * A prop to add your own attributes to one or several buttons.
            */
        buttonAttributes?: KeyboardButtonAttributes[];
        /**
            * Runs a `console.log` every time a key is pressed. Displays the buttons pressed and the current input.
            */
        debug?: boolean;
        /**
            * Specifies whether clicking the "ENTER" button will input a newline (`\n`) or not.
            */
        newLineOnEnter?: boolean;
        /**
            * Specifies whether clicking the "TAB" button will input a tab character (`\t`) or not.
            */
        tabCharOnTab?: boolean;
        /**
            * Allows you to use a single simple-keyboard instance for several inputs.
            */
        inputName?: string;
        /**
            * `number`: Restrains all of simple-keyboard inputs to a certain length. This should be used in addition to the input element’s maxlengthattribute.
            *
            * `{ [inputName: string]: number }`: Restrains simple-keyboard’s individual inputs to a certain length. This should be used in addition to the input element’s maxlengthattribute.
            */
        maxLength?: any;
        /**
            * When set to true, this option synchronizes the internal input of every simple-keyboard instance.
            */
        syncInstanceInputs?: boolean;
        /**
            * Enable highlighting of keys pressed on physical keyboard.
            */
        physicalKeyboardHighlight?: boolean;
        /**
            * Calls handler for a button highlighted by physicalKeyboardHighlight
            * In other words, this calls keyboard.handleButtonClicked(buttonName) on the highlighted button
            */
        physicalKeyboardHighlightPress?: boolean;
        /**
            * Trigger click on a button's element when using physicalKeyboardHighlightPress
            * In other words, this calls button.click() on the highlighted button
            */
        physicalKeyboardHighlightPressUseClick?: boolean;
        /**
            * Whether physicalKeyboardHighlightPress should use pointer events to trigger buttons.
            */
        physicalKeyboardHighlightPressUsePointerEvents?: boolean;
        /**
            * Define the text color that the physical keyboard highlighted key should have.
            */
        physicalKeyboardHighlightTextColor?: string;
        /**
            * Define the background color that the physical keyboard highlighted key should have.
            */
        physicalKeyboardHighlightBgColor?: string;
        /**
            * Whether physicalKeyboardHighlight should use preventDefault to disable default browser actions.
            */
        physicalKeyboardHighlightPreventDefault?: boolean;
        /**
            * Calling preventDefault for the mousedown events keeps the focus on the input.
            */
        preventMouseDownDefault?: boolean;
        /**
            * Calling preventDefault for the mouseup events.
            */
        preventMouseUpDefault?: boolean;
        /**
            * Stops pointer down events on simple-keyboard buttons from bubbling to parent elements.
            */
        stopMouseDownPropagation?: boolean;
        /**
            * Stops pointer up events on simple-keyboard buttons from bubbling to parent elements.
            */
        stopMouseUpPropagation?: boolean;
        /**
            * Render buttons as a button element instead of a div element.
            */
        useButtonTag?: boolean;
        /**
            * A prop to ensure characters are always be added/removed at the end of the string.
            */
        disableCaretPositioning?: boolean;
        /**
            * Restrains input(s) change to the defined regular expression pattern.
            */
        inputPattern?: any;
        /**
            * Instructs simple-keyboard to use touch events instead of click events.
            */
        useTouchEvents?: boolean;
        /**
            * Enable useTouchEvents automatically when touch device is detected.
            */
        autoUseTouchEvents?: boolean;
        /**
            * Opt out of PointerEvents handling, falling back to the prior mouse event logic.
            */
        useMouseEvents?: boolean;
        /**
            * Disable button hold action.
            */
        disableButtonHold?: boolean;
        /**
            * Adds unicode right-to-left control characters to input return values.
            */
        rtl?: boolean;
        /**
            * Enable input method editor candidate list support.
            */
        enableLayoutCandidates?: boolean;
        /**
            * Character suggestions to be shown on certain key presses
            */
        layoutCandidates?: {
                [key: string]: string;
        };
        /**
            * Exclude buttons from layout
            */
        excludeFromLayout?: {
                [key: string]: string[];
        };
        /**
            * Determines size of layout candidate list
            */
        layoutCandidatesPageSize?: number;
        /**
            * Determines whether layout candidate match should be case sensitive.
            */
        layoutCandidatesCaseSensitiveMatch?: boolean;
        /**
            * Disables the automatic normalization for selected layout candidates
            */
        disableCandidateNormalization?: boolean;
        /**
            * Enables onKeyPress triggering for layoutCandidate items
            */
        enableLayoutCandidatesKeyPress?: boolean;
        /**
            * Executes the callback function every time simple-keyboard is rendered (e.g: when you change layouts).
            */
        onRender?: (instance?: SimpleKeyboard) => void;
        /**
            * Executes the callback function once simple-keyboard is rendered for the first time (on initialization).
            */
        onInit?: (instance?: SimpleKeyboard) => void;
        /**
            * Retrieves the current input
            */
        onChange?: (input: string, e?: MouseEvent) => any;
        /**
            * Retrieves all inputs
            */
        onChangeAll?: (inputObj: KeyboardInput, e?: MouseEvent) => any;
        /**
            * Retrieves the pressed key
            */
        onKeyPress?: (button: string, e?: MouseEvent) => any;
        /**
            * Retrieves the released key
            */
        onKeyReleased?: (button: string, e?: MouseEvent) => any;
        /**
            * Module options can have any format
            */
        [name: string]: any;
}
export interface CandidateBox {
    utilities: Utilities;
    options: KeyboardOptions;
    candidateBoxElement: HTMLDivElement;
    pageIndex: number;
    pageSize: number;
    constructor: ({ utilities, options }: CandidateBoxParams) => any
    destroy(): void;
    show({ candidateValue, targetElement, onSelect, }: CandidateBoxShowParams): void;
    renderPage({ candidateListPages, targetElement, pageIndex, nbPages, onItemSelected, }: CandidateBoxRenderParams): void;
}
