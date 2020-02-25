class HttpHeaders {
  private headers = {}

  public add(key: string, value: string) {
    this.headers[key] = value
  }

  public get(key: string): string {
    return this.headers[key]
  }

  public toObject() {
    return this.headers
  }
}

export { HttpHeaders }
