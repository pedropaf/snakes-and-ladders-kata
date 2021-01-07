import SnakesAndLadders from "../snakesAndLadders";

describe('snakes and laddres', () => {
  describe('Token Can Move Across the Board', () => {
    it('Given the game is started, when the token is placed on the board, then the token is on square 1', () => {
      let snakesAndLadders: SnakesAndLadders = new SnakesAndLadders();
      expect(snakesAndLadders.getTokenSquare()).toBe(1);
    });
  })
});