const extractFields = (text) => {
  // Email pattern
  const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  const email = text.match(emailPattern) ? text.match(emailPattern)[0] : null;

  // Phone number pattern (supports multiple formats)
  const phonePattern =
    /\b(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}\b/;
  const phone = text.match(phonePattern) ? text.match(phonePattern)[0] : null;

  // URL pattern
  const urlPattern = /(https?:\/\/[^\s]+|www\.[^\s]+)/i;
  const url = text.match(urlPattern) ? text.match(urlPattern)[0] : null;

  // Name (Basic heuristic, assuming name is one of the first lines)
  const lines = text.split("\n").filter((line) => line.trim() !== ""); // Split text into lines
  const name = lines.length > 0 ? lines[0] : null;

  //   const address = extractAddress(text);

  const addressKeywords = [
    "Street",
    "Avenue",
    "Rd",
    "Road",
    "Blvd",
    "Lane",
    "City",
    "State",
    "Country",
  ];
  const addressLines = text.split("\n").filter((line) => {
    return (
      addressKeywords.some((keyword) => line.includes(keyword)) ||
      /\d{5}/.test(line)
    ); // Search for ZIP codes
  });
  const address = addressLines.length > 0 ? addressLines.join(", ") : null;
  return { name, email, phone, url, address };
};

module.exports = { extractFields };
