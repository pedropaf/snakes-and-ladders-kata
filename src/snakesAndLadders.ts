export class SnakesAndLadders {
  private tokenPostion: number = 1;
  private snakes: Array<Snake> = [];
  private ladders: Array<Ladder> = [];

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
    this.tokenPostion = this.moveUpOrDown(this.tokenPostion);
    return this.tokenPostion;
  }

  public hasPlayerWon(): boolean {
    return this.tokenPostion >= 100;
  }

  public addSnake(snake: Snake): void {
    this.snakes.push(snake);
  }

  public addLadder(ladder: Ladder): void {
    this.ladders.push(ladder);
  }

  private moveUpOrDown(position: number): number {
    const finalPosition = this.moveDown(position);
    return position === finalPosition ? this.moveUp(position) : finalPosition;
  }

  private moveUp(position: number): number {
    let ladders = this.ladders.filter(l => {
      return l.getInitialPosition() === position
    });
    return ladders.length ? ladders[0].getFinalPosition() : position;
  }

  private moveDown(position: number): number {
    let snake = this.snakes.filter(s => {
      return s.getInitialPosition() === position
    });
    return snake.length ? snake[0].getFinalPosition() : position; 
  }
}

class Shortcut {
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

export class Snake extends Shortcut {
  constructor(initialPosition: number, finalPosition: number) {
    if (initialPosition <= finalPosition) {
      throw new Error('Snakes can only go down');
    }
    super(initialPosition, finalPosition);
  }
}

export class Ladder extends Shortcut {
  constructor(initialPosition: number, finalPosition: number) {
    if (initialPosition >= finalPosition) {
      throw new Error('Ladders can only go up');
    }
    super(initialPosition, finalPosition);
  }
}