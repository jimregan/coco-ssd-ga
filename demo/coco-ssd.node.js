/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tfconv = require('@tensorflow/tfjs-converter');
var tf = require('@tensorflow/tfjs-core');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var CLASSES = {
    1: {
        name: '/m/01g317',
        id: 1,
        displayName: 'duine',
    },
    2: {
        name: '/m/0199g',
        id: 2,
        displayName: 'rothar',
    },
    3: {
        name: '/m/0k4j',
        id: 3,
        displayName: 'carr',
    },
    4: {
        name: '/m/04_sv',
        id: 4,
        displayName: 'gluaisrothar',
    },
    5: {
        name: '/m/05czz6l',
        id: 5,
        displayName: 'eitleán',
    },
    6: {
        name: '/m/01bjv',
        id: 6,
        displayName: 'bus',
    },
    7: {
        name: '/m/07jdr',
        id: 7,
        displayName: 'traein',
    },
    8: {
        name: '/m/07r04',
        id: 8,
        displayName: 'leoraí',
    },
    9: {
        name: '/m/019jd',
        id: 9,
        displayName: 'bád',
    },
    10: {
        name: '/m/015qff',
        id: 10,
        displayName: 'solas tráchta',
    },
    11: {
        name: '/m/01pns0',
        id: 11,
        displayName: 'hiodrant dóiteáin',
    },
    13: {
        name: '/m/02pv19',
        id: 13,
        displayName: 'comhartha stop',
    },
    14: {
        name: '/m/015qbp',
        id: 14,
        displayName: 'méadar páirceála',
    },
    15: {
        name: '/m/0cvnqh',
        id: 15,
        displayName: 'binse',
    },
    16: {
        name: '/m/015p6',
        id: 16,
        displayName: 'éan',
    },
    17: {
        name: '/m/01yrx',
        id: 17,
        displayName: 'cat',
    },
    18: {
        name: '/m/0bt9lr',
        id: 18,
        displayName: 'madra',
    },
    19: {
        name: '/m/03k3r',
        id: 19,
        displayName: 'capall',
    },
    20: {
        name: '/m/07bgp',
        id: 20,
        displayName: 'caora',
    },
    21: {
        name: '/m/01xq0k1',
        id: 21,
        displayName: 'bó',
    },
    22: {
        name: '/m/0bwd_0j',
        id: 22,
        displayName: 'eilifint',
    },
    23: {
        name: '/m/01dws',
        id: 23,
        displayName: 'béar',
    },
    24: {
        name: '/m/0898b',
        id: 24,
        displayName: 'séabra',
    },
    25: {
        name: '/m/03bk1',
        id: 25,
        displayName: 'sioráf',
    },
    27: {
        name: '/m/01940j',
        id: 27,
        displayName: 'mála droma',
    },
    28: {
        name: '/m/0hnnb',
        id: 28,
        displayName: 'scáth fearthainne',
    },
    31: {
        name: '/m/080hkjn',
        id: 31,
        displayName: 'mála láimhe',
    },
    32: {
        name: '/m/01rkbr',
        id: 32,
        displayName: 'carbhat',
    },
    33: {
        name: '/m/01s55n',
        id: 33,
        displayName: 'cás',
    },
    34: {
        name: '/m/02wmf',
        id: 34,
        displayName: 'friosbaí',
    },
    35: {
        name: '/m/071p9',
        id: 35,
        displayName: 'scíonna',
    },
    36: {
        name: '/m/06__v',
        id: 36,
        displayName: 'clár sneachta',
    },
    37: {
        name: '/m/018xm',
        id: 37,
        displayName: 'liathróid',
    },
    38: {
        name: '/m/02zt3',
        id: 38,
        displayName: 'eitleog',
    },
    39: {
        name: '/m/03g8mr',
        id: 39,
        displayName: 'slacán daorchluiche',
    },
    40: {
        name: '/m/03grzl',
        id: 40,
        displayName: 'miteog',
    },
    41: {
        name: '/m/06_fw',
        id: 41,
        displayName: 'clár scátála',
    },
    42: {
        name: '/m/019w40',
        id: 42,
        displayName: 'clár surfála',
    },
    43: {
        name: '/m/0dv9c',
        id: 43,
        displayName: 'raicéad leadóige',
    },
    44: {
        name: '/m/04dr76w',
        id: 44,
        displayName: 'buidéal',
    },
    46: {
        name: '/m/09tvcd',
        id: 46,
        displayName: 'gloine fíona',
    },
    47: {
        name: '/m/08gqpm',
        id: 47,
        displayName: 'cupán',
    },
    48: {
        name: '/m/0dt3t',
        id: 48,
        displayName: 'forc',
    },
    49: {
        name: '/m/04ctx',
        id: 49,
        displayName: 'scian',
    },
    50: {
        name: '/m/0cmx8',
        id: 50,
        displayName: 'spúnóg',
    },
    51: {
        name: '/m/04kkgm',
        id: 51,
        displayName: 'babhla',
    },
    52: {
        name: '/m/09qck',
        id: 52,
        displayName: 'banana',
    },
    53: {
        name: '/m/014j1m',
        id: 53,
        displayName: 'úll',
    },
    54: {
        name: '/m/0l515',
        id: 54,
        displayName: 'ceapaire',
    },
    55: {
        name: '/m/0cyhj_',
        id: 55,
        displayName: 'oráiste',
    },
    56: {
        name: '/m/0hkxq',
        id: 56,
        displayName: 'brocailí',
    },
    57: {
        name: '/m/0fj52s',
        id: 57,
        displayName: 'cairéad',
    },
    58: {
        name: '/m/01b9xk',
        id: 58,
        displayName: 'madra te',
    },
    59: {
        name: '/m/0663v',
        id: 59,
        displayName: 'píotsa',
    },
    60: {
        name: '/m/0jy4k',
        id: 60,
        displayName: 'taoschnó',
    },
    61: {
        name: '/m/0fszt',
        id: 61,
        displayName: 'cáca',
    },
    62: {
        name: '/m/01mzpv',
        id: 62,
        displayName: 'cathaoir',
    },
    63: {
        name: '/m/02crq1',
        id: 63,
        displayName: 'tolg',
    },
    64: {
        name: '/m/03fp41',
        id: 64,
        displayName: 'planda pota',
    },
    65: {
        name: '/m/03ssj5',
        id: 65,
        displayName: 'leaba',
    },
    67: {
        name: '/m/04bcr3',
        id: 67,
        displayName: 'bord seomra bia',
    },
    70: {
        name: '/m/09g1w',
        id: 70,
        displayName: 'leithreas',
    },
    72: {
        name: '/m/07c52',
        id: 72,
        displayName: 'teilifís',
    },
    73: {
        name: '/m/01c648',
        id: 73,
        displayName: 'ríomhaire glúine',
    },
    74: {
        name: '/m/020lf',
        id: 74,
        displayName: 'luch',
    },
    75: {
        name: '/m/0qjjc',
        id: 75,
        displayName: 'cianrialtán',
    },
    76: {
        name: '/m/01m2v',
        id: 76,
        displayName: 'méarchlár',
    },
    77: {
        name: '/m/050k8',
        id: 77,
        displayName: 'fón póca',
    },
    78: {
        name: '/m/0fx9l',
        id: 78,
        displayName: 'micreathonnán',
    },
    79: {
        name: '/m/029bxz',
        id: 79,
        displayName: 'oigheann',
    },
    80: {
        name: '/m/01k6s3',
        id: 80,
        displayName: 'tóstaer',
    },
    81: {
        name: '/m/0130jx',
        id: 81,
        displayName: 'doirteal',
    },
    82: {
        name: '/m/040b_t',
        id: 82,
        displayName: 'cuisneoir',
    },
    84: {
        name: '/m/0bt_c3',
        id: 84,
        displayName: 'leabhar',
    },
    85: {
        name: '/m/01x3z',
        id: 85,
        displayName: 'clog',
    },
    86: {
        name: '/m/02s195',
        id: 86,
        displayName: 'vása',
    },
    87: {
        name: '/m/01lsmm',
        id: 87,
        displayName: 'siosúr',
    },
    88: {
        name: '/m/0kmg4',
        id: 88,
        displayName: 'teidí',
    },
    89: {
        name: '/m/03wvsk',
        id: 89,
        displayName: 'triomadóir gruaige',
    },
    90: {
        name: '/m/012xff',
        id: 90,
        displayName: 'scuab fiacla',
    }
};

