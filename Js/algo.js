function analyzeSentence(sentence) {
  // Step 2: Initialize counters
  let lengthCount = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Step 3: Iterate through characters
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    // Step 4: Count length
    if (char !== ".") {
      lengthCount++;
    }

    // Step 5: Count words
    if (char === " ") {
      wordCount++;
    }

    // Step 6: Count vowels
    if ("aeiouAEIOU".indexOf(char) !== -1) {
      vowelCount++;
    }
  }

  // Adjust wordCount by adding 1 since the last word doesn't have a space after it
  wordCount++;

  // Step 7: Output
  console.log("Length of the sentence:", lengthCount);
  console.log("Number of words:", wordCount);
  console.log("Number of vowels:", vowelCount);
}

// Example usage:
const sentence = prompt("Enter a sentence ending with a period:");
analyzeSentence(sentence);
