/**
 * Replaces all occurrences of "http://ecgkid.com" with "https://ecgkid.com"
 * in the provided content string.
 */
export function updateEcgkidUrls(content: string): string {
  return content.replace(/http:\/\/ecgkid\.com/g, "https://ecgkid.com");
}