function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; i++) {
    for(var j = i; j < i+1; j++) {
      var string = musicians[i] + " plays " + instruments[j]
      array.push(string)
    }  
  }
  return array
}