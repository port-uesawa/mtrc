export default class hoge {
  constructor () {
    this.test()
  }

  test () {
    window.addEventListener('click', () => {
      alert(123)
    })
  }
}
