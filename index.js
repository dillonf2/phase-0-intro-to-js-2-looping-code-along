let names=[`Guadalupe`, `Ollie`,`Aki`]

function writeCards(names) {
    let cards=[]
  for (let i = 0; i < names.length; i++) {
    cards[i]=`Thank you, ${names[i]}, for the wonderful surprise gift!`
  }
  return cards
}
writeCards(names)

function countDown(n) {
    for (let i =n; i >= 0; i--){
        console.log(i)
    }
}