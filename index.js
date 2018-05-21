function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; i++) {
    for(var k = i; k < i+1; k++) {
      var string = musicians[i] + " plays " + instruments[k]
      array.push(string)
    }  
  }
  return array
}

function johnLennonFacts() {
  
}