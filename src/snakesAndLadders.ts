export default class SnakesAndLadders {
  private tokenPostion: number = 1;
  private snakes: Array<Snake> = [];

  constructor() {
    this.snakes.push(new Snake(12, 2));
  }

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
    this.tokenPostion = this.moveDown(this.tokenPostion);
    return this.tokenPostion;
  }

  public hasPlayerWon(): boolean {
    return this.tokenPostion >= 100;
  }

  private moveDown(position: number): number {
    let snake = this.snakes.filter(s => {
      return s.getInitialPosition() === position
    });
    return snake.length ? snake[0].getFinalPosition() : position; 
  }
}

class Snake {
  private initialPosition: number;
  private finalPosition: number;

  constructor(initialPosition: number, finalPosition: number) {
    this.initialPosition = initialPosition;
    this.finalPosition = finalPosition;
  }

  getInitialPosition(): number {
    return this.initialPosition;
  }

  getFinalPosition(): number {
    return this.finalPosition;
  }
}