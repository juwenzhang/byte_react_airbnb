export function getFileUrl(str) {
    return new URL(str, import.meta.url).href
}