/** @license See the LICENSE file. */
// This code is auto-generated, do not modify this file!
var version = '2.1.0';

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var BASE_PATH = 'https://storage.googleapis.com/tfjs-models/savedmodel/';
function load(config) {
    if (config === void 0) { config = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var base, modelUrl, objectDetection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (tf == null) {
                        throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please " +
                            "also include @tensorflow/tfjs on the page before using this model.");
                    }
                    base = config.base || 'lite_mobilenet_v2';
                    modelUrl = config.modelUrl;
                    if (['mobilenet_v1', 'mobilenet_v2', 'lite_mobilenet_v2'].indexOf(base) ===
                        -1) {
                        throw new Error("ObjectDetection constructed with invalid base model " +
                            (base + ". Valid names are 'mobilenet_v1',") +
                            " 'mobilenet_v2' and 'lite_mobilenet_v2'.");
                    }
                    objectDetection = new ObjectDetection(base, modelUrl);
                    return [4 /*yield*/, objectDetection.load()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, objectDetection];
            }
        });
    });
}
var ObjectDetection = /** @class */ (function () {
    function ObjectDetection(base, modelUrl) {
        this.modelPath =
            modelUrl || "" + BASE_PATH + this.getPrefix(base) + "/model.json";
    }
    ObjectDetection.prototype.getPrefix = function (base) {
        return base === 'lite_mobilenet_v2' ? "ssd" + base : "ssd_" + base;
    };
    ObjectDetection.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, zeroTensor, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, tfconv.loadGraphModel(this.modelPath)];
                    case 1:
                        _a.model = _b.sent();
                        zeroTensor = tf.zeros([1, 300, 300, 3], 'int32');
                        return [4 /*yield*/, this.model.executeAsync(zeroTensor)];
                    case 2:
                        result = _b.sent();
                        return [4 /*yield*/, Promise.all(result.map(function (t) { return t.data(); }))];
                    case 3:
                        _b.sent();
                        result.map(function (t) { return t.dispose(); });
                        zeroTensor.dispose();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Infers through the model.
     *
     * @param img The image to classify. Can be a tensor or a DOM element image,
     * video, or canvas.
     * @param maxNumBoxes The maximum number of bounding boxes of detected
     * objects. There can be multiple objects of the same class, but at different
     * locations. Defaults to 20.
     * @param minScore The minimum score of the returned bounding boxes
     * of detected objects. Value between 0 and 1. Defaults to 0.5.
     */
    ObjectDetection.prototype.infer = function (img, maxNumBoxes, minScore) {
        return __awaiter(this, void 0, void 0, function () {
            var batched, height, width, result, scores, boxes, _a, maxScores, classes, prevBackend, indexTensor, indexes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        batched = tf.tidy(function () {
                            if (!(img instanceof tf.Tensor)) {
                                img = tf.browser.fromPixels(img);
                            }
                            // Reshape to a single-element batch so we can pass it to executeAsync.
                            return img.expandDims(0);
                        });
                        height = batched.shape[1];
                        width = batched.shape[2];
                        return [4 /*yield*/, this.model.executeAsync(batched)];
                    case 1:
                        result = _b.sent();
                        scores = result[0].dataSync();
                        boxes = result[1].dataSync();
                        // clean the webgl tensors
                        batched.dispose();
                        tf.dispose(result);
                        _a = this.calculateMaxScores(scores, result[0].shape[1], result[0].shape[2]), maxScores = _a[0], classes = _a[1];
                        prevBackend = tf.getBackend();
                        // run post process in cpu
                        tf.setBackend('cpu');
                        indexTensor = tf.tidy(function () {
                            var boxes2 = tf.tensor2d(boxes, [result[1].shape[1], result[1].shape[3]]);
                            return tf.image.nonMaxSuppression(boxes2, maxScores, maxNumBoxes, minScore, minScore);
                        });
                        indexes = indexTensor.dataSync();
                        indexTensor.dispose();
                        // restore previous backend
                        tf.setBackend(prevBackend);
                        return [2 /*return*/, this.buildDetectedObjects(width, height, boxes, maxScores, indexes, classes)];
                }
            });
        });
    };
    ObjectDetection.prototype.buildDetectedObjects = function (width, height, boxes, scores, indexes, classes) {
        var count = indexes.length;
        var objects = [];
        for (var i = 0; i < count; i++) {
            var bbox = [];
            for (var j = 0; j < 4; j++) {
                bbox[j] = boxes[indexes[i] * 4 + j];
            }
            var minY = bbox[0] * height;
            var minX = bbox[1] * width;
            var maxY = bbox[2] * height;
            var maxX = bbox[3] * width;
            bbox[0] = minX;
            bbox[1] = minY;
            bbox[2] = maxX - minX;
            bbox[3] = maxY - minY;
            objects.push({
                bbox: bbox,
                class: CLASSES[classes[indexes[i]] + 1].displayName,
                score: scores[indexes[i]]
            });
        }
        return objects;
    };
    ObjectDetection.prototype.calculateMaxScores = function (scores, numBoxes, numClasses) {
        var maxes = [];
        var classes = [];
        for (var i = 0; i < numBoxes; i++) {
            var max = Number.MIN_VALUE;
            var index = -1;
            for (var j = 0; j < numClasses; j++) {
                if (scores[i * numClasses + j] > max) {
                    max = scores[i * numClasses + j];
                    index = j;
                }
            }
            maxes[i] = max;
            classes[i] = index;
        }
        return [maxes, classes];
    };
    /**
     * Detect objects for an image returning a list of bounding boxes with
     * assocated class and score.
     *
     * @param img The image to detect objects from. Can be a tensor or a DOM
     *     element image, video, or canvas.
     * @param maxNumBoxes The maximum number of bounding boxes of detected
     * objects. There can be multiple objects of the same class, but at different
     * locations. Defaults to 20.
     * @param minScore The minimum score of the returned bounding boxes
     * of detected objects. Value between 0 and 1. Defaults to 0.5.
     */
    ObjectDetection.prototype.detect = function (img, maxNumBoxes, minScore) {
        if (maxNumBoxes === void 0) { maxNumBoxes = 20; }
        if (minScore === void 0) { minScore = 0.5; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.infer(img, maxNumBoxes, minScore)];
            });
        });
    };
    /**
     * Dispose the tensors allocated by the model. You should call this when you
     * are done with the model.
     */
    ObjectDetection.prototype.dispose = function () {
        if (this.model != null) {
            this.model.dispose();
        }
    };
    return ObjectDetection;
}());

exports.ObjectDetection = ObjectDetection;
exports.load = load;
exports.version = version;
//# sourceMappingURL=coco-ssd.node.js.map
