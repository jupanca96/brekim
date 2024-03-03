module.exports = {
  rules: {
    /**
     * * Endrock Rules
     */
    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ["error", "always", { null: "ignore" }],
    // make sure for-in loops have an if statement
    // https://eslint.org/docs/rules/guard-for-in
    "guard-for-in": "error",
    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    "max-classes-per-file": ["error", 1],
    // disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    "no-alert": "warn",
    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],
    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "error",
    // disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    "no-global-assign": ["error", { exceptions: ["Object"] }],
    // deprecated in favor of no-global-assign
    // https://eslint.org/docs/rules/no-native-reassign
    "no-native-reassign": "off",
    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": [
      "off",
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],
    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": "error",
    // disallow creation of functions within loops
    // https://eslint.org/docs/rules/no-loop-func
    "no-loop-func": "error",
    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    "no-magic-numbers": [
      "off",
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    // disallow use of multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: false,
      },
    ],
    // disallow declaring the same variable more than once
    // https://eslint.org/docs/rules/no-redeclare
    "no-redeclare": "error",
    // disallow redundant `return await`
    // https://eslint.org/docs/rules/no-return-await
    "no-return-await": "error",
    // disallow use of `javascript:` urls.
    // https://eslint.org/docs/rules/no-script-url
    "no-script-url": "error",
    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    "no-useless-catch": "error",
    // disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "error",
    // disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    "no-useless-return": "error",
    // require use of the second argument for parseInt()
    // https://eslint.org/docs/rules/radix
    radix: "error",
    // require or disallow Yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: "error",

    /**
     * * Variables Rules
     */
    // Requires let or const instead of var.
    // https://eslint.org/docs/rules/no-var
    "no-var": "error",

    // disallow deletion of variables
    // https://eslint.org/docs/rules/no-delete-var
    "no-delete-var": "error",

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",

    // disallow shadowing of names such as arguments
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow-restricted-names": "error",

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // https://eslint.org/docs/rules/no-undef-init
    "no-undef": "error",

    // disallow use of undefined when initializing variables
    // https://eslint.org/docs/rules/no-undef-init
    "no-undef-init": "error",

    // disallow declaration of variables that are not used in the code
    // https://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],

    // disallow use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],

    /**
     * * Semantic Rules
     */

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    "switch-colon-spacing": ["error", { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    "template-tag-spacing": ["error", "never"],

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    "unicode-bom": ["error", "never"],

    // require regex literals to be wrapped in parentheses
    "wrap-regex": "off",
    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    "no-bitwise": "error",

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    "no-continue": "error",

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "error",

    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": [
      "error",
      {
        // the list of arithmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          ["&", "|", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!=="],
          ["&&", "||"],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow mixed spaces and tabs for indentation
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-mixed-spaces-and-tabs": "error",

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    "no-multi-assign": ["error"],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": "error",

    // disallow use of the Object constructor
    // https://eslint.org/docs/rules/no-new-object
    "no-new-object": "error",

    // disallow trailing whitespace at the end of lines
    // https://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
  },
};
