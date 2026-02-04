📊 Top Three Most Frequent Words (JavaScript)

This utility function extracts and returns the top 3 most frequently occurring words from any given text input.

It is designed to handle:

Mixed casing (case-insensitive)

Punctuation and special characters

Words containing apostrophes (e.g., "don't", "it's")

🚀 Function
function topThreeWords(text) {
    text = text.toLowerCase().replace(/[^a-z']+/g, ' ');
    const words = text.match(/\b[a-z']+\b/g);

    if (!words) return [];

    const wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    const sortedWords = Object.keys(wordCounts)
        .sort((a, b) => wordCounts[b] - wordCounts[a]);

    return sortedWords.slice(0, 3);
}

🧠 How It Works
1️⃣ Normalize the text

Converts all characters to lowercase

Removes all characters except letters and apostrophes

text = text.toLowerCase().replace(/[^a-z']+/g, ' ');

2️⃣ Extract valid words using Regex
const words = text.match(/\b[a-z']+\b/g);


This captures:

Words like hello, world

Words like don't, it's

3️⃣ Count word frequency
wordCounts[word] = (wordCounts[word] || 0) + 1;


Uses a JavaScript object as a frequency map.

4️⃣ Sort by frequency
Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);

5️⃣ Return top 3
return sortedWords.slice(0, 3);

✅ Example Usage
const text = `
Hello hello hello! Isn't this a test?
This test is only a test. Don't panic.
`;

console.log(topThreeWords(text));

Output
["hello", "test", "this"]

⚠️ Edge Cases Handled
Case	Result
Empty string	[]
Only punctuation	[]
Mixed case words	Treated as same word
Words with apostrophes	Correctly counted
Less than 3 words	Returns available words
📌 Complexity

Time Complexity: O(n log n) due to sorting

Space Complexity: O(n) for word storage and counting

💡 Use Cases

Text analysis

NLP preprocessing

Chat logs / comment analysis

Keyword extraction

Interview coding practice

🏁 Summary

A lightweight and efficient function to quickly determine the most common words in any text input using pure JavaScript and regular expressions.
