let user = {
  name: 'Felipe',
  age: 25,
  email: 'felipe.gueller@gmail.com',
  federativeUnit: 'ES',
  blogPost: [
    { title: 'Falar sobre animais', likes: 30 },
    { title: 'Duolingo, aplicativo de idiomas', likes: 40}
  ],
  login: function () {
    console.log('Usuário logado')
  },
  logout: function () {
    console.log('Usuário deslogado')
  },
  logBlobPost () {
    console.log(`O usuário ${this.name} escreveu os seguintes posts:`)

    this.blogPost.forEach(post => console.log(`\tTítulo: ${post.title}\n\tCurtidas: ${post.likes}`))
  },
  sintaxSugar () {
    console.log('Function declaration em objetos de maneira reduzida')
  },
  thisFunctionDeclaration () {
    console.log('Referencia o objeto que invoca o método: ')
    console.log(this) // user object
  },
  thisArrowFunction: () => {
    console.log('Referencia o objeto do escopo no qual o método foi invocado: ')
    console.log(this) // window object
  }
}

user.thisArrowFunction() 

user.logBlobPost()

user.thisFunctionDeclaration()