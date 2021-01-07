export default class SnakesAndLadders {
  private tokenPostion: number = 1;

  public getTokenSquare(): number {
    return this.tokenPostion;
  }

  public rollDice(): void {
    this.tokenPostion += Math.floor(Math.random() * 6) + 1;
  }
}