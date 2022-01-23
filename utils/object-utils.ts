/**
 * Delete the nested properties of an object given a certain depth.
 * @param {Object} obj 
 * @param {Number} depth
 * @param {Number} currentDepth
 */
export const deleteNestedProps = <T>(object: T, depth: number = 1, currentDepth: number = 0): T | Partial<T> => {
    if (object) {
        Object.keys(object)?.forEach(key => {
            if (typeof (object as Record<string, any>)[key] === 'object') {
                if (depth === currentDepth) {
                    delete (object as Record<string, any>)[key]
                }
                else {
                    deleteNestedProps((object as Record<string, any>)[key], depth, currentDepth + 1)
                }
            }
        })
    }
    return object
}