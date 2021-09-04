
# Calculator

## Description

This project is a simple GUI calculator using vanilla JavaScript, CSS, and HTML.
# Motivation

The motivation behind this project was to learn how to implement the JavaScript, CSS, and HTML skills I have learn thus far. Additionally, this project's purpose was to further develop my problem comprehension, planning, and decomposition skills.

# Lessons Learned

Many time wasting refactors went into this project. Some of this was simply a result of learning while implementing. However, some refactors could have been prevented with a better planning and research cycle. 
## Features
* Clickable GUI that is both accessibility compliant and prevents eye strain
* Math operations to include:
    * Addition
    * Subtraction
    * Multiplication
    * Division
* Decimal points
* Backspace to undo last entry
* Clear 
* Able to change math function post entry
* Keyboard Support

## Keyboard Instructions

The following on-screen buttons are mapped to the corresponding keys below:
| On-Screen Button |  Key Mapped |
|:----------------:|:-----------:|
|        0-9       |     0-9     |
|         .        |      .      |
|         ←        |  Backspace  |
|         +        |      +      |
|         -        |      -      |
|         ×        |      *      |
|         ÷        |      /      |
|         =        |  = or Enter |
|         C        | c or Delete |

# Known Bugs and Limitations

* Currently can only support two number entries and a single math function.
* If the user enters a successive number of 9s the number will be rounded.
* When a result is infinity it is cleared on next entry instead of handled. This is to avoid a NaN(not a number) output.
