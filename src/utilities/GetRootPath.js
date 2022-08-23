/**
 * this function will get the root or parent route from the path passed to it
 * @param path
 * @returns {string} rootPath
 */
export default function getRootPath(path) {
   return [...path.matchAll(/^(\/[^/]*)/g)][0][1]
    // return rootPath
}