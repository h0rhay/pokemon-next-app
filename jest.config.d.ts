import 'jest';

declare module 'jest' {
  interface Matchers<R, T> {
    toBeInTheDocument(): R;
    toHaveAttribute(attr: string, value?: string): R;
  }
}
