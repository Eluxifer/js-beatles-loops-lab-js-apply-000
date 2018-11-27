// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < 4; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}
function johnLennonFacts(){
  var facts = ["foo", "bar"];
     var newFacts = [];
     var i = 0;
     while (i < facts.length) {
         newFacts.push(facts[i] +"!!!");
         i++;
     }
     return newFacts;
}
