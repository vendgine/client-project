/* eslint-disable import/unambiguous */
/* eslint-disable import/no-default-export */

/**
 * Declare the module type for SVG files.
 */
declare module "*.svg" {
    const content: string
    export default content
}
