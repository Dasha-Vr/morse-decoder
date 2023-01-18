const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let list = []
    let letter = ''
    let i = 0
    let simbol = ''
    while (i < expr.length){
        while (letter.length < 10) {
            letter = `${letter}${expr[i]}`
            i += 1 
        }
        list.push(letter)
        letter = ''
    
    
    }
    
    let ans = []
    for (let j = 0; j < list.length; j++) {
    let a = ''
        for (let i = 0; i < list[j].length; i++) {
            if (list[j][i] == 1) {
                if (list[j][i+1] == 1) {
                a += '-';
            }   else if (list[j][i+1] == 0) {
                a += '.'
                
            }
            i++
        }
        
    }
    ans.push(a)
    }
    
    ans2 = []
    for (i of ans){
        b = MORSE_TABLE[i]
        ans2.push(b)
    }
    let ans3 = []
    
    for (i of ans2){
        if (i === undefined){
            ans3.push(' ')
        }
        else{
        ans3.push(i)
            
        }
    }
    
    return ans3.join('')
}

module.exports = {
    decode
}