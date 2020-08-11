
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

export interface ObjectDetectionClass {
  name: string;
  id: number;
  displayName: string;
}

export const CLASSES: {[key: string]: ObjectDetectionClass} = {
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