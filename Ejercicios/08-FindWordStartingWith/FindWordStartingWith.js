function FindWordStartingWith(book, query) {
  // Your code here:
  //  --<libro  = obj { id , text} 
//   // const book = {
//     id: 1,
//     text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia muchas'
// }

// findWordsStartingWith (book, 'de')
// output: [23] 
//  findWordsStartingWith (book, 'un')
//  [ 6, 14, 43] 
// recorro text del book obj, if slice book.text[i] , i + query.length; arr.push(i) ; 
var arr = []; 
var libro = book.text.toLowerCase(); 
var sub = query.toLowerCase(); 
for(let i = 0; i< libro.length; i++){ 
  if(libro.slice(i, i+sub.length) === sub){
      arr.push(i); 
  }
  if(i === libro.length-1){
    return arr; 
  }else{
  continue; 
  }
} 
return arr; 
}


module.exports = FindWordStartingWith;
