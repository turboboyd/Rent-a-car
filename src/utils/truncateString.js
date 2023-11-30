function truncateString(str, maxLength, maxWords) {
  const words = str.split(' ');
  let truncated = '';

  for (let i = 0; i < maxWords && i < words.length; i++) {
    truncated += words[i] + ' ';
  }

  return truncated.trim().substring(0, maxLength);
}

export default truncateString;