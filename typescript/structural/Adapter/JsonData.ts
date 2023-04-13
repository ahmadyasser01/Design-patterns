export class JsonDataProvider {
  private data: JSON;
  public constructor(data: JSON) {
    this.data = data;
  }
  getData(): JSON {
    return this.data;
  }
}
