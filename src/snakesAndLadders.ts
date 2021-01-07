export default class SnakesAndLadders {
  private tokenPostion: number = 1;

  public getTokenSquare(): number {
    return this.tokenPostion;
  }

  public rollDice(): number {
    const result = Math.floor(Math.random() * 6) + 1;
    this.moveToken(result);
    return result;
  }

  public moveToken(spaces: number): number {
    this.tokenPostion += spaces;
    return this.tokenPostion;
  }
}