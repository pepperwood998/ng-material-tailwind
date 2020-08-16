export class HeroForm {
  constructor(
    public name: string,
    public power: string,
    public alterEgo?: string,
  ) {}
}

export class Hero extends HeroForm {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string,
  ) {
    super(name, power, alterEgo);
  }
}
