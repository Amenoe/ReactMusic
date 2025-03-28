interface IFnCall {
  <T>(fn: (name: string) => T, age: number): string
}

const foo: IFnCall = (fn, age) => {
  fn('rain')
  console.log(age)
  return 'aaa'
}

foo<number>((name) => {
  console.log(name)
  return 123
}, 1)
