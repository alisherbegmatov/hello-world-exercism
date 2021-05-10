import HelloWorld from "./hello-world"

describe('Hello World', () => {

  it('says hello world with no name', () => {
    expect(HelloWorld.hello()).toEqual('Hello, World!')
  })

  it('says hello to alisher', () => {
    expect(HelloWorld.hello('Alisher')).toEqual('Hello, Alisher!')
  })

  it('says hello to begmatov', () => {
    expect(HelloWorld.hello('Begmatov')).toEqual('Hello, Begmatov!')
  })
})
