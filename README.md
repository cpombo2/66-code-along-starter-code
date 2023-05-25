# 6.6 Code Along: Array .push and .length

## Let's Make a Guest List!

### Code Along
We have an empty array outside the click handler that will hold the guest names as they are entered.

Inside the click hander, we are already using `.value` to store the name from the `input` (called `guestInput`) into a variable.

1. Under line 7, add each new name to the end of the `guests` array using `.push()`.

2. Add a `console.log` to double check that the name is being added to the array.

3. Display each name on the page as an `li` in the `ul` using `.insertAdjacentHTML`.

4. Add a `console.log` to check the length of the array as we add to it.