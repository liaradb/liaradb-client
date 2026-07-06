export class Server {
  constructor(
    private uri: URL,
    private name: string,
  ) {}

  getUri() {
    return this.uri;
  }

  getName() {
    return this.name;
  }
}
