function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; i++) {
    for(var b = i; b < i+1; b++) {
      var string = musicians[i] + " plays " + instruments[b]
      array.push(string)
    }  
  }
  return array
}

function johnLennonFacts() {
  var i = 0
  while()
}