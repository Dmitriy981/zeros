module.exports = function getZerosCount(number) {
    let fivesCount = 0;
    let saved = 0;
    
    for(let i = 5; i <= number; i += 5) {
        if(i % 25 != 0) {
            fivesCount++;
        } else {
            saved = i;

            while (saved % 5 == 0) {
                fivesCount++;
                saved /= 5;
            }
        }
    }
    
    return fivesCount;
}
