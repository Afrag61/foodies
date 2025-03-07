export class Printer {
  print(...values) {
    console.log(...values);
  }
}

export const print = (...args) => {
  const { print } = new Printer();

  if (args.length > 0) {
    return print(...args);
  }

  console.log("no data in params");
  return "no data in params";
};
