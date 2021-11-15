//write your code here
function findLongestWord (string){
    let longest;
    let maxLength = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i].length > maxLength){
            maxLength = string[i].length
            longest = string[i]
        }
    }
    return longest
}
console.log(findLongestWord(["bird", "sax", "door", "igloo"]))