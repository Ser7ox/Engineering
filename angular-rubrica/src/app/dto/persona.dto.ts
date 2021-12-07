export class PersonaDto {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public birthDay: Date,
    public sex: string,
    public number: number,
    public address?: string
  ) {}
}
