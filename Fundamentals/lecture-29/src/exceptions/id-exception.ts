export class IdException extends Error {
  constructor(message?: string) {
    super(message || "Invalid id");
  }
}
