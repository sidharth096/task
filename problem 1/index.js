function findSameCharacters(string) {
    let counts = new Map()
    for (let i = 0; i < string.length - 1; i++) {
        let count = 1
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                count++
            }
        }
        if (!counts.has(string[i])) {
            counts.set(string[i], count);
        }

    }
    return counts
}

const counts = findSameCharacters('aaabcdee');
console.log(counts);