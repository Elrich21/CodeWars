function topThreeWords(text) {
    
    text = text.toLowerCase().replace(/[^a-z']+/g, ' ');
    const words = text.match(/\b[a-z']+\b/g);

   
    if (!words) return [];

    const wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
    return sortedWords.slice(0, 3);
}
