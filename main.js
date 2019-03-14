function printWord() {
  let i
  let x = document.getElementById('word').value

  console.log(x)
  for (i = 0; i < document.getElementById('number').value; i++) {
    let phrase = document.createElement('p')
    phrase.innerText = x
    document.body.appendChild(phrase)
  }
}
