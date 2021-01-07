import SnakesAndLadders from "../snakesAndLadders";

describe('Snakes and Ladders', () => {
  let snakesAndLadders: SnakesAndLadders;

  beforeEach(() => {
    snakesAndLadders = new SnakesAndLadders();
  });

  describe('Token Can Move Across the Board', () => {
    it('Given the game is started, when the token is placed on the board, then the token is on square 1', () => {
      expect(snakesAndLadders.getTokenSquare()).toBe(1);
    });

  it('Given the token is on square 1, When the token is moved 3 spaces, Then the token is on square 4', () => {
      snakesAndLadders.moveToken(3);
      expect(snakesAndLadders.getTokenSquare()).toBe(4);
    });

    it('Given the token is on square 1, When the token is moved 3 spaces, And then it is moved 4 spaces, Then the token is on square 8', () => {
      snakesAndLadders.moveToken(3);
      snakesAndLadders.moveToken(4);
      expect(snakesAndLadders.getTokenSquare()).toBe(8);
    });
  });

  describe('Moves Are Determined By Dice Rolls', () => {

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
    });

  it ('Given the game is started, When the player rolls a die, Then the result should be between 1-6 inclusive', () => {
      const rollDiceResult = snakesAndLadders.rollDice();
      expect(rollDiceResult).toBeGreaterThanOrEqual(1);
      expect(rollDiceResult).toBeLessThanOrEqual(6);
    });

  it ('Given the player rolls a 4, When they move their token, Then the token should move 4 spaces', () => {
      const moveTokenSpy = jest.spyOn(snakesAndLadders, 'moveToken');

      // Force rollDice to return 4.
      jest.spyOn(global.Math, 'random').mockReturnValue(3.99/6);
      snakesAndLadders.rollDice();

      expect(moveTokenSpy).toBeCalledWith(4);
    });

  });
});