/**
 * Replaces all occurrences of "http://ecgkid.com" with "https://ecgkid.com"
 * in the provided content string.
 */
export function updateEcgkidUrls(content) {
    return content.replace(/http:\/\/ecgkid\.com/g, "https://ecgkid.com");
}
