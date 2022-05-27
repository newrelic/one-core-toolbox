(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [0],
  {
    /***/ "./node_modules/node-fetch/src/utils/multipart-parser.js":
      /*!***************************************************************!*\
  !*** ./node_modules/node-fetch/src/utils/multipart-parser.js ***!
  \***************************************************************/
      /*! exports provided: toFormData */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "toFormData",
          function () {
            return toFormData;
          }
        );
        /* harmony import */ var fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! fetch-blob/from.js */ "./node_modules/fetch-blob/from.js"
          );
        /* harmony import */ var fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! formdata-polyfill/esm.min.js */ "./node_modules/formdata-polyfill/esm.min.js"
          );
        /* harmony import */ var formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_1__
          );

        let s = 0;
        const S = {
          START_BOUNDARY: s++,
          HEADER_FIELD_START: s++,
          HEADER_FIELD: s++,
          HEADER_VALUE_START: s++,
          HEADER_VALUE: s++,
          HEADER_VALUE_ALMOST_DONE: s++,
          HEADERS_ALMOST_DONE: s++,
          PART_DATA_START: s++,
          PART_DATA: s++,
          END: s++,
        };

        let f = 1;
        const F = {
          PART_BOUNDARY: f,
          LAST_BOUNDARY: (f *= 2),
        };

        const LF = 10;
        const CR = 13;
        const SPACE = 32;
        const HYPHEN = 45;
        const COLON = 58;
        const A = 97;
        const Z = 122;

        const lower = (c) => c | 0x20;

        const noop = () => {};

        class MultipartParser {
          /**
           * @param {string} boundary
           */
          constructor(boundary) {
            this.index = 0;
            this.flags = 0;

            this.onHeaderEnd = noop;
            this.onHeaderField = noop;
            this.onHeadersEnd = noop;
            this.onHeaderValue = noop;
            this.onPartBegin = noop;
            this.onPartData = noop;
            this.onPartEnd = noop;

            this.boundaryChars = {};

            boundary = "\r\n--" + boundary;
            const ui8a = new Uint8Array(boundary.length);
            for (let i = 0; i < boundary.length; i++) {
              ui8a[i] = boundary.charCodeAt(i);
              this.boundaryChars[ui8a[i]] = true;
            }

            this.boundary = ui8a;
            this.lookbehind = new Uint8Array(this.boundary.length + 8);
            this.state = S.START_BOUNDARY;
          }

          /**
           * @param {Uint8Array} data
           */
          write(data) {
            let i = 0;
            const length_ = data.length;
            let previousIndex = this.index;
            let { lookbehind, boundary, boundaryChars, index, state, flags } =
              this;
            const boundaryLength = this.boundary.length;
            const boundaryEnd = boundaryLength - 1;
            const bufferLength = data.length;
            let c;
            let cl;

            const mark = (name) => {
              this[name + "Mark"] = i;
            };

            const clear = (name) => {
              delete this[name + "Mark"];
            };

            const callback = (callbackSymbol, start, end, ui8a) => {
              if (start === undefined || start !== end) {
                this[callbackSymbol](ui8a && ui8a.subarray(start, end));
              }
            };

            const dataCallback = (name, clear) => {
              const markSymbol = name + "Mark";
              if (!(markSymbol in this)) {
                return;
              }

              if (clear) {
                callback(name, this[markSymbol], i, data);
                delete this[markSymbol];
              } else {
                callback(name, this[markSymbol], data.length, data);
                this[markSymbol] = 0;
              }
            };

            for (i = 0; i < length_; i++) {
              c = data[i];

              switch (state) {
                case S.START_BOUNDARY:
                  if (index === boundary.length - 2) {
                    if (c === HYPHEN) {
                      flags |= F.LAST_BOUNDARY;
                    } else if (c !== CR) {
                      return;
                    }

                    index++;
                    break;
                  } else if (index - 1 === boundary.length - 2) {
                    if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                      state = S.END;
                      flags = 0;
                    } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                      index = 0;
                      callback("onPartBegin");
                      state = S.HEADER_FIELD_START;
                    } else {
                      return;
                    }

                    break;
                  }

                  if (c !== boundary[index + 2]) {
                    index = -2;
                  }

                  if (c === boundary[index + 2]) {
                    index++;
                  }

                  break;
                case S.HEADER_FIELD_START:
                  state = S.HEADER_FIELD;
                  mark("onHeaderField");
                  index = 0;
                // falls through
                case S.HEADER_FIELD:
                  if (c === CR) {
                    clear("onHeaderField");
                    state = S.HEADERS_ALMOST_DONE;
                    break;
                  }

                  index++;
                  if (c === HYPHEN) {
                    break;
                  }

                  if (c === COLON) {
                    if (index === 1) {
                      // empty header field
                      return;
                    }

                    dataCallback("onHeaderField", true);
                    state = S.HEADER_VALUE_START;
                    break;
                  }

                  cl = lower(c);
                  if (cl < A || cl > Z) {
                    return;
                  }

                  break;
                case S.HEADER_VALUE_START:
                  if (c === SPACE) {
                    break;
                  }

                  mark("onHeaderValue");
                  state = S.HEADER_VALUE;
                // falls through
                case S.HEADER_VALUE:
                  if (c === CR) {
                    dataCallback("onHeaderValue", true);
                    callback("onHeaderEnd");
                    state = S.HEADER_VALUE_ALMOST_DONE;
                  }

                  break;
                case S.HEADER_VALUE_ALMOST_DONE:
                  if (c !== LF) {
                    return;
                  }

                  state = S.HEADER_FIELD_START;
                  break;
                case S.HEADERS_ALMOST_DONE:
                  if (c !== LF) {
                    return;
                  }

                  callback("onHeadersEnd");
                  state = S.PART_DATA_START;
                  break;
                case S.PART_DATA_START:
                  state = S.PART_DATA;
                  mark("onPartData");
                // falls through
                case S.PART_DATA:
                  previousIndex = index;

                  if (index === 0) {
                    // boyer-moore derrived algorithm to safely skip non-boundary data
                    i += boundaryEnd;
                    while (i < bufferLength && !(data[i] in boundaryChars)) {
                      i += boundaryLength;
                    }

                    i -= boundaryEnd;
                    c = data[i];
                  }

                  if (index < boundary.length) {
                    if (boundary[index] === c) {
                      if (index === 0) {
                        dataCallback("onPartData", true);
                      }

                      index++;
                    } else {
                      index = 0;
                    }
                  } else if (index === boundary.length) {
                    index++;
                    if (c === CR) {
                      // CR = part boundary
                      flags |= F.PART_BOUNDARY;
                    } else if (c === HYPHEN) {
                      // HYPHEN = end boundary
                      flags |= F.LAST_BOUNDARY;
                    } else {
                      index = 0;
                    }
                  } else if (index - 1 === boundary.length) {
                    if (flags & F.PART_BOUNDARY) {
                      index = 0;
                      if (c === LF) {
                        // unset the PART_BOUNDARY flag
                        flags &= ~F.PART_BOUNDARY;
                        callback("onPartEnd");
                        callback("onPartBegin");
                        state = S.HEADER_FIELD_START;
                        break;
                      }
                    } else if (flags & F.LAST_BOUNDARY) {
                      if (c === HYPHEN) {
                        callback("onPartEnd");
                        state = S.END;
                        flags = 0;
                      } else {
                        index = 0;
                      }
                    } else {
                      index = 0;
                    }
                  }

                  if (index > 0) {
                    // when matching a possible boundary, keep a lookbehind reference
                    // in case it turns out to be a false lead
                    lookbehind[index - 1] = c;
                  } else if (previousIndex > 0) {
                    // if our boundary turned out to be rubbish, the captured lookbehind
                    // belongs to partData
                    const _lookbehind = new Uint8Array(
                      lookbehind.buffer,
                      lookbehind.byteOffset,
                      lookbehind.byteLength
                    );
                    callback("onPartData", 0, previousIndex, _lookbehind);
                    previousIndex = 0;
                    mark("onPartData");

                    // reconsider the current character even so it interrupted the sequence
                    // it could be the beginning of a new sequence
                    i--;
                  }

                  break;
                case S.END:
                  break;
                default:
                  throw new Error(`Unexpected state entered: ${state}`);
              }
            }

            dataCallback("onHeaderField");
            dataCallback("onHeaderValue");
            dataCallback("onPartData");

            // Update properties for the next call
            this.index = index;
            this.state = state;
            this.flags = flags;
          }

          end() {
            if (
              (this.state === S.HEADER_FIELD_START && this.index === 0) ||
              (this.state === S.PART_DATA &&
                this.index === this.boundary.length)
            ) {
              this.onPartEnd();
            } else if (this.state !== S.END) {
              throw new Error(
                "MultipartParser.end(): stream ended unexpectedly"
              );
            }
          }
        }

        function _fileName(headerValue) {
          // matches either a quoted-string or a token (RFC 2616 section 19.5.1)
          const m = headerValue.match(
            /\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i
          );
          if (!m) {
            return;
          }

          const match = m[2] || m[3] || "";
          let filename = match.slice(match.lastIndexOf("\\") + 1);
          filename = filename.replace(/%22/g, '"');
          filename = filename.replace(/&#(\d{4});/g, (m, code) => {
            return String.fromCharCode(code);
          });
          return filename;
        }

        async function toFormData(Body, ct) {
          if (!/multipart/i.test(ct)) {
            throw new TypeError("Failed to fetch");
          }

          const m = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);

          if (!m) {
            throw new TypeError(
              "no or bad content-type header, no multipart boundary"
            );
          }

          const parser = new MultipartParser(m[1] || m[2]);

          let headerField;
          let headerValue;
          let entryValue;
          let entryName;
          let contentType;
          let filename;
          const entryChunks = [];
          const formData =
            new formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_1__[
              "FormData"
            ]();

          const onPartData = (ui8a) => {
            entryValue += decoder.decode(ui8a, { stream: true });
          };

          const appendToFile = (ui8a) => {
            entryChunks.push(ui8a);
          };

          const appendFileToFormData = () => {
            const file = new fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_0__[
              "File"
            ](entryChunks, filename, { type: contentType });
            formData.append(entryName, file);
          };

          const appendEntryToFormData = () => {
            formData.append(entryName, entryValue);
          };

          const decoder = new TextDecoder("utf-8");
          decoder.decode();

          parser.onPartBegin = function () {
            parser.onPartData = onPartData;
            parser.onPartEnd = appendEntryToFormData;

            headerField = "";
            headerValue = "";
            entryValue = "";
            entryName = "";
            contentType = "";
            filename = null;
            entryChunks.length = 0;
          };

          parser.onHeaderField = function (ui8a) {
            headerField += decoder.decode(ui8a, { stream: true });
          };

          parser.onHeaderValue = function (ui8a) {
            headerValue += decoder.decode(ui8a, { stream: true });
          };

          parser.onHeaderEnd = function () {
            headerValue += decoder.decode();
            headerField = headerField.toLowerCase();

            if (headerField === "content-disposition") {
              // matches either a quoted-string or a token (RFC 2616 section 19.5.1)
              const m = headerValue.match(
                /\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i
              );

              if (m) {
                entryName = m[2] || m[3] || "";
              }

              filename = _fileName(headerValue);

              if (filename) {
                parser.onPartData = appendToFile;
                parser.onPartEnd = appendFileToFormData;
              }
            } else if (headerField === "content-type") {
              contentType = headerValue;
            }

            headerValue = "";
            headerField = "";
          };

          for await (const chunk of Body) {
            parser.write(chunk);
          }

          parser.end();

          return formData;
        }

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvdXRpbHMvbXVsdGlwYXJ0LXBhcnNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ2M7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seURBQXlEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsYUFBYTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELFlBQVksWUFBWTtBQUNwRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsRUFBRTtBQUN4QztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFFQUFROztBQUU5QjtBQUNBLHNDQUFzQyxhQUFhO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1REFBSSx5QkFBeUIsa0JBQWtCO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDs7QUFFQTtBQUNBLHVDQUF1QyxhQUFhO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELFlBQVk7O0FBRXhFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaWxlfSBmcm9tICdmZXRjaC1ibG9iL2Zyb20uanMnO1xuaW1wb3J0IHtGb3JtRGF0YX0gZnJvbSAnZm9ybWRhdGEtcG9seWZpbGwvZXNtLm1pbi5qcyc7XG5cbmxldCBzID0gMDtcbmNvbnN0IFMgPSB7XG5cdFNUQVJUX0JPVU5EQVJZOiBzKyssXG5cdEhFQURFUl9GSUVMRF9TVEFSVDogcysrLFxuXHRIRUFERVJfRklFTEQ6IHMrKyxcblx0SEVBREVSX1ZBTFVFX1NUQVJUOiBzKyssXG5cdEhFQURFUl9WQUxVRTogcysrLFxuXHRIRUFERVJfVkFMVUVfQUxNT1NUX0RPTkU6IHMrKyxcblx0SEVBREVSU19BTE1PU1RfRE9ORTogcysrLFxuXHRQQVJUX0RBVEFfU1RBUlQ6IHMrKyxcblx0UEFSVF9EQVRBOiBzKyssXG5cdEVORDogcysrXG59O1xuXG5sZXQgZiA9IDE7XG5jb25zdCBGID0ge1xuXHRQQVJUX0JPVU5EQVJZOiBmLFxuXHRMQVNUX0JPVU5EQVJZOiBmICo9IDJcbn07XG5cbmNvbnN0IExGID0gMTA7XG5jb25zdCBDUiA9IDEzO1xuY29uc3QgU1BBQ0UgPSAzMjtcbmNvbnN0IEhZUEhFTiA9IDQ1O1xuY29uc3QgQ09MT04gPSA1ODtcbmNvbnN0IEEgPSA5NztcbmNvbnN0IFogPSAxMjI7XG5cbmNvbnN0IGxvd2VyID0gYyA9PiBjIHwgMHgyMDtcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5jbGFzcyBNdWx0aXBhcnRQYXJzZXIge1xuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kYXJ5XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihib3VuZGFyeSkge1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHRcdHRoaXMuZmxhZ3MgPSAwO1xuXG5cdFx0dGhpcy5vbkhlYWRlckVuZCA9IG5vb3A7XG5cdFx0dGhpcy5vbkhlYWRlckZpZWxkID0gbm9vcDtcblx0XHR0aGlzLm9uSGVhZGVyc0VuZCA9IG5vb3A7XG5cdFx0dGhpcy5vbkhlYWRlclZhbHVlID0gbm9vcDtcblx0XHR0aGlzLm9uUGFydEJlZ2luID0gbm9vcDtcblx0XHR0aGlzLm9uUGFydERhdGEgPSBub29wO1xuXHRcdHRoaXMub25QYXJ0RW5kID0gbm9vcDtcblxuXHRcdHRoaXMuYm91bmRhcnlDaGFycyA9IHt9O1xuXG5cdFx0Ym91bmRhcnkgPSAnXFxyXFxuLS0nICsgYm91bmRhcnk7XG5cdFx0Y29uc3QgdWk4YSA9IG5ldyBVaW50OEFycmF5KGJvdW5kYXJ5Lmxlbmd0aCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dWk4YVtpXSA9IGJvdW5kYXJ5LmNoYXJDb2RlQXQoaSk7XG5cdFx0XHR0aGlzLmJvdW5kYXJ5Q2hhcnNbdWk4YVtpXV0gPSB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuYm91bmRhcnkgPSB1aThhO1xuXHRcdHRoaXMubG9va2JlaGluZCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYm91bmRhcnkubGVuZ3RoICsgOCk7XG5cdFx0dGhpcy5zdGF0ZSA9IFMuU1RBUlRfQk9VTkRBUlk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtVaW50OEFycmF5fSBkYXRhXG5cdCAqL1xuXHR3cml0ZShkYXRhKSB7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdGNvbnN0IGxlbmd0aF8gPSBkYXRhLmxlbmd0aDtcblx0XHRsZXQgcHJldmlvdXNJbmRleCA9IHRoaXMuaW5kZXg7XG5cdFx0bGV0IHtsb29rYmVoaW5kLCBib3VuZGFyeSwgYm91bmRhcnlDaGFycywgaW5kZXgsIHN0YXRlLCBmbGFnc30gPSB0aGlzO1xuXHRcdGNvbnN0IGJvdW5kYXJ5TGVuZ3RoID0gdGhpcy5ib3VuZGFyeS5sZW5ndGg7XG5cdFx0Y29uc3QgYm91bmRhcnlFbmQgPSBib3VuZGFyeUxlbmd0aCAtIDE7XG5cdFx0Y29uc3QgYnVmZmVyTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cdFx0bGV0IGM7XG5cdFx0bGV0IGNsO1xuXG5cdFx0Y29uc3QgbWFyayA9IG5hbWUgPT4ge1xuXHRcdFx0dGhpc1tuYW1lICsgJ01hcmsnXSA9IGk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNsZWFyID0gbmFtZSA9PiB7XG5cdFx0XHRkZWxldGUgdGhpc1tuYW1lICsgJ01hcmsnXTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoY2FsbGJhY2tTeW1ib2wsIHN0YXJ0LCBlbmQsIHVpOGEpID0+IHtcblx0XHRcdGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0ICE9PSBlbmQpIHtcblx0XHRcdFx0dGhpc1tjYWxsYmFja1N5bWJvbF0odWk4YSAmJiB1aThhLnN1YmFycmF5KHN0YXJ0LCBlbmQpKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZGF0YUNhbGxiYWNrID0gKG5hbWUsIGNsZWFyKSA9PiB7XG5cdFx0XHRjb25zdCBtYXJrU3ltYm9sID0gbmFtZSArICdNYXJrJztcblx0XHRcdGlmICghKG1hcmtTeW1ib2wgaW4gdGhpcykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXIpIHtcblx0XHRcdFx0Y2FsbGJhY2sobmFtZSwgdGhpc1ttYXJrU3ltYm9sXSwgaSwgZGF0YSk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzW21hcmtTeW1ib2xdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FsbGJhY2sobmFtZSwgdGhpc1ttYXJrU3ltYm9sXSwgZGF0YS5sZW5ndGgsIGRhdGEpO1xuXHRcdFx0XHR0aGlzW21hcmtTeW1ib2xdID0gMDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbmd0aF87IGkrKykge1xuXHRcdFx0YyA9IGRhdGFbaV07XG5cblx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblx0XHRcdFx0Y2FzZSBTLlNUQVJUX0JPVU5EQVJZOlxuXHRcdFx0XHRcdGlmIChpbmRleCA9PT0gYm91bmRhcnkubGVuZ3RoIC0gMikge1xuXHRcdFx0XHRcdFx0aWYgKGMgPT09IEhZUEhFTikge1xuXHRcdFx0XHRcdFx0XHRmbGFncyB8PSBGLkxBU1RfQk9VTkRBUlk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgIT09IENSKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggLSAxID09PSBib3VuZGFyeS5sZW5ndGggLSAyKSB7XG5cdFx0XHRcdFx0XHRpZiAoZmxhZ3MgJiBGLkxBU1RfQk9VTkRBUlkgJiYgYyA9PT0gSFlQSEVOKSB7XG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gUy5FTkQ7XG5cdFx0XHRcdFx0XHRcdGZsYWdzID0gMDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIShmbGFncyAmIEYuTEFTVF9CT1VOREFSWSkgJiYgYyA9PT0gTEYpIHtcblx0XHRcdFx0XHRcdFx0aW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjaygnb25QYXJ0QmVnaW4nKTtcblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBTLkhFQURFUl9GSUVMRF9TVEFSVDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGMgIT09IGJvdW5kYXJ5W2luZGV4ICsgMl0pIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gLTI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGMgPT09IGJvdW5kYXJ5W2luZGV4ICsgMl0pIHtcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUy5IRUFERVJfRklFTERfU1RBUlQ6XG5cdFx0XHRcdFx0c3RhdGUgPSBTLkhFQURFUl9GSUVMRDtcblx0XHRcdFx0XHRtYXJrKCdvbkhlYWRlckZpZWxkJyk7XG5cdFx0XHRcdFx0aW5kZXggPSAwO1xuXHRcdFx0XHRcdC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSBTLkhFQURFUl9GSUVMRDpcblx0XHRcdFx0XHRpZiAoYyA9PT0gQ1IpIHtcblx0XHRcdFx0XHRcdGNsZWFyKCdvbkhlYWRlckZpZWxkJyk7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFMuSEVBREVSU19BTE1PU1RfRE9ORTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0aWYgKGMgPT09IEhZUEhFTikge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGMgPT09IENPTE9OKSB7XG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0Ly8gZW1wdHkgaGVhZGVyIGZpZWxkXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZGF0YUNhbGxiYWNrKCdvbkhlYWRlckZpZWxkJywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFMuSEVBREVSX1ZBTFVFX1NUQVJUO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2wgPSBsb3dlcihjKTtcblx0XHRcdFx0XHRpZiAoY2wgPCBBIHx8IGNsID4gWikge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFMuSEVBREVSX1ZBTFVFX1NUQVJUOlxuXHRcdFx0XHRcdGlmIChjID09PSBTUEFDRSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bWFyaygnb25IZWFkZXJWYWx1ZScpO1xuXHRcdFx0XHRcdHN0YXRlID0gUy5IRUFERVJfVkFMVUU7XG5cdFx0XHRcdFx0Ly8gZmFsbHMgdGhyb3VnaFxuXHRcdFx0XHRjYXNlIFMuSEVBREVSX1ZBTFVFOlxuXHRcdFx0XHRcdGlmIChjID09PSBDUikge1xuXHRcdFx0XHRcdFx0ZGF0YUNhbGxiYWNrKCdvbkhlYWRlclZhbHVlJywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjaygnb25IZWFkZXJFbmQnKTtcblx0XHRcdFx0XHRcdHN0YXRlID0gUy5IRUFERVJfVkFMVUVfQUxNT1NUX0RPTkU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUy5IRUFERVJfVkFMVUVfQUxNT1NUX0RPTkU6XG5cdFx0XHRcdFx0aWYgKGMgIT09IExGKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTLkhFQURFUl9GSUVMRF9TVEFSVDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTLkhFQURFUlNfQUxNT1NUX0RPTkU6XG5cdFx0XHRcdFx0aWYgKGMgIT09IExGKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2FsbGJhY2soJ29uSGVhZGVyc0VuZCcpO1xuXHRcdFx0XHRcdHN0YXRlID0gUy5QQVJUX0RBVEFfU1RBUlQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUy5QQVJUX0RBVEFfU1RBUlQ6XG5cdFx0XHRcdFx0c3RhdGUgPSBTLlBBUlRfREFUQTtcblx0XHRcdFx0XHRtYXJrKCdvblBhcnREYXRhJyk7XG5cdFx0XHRcdFx0Ly8gZmFsbHMgdGhyb3VnaFxuXHRcdFx0XHRjYXNlIFMuUEFSVF9EQVRBOlxuXHRcdFx0XHRcdHByZXZpb3VzSW5kZXggPSBpbmRleDtcblxuXHRcdFx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0Ly8gYm95ZXItbW9vcmUgZGVycml2ZWQgYWxnb3JpdGhtIHRvIHNhZmVseSBza2lwIG5vbi1ib3VuZGFyeSBkYXRhXG5cdFx0XHRcdFx0XHRpICs9IGJvdW5kYXJ5RW5kO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGkgPCBidWZmZXJMZW5ndGggJiYgIShkYXRhW2ldIGluIGJvdW5kYXJ5Q2hhcnMpKSB7XG5cdFx0XHRcdFx0XHRcdGkgKz0gYm91bmRhcnlMZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGkgLT0gYm91bmRhcnlFbmQ7XG5cdFx0XHRcdFx0XHRjID0gZGF0YVtpXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoaW5kZXggPCBib3VuZGFyeS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGlmIChib3VuZGFyeVtpbmRleF0gPT09IGMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUNhbGxiYWNrKCdvblBhcnREYXRhJywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IGJvdW5kYXJ5Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0XHRcdGlmIChjID09PSBDUikge1xuXHRcdFx0XHRcdFx0XHQvLyBDUiA9IHBhcnQgYm91bmRhcnlcblx0XHRcdFx0XHRcdFx0ZmxhZ3MgfD0gRi5QQVJUX0JPVU5EQVJZO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBIWVBIRU4pIHtcblx0XHRcdFx0XHRcdFx0Ly8gSFlQSEVOID0gZW5kIGJvdW5kYXJ5XG5cdFx0XHRcdFx0XHRcdGZsYWdzIHw9IEYuTEFTVF9CT1VOREFSWTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4IC0gMSA9PT0gYm91bmRhcnkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAoZmxhZ3MgJiBGLlBBUlRfQk9VTkRBUlkpIHtcblx0XHRcdFx0XHRcdFx0aW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0XHRpZiAoYyA9PT0gTEYpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyB1bnNldCB0aGUgUEFSVF9CT1VOREFSWSBmbGFnXG5cdFx0XHRcdFx0XHRcdFx0ZmxhZ3MgJj0gfkYuUEFSVF9CT1VOREFSWTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjaygnb25QYXJ0RW5kJyk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soJ29uUGFydEJlZ2luJyk7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGUgPSBTLkhFQURFUl9GSUVMRF9TVEFSVDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChmbGFncyAmIEYuTEFTVF9CT1VOREFSWSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoYyA9PT0gSFlQSEVOKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soJ29uUGFydEVuZCcpO1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlID0gUy5FTkQ7XG5cdFx0XHRcdFx0XHRcdFx0ZmxhZ3MgPSAwO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHdoZW4gbWF0Y2hpbmcgYSBwb3NzaWJsZSBib3VuZGFyeSwga2VlcCBhIGxvb2tiZWhpbmQgcmVmZXJlbmNlXG5cdFx0XHRcdFx0XHQvLyBpbiBjYXNlIGl0IHR1cm5zIG91dCB0byBiZSBhIGZhbHNlIGxlYWRcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmRbaW5kZXggLSAxXSA9IGM7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcmV2aW91c0luZGV4ID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gaWYgb3VyIGJvdW5kYXJ5IHR1cm5lZCBvdXQgdG8gYmUgcnViYmlzaCwgdGhlIGNhcHR1cmVkIGxvb2tiZWhpbmRcblx0XHRcdFx0XHRcdC8vIGJlbG9uZ3MgdG8gcGFydERhdGFcblx0XHRcdFx0XHRcdGNvbnN0IF9sb29rYmVoaW5kID0gbmV3IFVpbnQ4QXJyYXkobG9va2JlaGluZC5idWZmZXIsIGxvb2tiZWhpbmQuYnl0ZU9mZnNldCwgbG9va2JlaGluZC5ieXRlTGVuZ3RoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCdvblBhcnREYXRhJywgMCwgcHJldmlvdXNJbmRleCwgX2xvb2tiZWhpbmQpO1xuXHRcdFx0XHRcdFx0cHJldmlvdXNJbmRleCA9IDA7XG5cdFx0XHRcdFx0XHRtYXJrKCdvblBhcnREYXRhJyk7XG5cblx0XHRcdFx0XHRcdC8vIHJlY29uc2lkZXIgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGV2ZW4gc28gaXQgaW50ZXJydXB0ZWQgdGhlIHNlcXVlbmNlXG5cdFx0XHRcdFx0XHQvLyBpdCBjb3VsZCBiZSB0aGUgYmVnaW5uaW5nIG9mIGEgbmV3IHNlcXVlbmNlXG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUy5FTkQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHN0YXRlIGVudGVyZWQ6ICR7c3RhdGV9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGF0YUNhbGxiYWNrKCdvbkhlYWRlckZpZWxkJyk7XG5cdFx0ZGF0YUNhbGxiYWNrKCdvbkhlYWRlclZhbHVlJyk7XG5cdFx0ZGF0YUNhbGxiYWNrKCdvblBhcnREYXRhJyk7XG5cblx0XHQvLyBVcGRhdGUgcHJvcGVydGllcyBmb3IgdGhlIG5leHQgY2FsbFxuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLnN0YXRlID0gc3RhdGU7XG5cdFx0dGhpcy5mbGFncyA9IGZsYWdzO1xuXHR9XG5cblx0ZW5kKCkge1xuXHRcdGlmICgodGhpcy5zdGF0ZSA9PT0gUy5IRUFERVJfRklFTERfU1RBUlQgJiYgdGhpcy5pbmRleCA9PT0gMCkgfHxcblx0XHRcdCh0aGlzLnN0YXRlID09PSBTLlBBUlRfREFUQSAmJiB0aGlzLmluZGV4ID09PSB0aGlzLmJvdW5kYXJ5Lmxlbmd0aCkpIHtcblx0XHRcdHRoaXMub25QYXJ0RW5kKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0YXRlICE9PSBTLkVORCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNdWx0aXBhcnRQYXJzZXIuZW5kKCk6IHN0cmVhbSBlbmRlZCB1bmV4cGVjdGVkbHknKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gX2ZpbGVOYW1lKGhlYWRlclZhbHVlKSB7XG5cdC8vIG1hdGNoZXMgZWl0aGVyIGEgcXVvdGVkLXN0cmluZyBvciBhIHRva2VuIChSRkMgMjYxNiBzZWN0aW9uIDE5LjUuMSlcblx0Y29uc3QgbSA9IGhlYWRlclZhbHVlLm1hdGNoKC9cXGJmaWxlbmFtZT0oXCIoLio/KVwifChbXigpPD5ALDs6XFxcXFwiL1tcXF0/PXt9XFxzXFx0XSspKSgkfDtcXHMpL2kpO1xuXHRpZiAoIW0pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtYXRjaCA9IG1bMl0gfHwgbVszXSB8fCAnJztcblx0bGV0IGZpbGVuYW1lID0gbWF0Y2guc2xpY2UobWF0Y2gubGFzdEluZGV4T2YoJ1xcXFwnKSArIDEpO1xuXHRmaWxlbmFtZSA9IGZpbGVuYW1lLnJlcGxhY2UoLyUyMi9nLCAnXCInKTtcblx0ZmlsZW5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC8mIyhcXGR7NH0pOy9nLCAobSwgY29kZSkgPT4ge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuXHR9KTtcblx0cmV0dXJuIGZpbGVuYW1lO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9Gb3JtRGF0YShCb2R5LCBjdCkge1xuXHRpZiAoIS9tdWx0aXBhcnQvaS50ZXN0KGN0KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCcpO1xuXHR9XG5cblx0Y29uc3QgbSA9IGN0Lm1hdGNoKC9ib3VuZGFyeT0oPzpcIihbXlwiXSspXCJ8KFteO10rKSkvaSk7XG5cblx0aWYgKCFtKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm8gb3IgYmFkIGNvbnRlbnQtdHlwZSBoZWFkZXIsIG5vIG11bHRpcGFydCBib3VuZGFyeScpO1xuXHR9XG5cblx0Y29uc3QgcGFyc2VyID0gbmV3IE11bHRpcGFydFBhcnNlcihtWzFdIHx8IG1bMl0pO1xuXG5cdGxldCBoZWFkZXJGaWVsZDtcblx0bGV0IGhlYWRlclZhbHVlO1xuXHRsZXQgZW50cnlWYWx1ZTtcblx0bGV0IGVudHJ5TmFtZTtcblx0bGV0IGNvbnRlbnRUeXBlO1xuXHRsZXQgZmlsZW5hbWU7XG5cdGNvbnN0IGVudHJ5Q2h1bmtzID0gW107XG5cdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0Y29uc3Qgb25QYXJ0RGF0YSA9IHVpOGEgPT4ge1xuXHRcdGVudHJ5VmFsdWUgKz0gZGVjb2Rlci5kZWNvZGUodWk4YSwge3N0cmVhbTogdHJ1ZX0pO1xuXHR9O1xuXG5cdGNvbnN0IGFwcGVuZFRvRmlsZSA9IHVpOGEgPT4ge1xuXHRcdGVudHJ5Q2h1bmtzLnB1c2godWk4YSk7XG5cdH07XG5cblx0Y29uc3QgYXBwZW5kRmlsZVRvRm9ybURhdGEgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZmlsZSA9IG5ldyBGaWxlKGVudHJ5Q2h1bmtzLCBmaWxlbmFtZSwge3R5cGU6IGNvbnRlbnRUeXBlfSk7XG5cdFx0Zm9ybURhdGEuYXBwZW5kKGVudHJ5TmFtZSwgZmlsZSk7XG5cdH07XG5cblx0Y29uc3QgYXBwZW5kRW50cnlUb0Zvcm1EYXRhID0gKCkgPT4ge1xuXHRcdGZvcm1EYXRhLmFwcGVuZChlbnRyeU5hbWUsIGVudHJ5VmFsdWUpO1xuXHR9O1xuXG5cdGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG5cdGRlY29kZXIuZGVjb2RlKCk7XG5cblx0cGFyc2VyLm9uUGFydEJlZ2luID0gZnVuY3Rpb24gKCkge1xuXHRcdHBhcnNlci5vblBhcnREYXRhID0gb25QYXJ0RGF0YTtcblx0XHRwYXJzZXIub25QYXJ0RW5kID0gYXBwZW5kRW50cnlUb0Zvcm1EYXRhO1xuXG5cdFx0aGVhZGVyRmllbGQgPSAnJztcblx0XHRoZWFkZXJWYWx1ZSA9ICcnO1xuXHRcdGVudHJ5VmFsdWUgPSAnJztcblx0XHRlbnRyeU5hbWUgPSAnJztcblx0XHRjb250ZW50VHlwZSA9ICcnO1xuXHRcdGZpbGVuYW1lID0gbnVsbDtcblx0XHRlbnRyeUNodW5rcy5sZW5ndGggPSAwO1xuXHR9O1xuXG5cdHBhcnNlci5vbkhlYWRlckZpZWxkID0gZnVuY3Rpb24gKHVpOGEpIHtcblx0XHRoZWFkZXJGaWVsZCArPSBkZWNvZGVyLmRlY29kZSh1aThhLCB7c3RyZWFtOiB0cnVlfSk7XG5cdH07XG5cblx0cGFyc2VyLm9uSGVhZGVyVmFsdWUgPSBmdW5jdGlvbiAodWk4YSkge1xuXHRcdGhlYWRlclZhbHVlICs9IGRlY29kZXIuZGVjb2RlKHVpOGEsIHtzdHJlYW06IHRydWV9KTtcblx0fTtcblxuXHRwYXJzZXIub25IZWFkZXJFbmQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aGVhZGVyVmFsdWUgKz0gZGVjb2Rlci5kZWNvZGUoKTtcblx0XHRoZWFkZXJGaWVsZCA9IGhlYWRlckZpZWxkLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiAoaGVhZGVyRmllbGQgPT09ICdjb250ZW50LWRpc3Bvc2l0aW9uJykge1xuXHRcdFx0Ly8gbWF0Y2hlcyBlaXRoZXIgYSBxdW90ZWQtc3RyaW5nIG9yIGEgdG9rZW4gKFJGQyAyNjE2IHNlY3Rpb24gMTkuNS4xKVxuXHRcdFx0Y29uc3QgbSA9IGhlYWRlclZhbHVlLm1hdGNoKC9cXGJuYW1lPShcIihbXlwiXSopXCJ8KFteKCk8PkAsOzpcXFxcXCIvW1xcXT89e31cXHNcXHRdKykpL2kpO1xuXG5cdFx0XHRpZiAobSkge1xuXHRcdFx0XHRlbnRyeU5hbWUgPSBtWzJdIHx8IG1bM10gfHwgJyc7XG5cdFx0XHR9XG5cblx0XHRcdGZpbGVuYW1lID0gX2ZpbGVOYW1lKGhlYWRlclZhbHVlKTtcblxuXHRcdFx0aWYgKGZpbGVuYW1lKSB7XG5cdFx0XHRcdHBhcnNlci5vblBhcnREYXRhID0gYXBwZW5kVG9GaWxlO1xuXHRcdFx0XHRwYXJzZXIub25QYXJ0RW5kID0gYXBwZW5kRmlsZVRvRm9ybURhdGE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChoZWFkZXJGaWVsZCA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcblx0XHRcdGNvbnRlbnRUeXBlID0gaGVhZGVyVmFsdWU7XG5cdFx0fVxuXG5cdFx0aGVhZGVyVmFsdWUgPSAnJztcblx0XHRoZWFkZXJGaWVsZCA9ICcnO1xuXHR9O1xuXG5cdGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgQm9keSkge1xuXHRcdHBhcnNlci53cml0ZShjaHVuayk7XG5cdH1cblxuXHRwYXJzZXIuZW5kKCk7XG5cblx0cmV0dXJuIGZvcm1EYXRhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
