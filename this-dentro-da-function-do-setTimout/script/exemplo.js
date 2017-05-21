document.querySelector('li').addEventListener('click', function() {
  console.log(`AddEventLister ${this}`)
  setTimeout(function() {
    console.log(`sitTimeout ${this}`)
  })
})
