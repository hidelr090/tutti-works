export class NotFoundError extends Error {
  constructor (stack: string | undefined) {
    super(`Not Found`);
    this.name = 'NotFoundError';
    this.stack = stack;
  }
}
