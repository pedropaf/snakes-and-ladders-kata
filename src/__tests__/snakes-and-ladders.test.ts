import SnakesAndLadders from "../snakesAndLadders";

describe('Snakes and Ladders', () => {
  describe('Token Can Move Across the Board', () => {
    let snakesAndLadders: SnakesAndLadders;
    
    beforeEach(() => {
      snakesAndLadders = new SnakesAndLadders();
    });
    
  it('Given the game is started, when the token is placed on the board, then the token is on square 1', () => {
      expect(snakesAndLadders.getTokenSquare()).toBe(1);
    });

  it('Given the token is on square 1, When the token is moved 3 spaces, Then the token is on square 4', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.433);
      snakesAndLadders.rollDice();
      expect(snakesAndLadders.getTokenSquare()).toBe(4);
    });

  })
});