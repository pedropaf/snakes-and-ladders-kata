# Snakes and Ladders Kata

This repo's purpose is to start the implementation of [Snakes and Laddres Kata](http://agilekatas.co.uk/katas/SnakesAndLadders-Kata) using TDD, Typescript with Jest as the testrunner.

- `./src/snakesAndLadders.ts` is the implementation of the game.
- `./src/__tests__/snakesAndLadders.test.ts` is the test suite.

After cloning the repo, run `npm install` to install dependencies.

Use `npm test` to start Jest in watch mode

In this exercise I'm assumming: 
1. When the user reaches a token position of 100 or higher, he has won the game. As from the feature 1 it looks like when a user is in square 100 or 101, he wins.
2. I'm not validating if 2 snakes are defined using the same initial position.
3. I'm not checking if a snake and a ladder are added at the same time with the same initial position.

Feature 2: Snakes go down, Ladders go up can be refactored as there's repetition in the moveUp / moveDown functions, and probably I could test the constructors as well where I validate the direction of initial and final positions, but I'm not implementing this due to the time constraint for the exercise.