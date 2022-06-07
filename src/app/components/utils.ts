/*!
 * Check if two objects or arrays are equal
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {*}       obj1 The first item
 * @param  {*}       obj2 The second item
 * @return {Boolean}       Returns true if they're equal in value
 */
const isEqual = (obj1, obj2) => {
  /**
   * More accurately check the type of a JavaScript object
   * @param  {Object} obj The object
   * @return {String}     The object type
   */
  function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  function areArraysEqual() {
    // Check length
    if (obj1.length !== obj2.length) return false;

    // Check each item in the array
    for (let i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i])) return false;
    }

    // If no errors, return true
    return true;
  }

  function areObjectsEqual() {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    // Check each item in the object
    for (let key in obj1) {
      if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        if (!isEqual(obj1[key], obj2[key])) return false;
      }
    }

    // If no errors, return true
    return true;
  }

  function areFunctionsEqual() {
    return obj1.toString() === obj2.toString();
  }

  function arePrimativesEqual() {
    return obj1 === obj2;
  }

  // Get the object type
  let type = getType(obj1);

  // If the two items are not the same type, return false
  if (type !== getType(obj2)) return false;

  // Compare based on type
  if (type === "array") return areArraysEqual();
  if (type === "object") return areObjectsEqual();
  if (type === "function") return areFunctionsEqual();
  return arePrimativesEqual();
};

/*!
 * Get the name of a layer with a maximum length. Trucate it if necessary
 * @param  {string} layerName    The name of the layer
 * @param  {number} maxLength    The maximum lenght of the string to be retunred
 * @return {string}              Returns the layer name truncated if necessary
 */
const truncateLayerName = (
  layerName: string,
  maxLength: number = 25
): string => {
  if (layerName.length > maxLength) {
    return layerName.substring(0, maxLength) + "...";
  }

  return layerName;
};

/*!
 * Capitalize the first letter of the value provided
 * @param  {string|boolean} valueToConvert The name of the layer
 * @return {string}                        The value with the first letter capitalized
 */
const toCapitalizedString = (valueToConvert: boolean | string): string => {
  let outputValue = valueToConvert.toString();
  outputValue = outputValue[0].toUpperCase() + outputValue.substring(1);

  return outputValue;
};

/*!
 * Convert a Figma RGB value to a hex value
 * @param  {number} r  The red value
 * @param  {number} g  The green value
 * @param  {number} b  The blue value
 * @return {string}    A hex value equivalent to the rgb value provided
 */
const rgbToHex = (r: number, g: number, b: number): string => {
  /*!
   * Convert an color value to a 2 character hex value
   * @param  {number} colorValue  The color value
   * @return {string} A 2 character hex value
   */
  const componentToHex = (colorValue: number): string => {
    colorValue = Math.round(colorValue * 255);
    let hex = colorValue.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  /*!
   * Combines the two character hex values into a full hex color
   * @param  {number} r  The red value
   * @param  {number} g  The green value
   * @param  {number} b  The blue value
   * @return {string} A hex value equivalent to the rgb value provided
   */
  const combineComponents = (r: number, g: number, b: number): string => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  return combineComponents(r, g, b);
};

/*!
 * Selects a layer in Figma and zooms into it at 100%
 * @param  {string}    layerId  The layerId of the layer to be selected and zoomed
 * @return {undefined} No value is returned
 */
const selectAndZoomToLayer = (layerId: string) => {
  const layer: SceneNode = figma.getNodeById(layerId) as SceneNode;

  figma.currentPage.selection = [layer];
  figma.viewport.scrollAndZoomIntoView([layer]);
};

export {
  isEqual,
  truncateLayerName,
  toCapitalizedString,
  rgbToHex,
  selectAndZoomToLayer,
};
