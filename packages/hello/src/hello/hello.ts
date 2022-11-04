export type HelloResponse = {
  message: string;
};

export const sayHello = (): HelloResponse => {
  return { message: 'hello' };
};
