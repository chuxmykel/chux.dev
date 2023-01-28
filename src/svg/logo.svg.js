import React, { useContext } from "react";

import { ThemeContext } from "../context/theme.context";

export function Logo() {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1191.000000 209.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,209.000000) scale(0.100000,-0.100000)"
        fill={`${theme && theme === "dark" ? "#94A3B8" : "#334155"}`}
        stroke="none"
      >
        <path
          d="M795 1951 c-22 -10 -152 -31 -188 -31 -12 0 -69 -21 -126 -46 -78
-34 -122 -61 -176 -108 -39 -34 -82 -70 -94 -78 -26 -18 -70 -120 -71 -160 0
-15 -11 -57 -25 -94 -24 -64 -25 -74 -25 -313 0 -283 13 -392 53 -461 15 -25
27 -52 27 -60 0 -28 54 -96 129 -163 41 -37 80 -67 86 -67 7 0 33 -11 59 -25
51 -27 113 -44 257 -70 99 -18 106 -17 479 21 100 10 110 14 160 64 28 27 72
61 98 74 48 24 162 144 162 170 0 7 18 60 40 119 22 58 40 114 40 124 0 10
-16 31 -36 47 l-37 29 -111 -6 c-85 -5 -126 -3 -171 8 -41 11 -67 13 -89 6
-17 -5 -61 -12 -97 -16 l-67 -6 -16 -42 c-9 -23 -31 -59 -49 -81 -27 -31 -42
-40 -80 -46 -55 -8 -144 6 -168 27 -24 20 -46 88 -54 163 -8 81 -8 64 1 259 7
155 9 166 36 217 35 64 44 70 125 79 61 7 63 6 118 -32 47 -32 58 -46 72 -90
11 -35 24 -55 40 -62 30 -14 121 -14 233 -1 67 8 97 7 140 -5 91 -24 125 -20
154 18 24 31 26 42 26 135 0 102 0 102 -34 139 -18 21 -41 52 -50 70 -9 18
-24 37 -35 42 -10 6 -53 44 -97 85 -43 42 -86 76 -95 76 -10 0 -50 13 -90 30
-46 18 -92 30 -121 30 -26 0 -78 7 -116 15 -94 19 -193 27 -217 16z m39 -78
c5 -18 15 -33 23 -33 8 0 11 -5 7 -11 -3 -6 -19 -9 -35 -5 -22 4 -29 2 -29 -9
0 -8 5 -15 10 -15 30 0 27 -71 -4 -93 -6 -4 3 -6 19 -5 27 3 30 0 29 -24 -2
-52 -4 -58 -19 -58 -8 0 -15 -5 -15 -11 0 -13 -60 -2 -77 15 -13 11 -7 56 7
56 4 0 11 -10 14 -22 6 -22 7 -22 20 -5 11 14 12 24 3 48 -7 16 -13 25 -16 18
-2 -6 -12 8 -22 31 -20 45 -19 51 23 93 13 12 16 26 12 43 -6 23 -4 25 17 22
16 -2 26 -12 33 -35z m61 14 c13 4 16 3 11 -6 -5 -8 3 -16 23 -24 19 -7 31
-18 31 -29 0 -10 4 -18 9 -18 4 0 14 -27 21 -60 7 -33 17 -60 21 -60 5 0 9 -6
9 -14 0 -23 39 -30 60 -11 15 13 16 20 6 40 -10 22 -12 23 -23 9 -14 -19 -28
-12 -36 16 -3 13 0 20 8 20 7 0 15 5 17 11 3 9 10 9 27 -1 24 -12 24 -12 18
26 -4 20 -11 41 -18 44 -15 10 6 50 26 50 18 0 19 -12 4 -27 -14 -14 -3 -34
15 -27 7 3 16 -2 20 -11 3 -9 -1 -18 -10 -22 -11 -4 -13 -13 -9 -35 4 -17 2
-35 -5 -43 -14 -17 -5 -35 17 -35 11 0 14 -6 10 -21 -3 -12 -2 -32 4 -45 7
-19 5 -26 -8 -31 -9 -4 -21 0 -27 9 -15 20 -86 51 -86 37 0 -6 -4 -7 -10 -4
-5 3 -10 13 -10 22 0 9 -10 24 -21 34 -14 12 -20 26 -16 39 7 29 -6 25 -32
-11 -13 -17 -25 -28 -29 -25 -12 13 -10 55 4 60 8 3 14 13 14 22 0 10 -5 14
-15 10 -12 -4 -15 3 -15 30 0 27 -7 41 -25 56 -14 11 -25 24 -25 30 0 7 5 7
14 -1 7 -6 22 -8 31 -4z"
        />
        <path
          d="M8332 1926 c-29 -33 -29 -35 -19 -92 5 -33 10 -72 10 -89 1 -30 -19
-212 -30 -273 -5 -33 -5 -33 -27 -14 -11 11 -52 30 -90 42 -60 20 -83 22 -195
18 -118 -4 -130 -6 -189 -36 -88 -46 -224 -177 -240 -234 -61 -206 -55 -544
12 -715 31 -79 68 -126 136 -172 31 -20 69 -47 86 -59 26 -20 47 -24 151 -29
82 -4 142 -2 185 7 59 12 153 55 190 87 15 13 20 10 57 -30 40 -44 43 -45 121
-51 44 -4 122 -3 173 3 50 6 117 13 148 16 l57 6 12 44 c9 34 10 59 1 107 -6
39 -10 197 -9 408 1 220 -2 365 -10 401 -8 44 -8 66 2 100 22 73 27 169 15
269 -7 52 -13 129 -13 172 -1 63 -5 82 -24 108 -18 24 -28 29 -45 24 -35 -11
-349 -7 -380 5 -43 17 -52 14 -85 -23z m-105 -856 l60 -21 16 -58 c13 -47 14
-74 6 -151 -14 -142 -35 -162 -135 -132 -54 16 -61 22 -80 62 -17 36 -20 58
-17 110 6 90 30 172 56 192 27 22 22 22 94 -2z"
        />
        <path
          d="M3060 1924 c-52 -7 -127 -16 -166 -20 -70 -7 -71 -7 -84 -43 -26 -70
-29 -123 -13 -214 12 -69 13 -99 5 -142 -7 -35 -8 -65 -2 -87 14 -47 13 -48
-18 -42 -16 3 -69 1 -118 -4 -49 -6 -120 -7 -159 -4 l-70 7 1 30 c5 84 5 134
1 288 -4 149 -7 170 -23 183 -60 47 -57 47 -237 45 -94 0 -206 -4 -247 -8
l-75 -8 -3 -105 c-6 -251 -13 -567 -12 -585 4 -123 -1 -303 -10 -353 -9 -51
-8 -71 5 -114 16 -56 21 -269 7 -310 -5 -13 -6 -47 -4 -75 4 -52 5 -53 48 -72
39 -18 54 -19 125 -11 45 5 90 12 100 15 10 3 36 1 59 -5 31 -8 58 -8 118 4
42 9 95 18 116 22 l39 5 -9 77 c-9 88 -9 202 1 350 l7 102 47 1 c25 1 91 1
146 -1 55 -1 115 -3 133 -3 l32 0 -1 -156 c0 -86 -4 -178 -8 -205 -7 -39 -4
-62 11 -106 l19 -57 77 -14 c49 -9 143 -14 258 -14 196 1 214 5 214 52 0 14 7
51 15 83 12 46 13 73 5 127 -6 47 -6 82 1 108 8 28 8 60 -1 116 -11 67 -10 84
5 129 11 32 15 67 12 93 -24 185 -28 266 -17 333 8 52 8 103 0 195 -13 141
-13 240 1 276 11 30 11 64 0 82 -9 14 -167 51 -211 49 -14 0 -68 -7 -120 -14z
m172 -376 c1 -7 2 -24 2 -38 1 -26 2 -26 71 -18 37 4 46 -24 17 -55 -11 -12
-23 -32 -27 -44 -3 -13 -10 -23 -15 -23 -16 0 -29 34 -19 52 6 10 5 19 -1 23
-5 3 -15 -5 -22 -20 -10 -21 -8 -32 10 -65 l21 -40 -25 0 c-15 0 -24 6 -24 15
0 8 -6 15 -14 15 -9 0 -12 7 -9 20 3 11 0 20 -6 20 -17 0 -8 51 11 61 18 10
15 36 -7 54 -8 7 -9 18 -4 33 9 23 38 30 41 10z m-17 -556 c5 -18 13 -32 17
-32 4 0 8 -8 8 -17 1 -17 1 -17 11 0 8 13 7 24 -5 42 -20 31 -20 35 3 35 10 0
22 -8 26 -17 6 -16 8 -15 16 5 9 24 16 26 38 13 13 -8 13 -18 1 -68 -14 -61
-14 -86 1 -91 17 -7 9 -40 -10 -45 -14 -3 -21 -17 -26 -50 -6 -38 -12 -47 -34
-55 -28 -10 -51 -6 -51 8 0 5 8 11 18 14 9 3 22 16 27 28 6 13 16 22 23 21 14
-3 16 13 3 21 -12 8 -61 -17 -61 -31 0 -7 -7 -13 -15 -13 -8 0 -15 5 -15 10 0
6 -5 10 -11 10 -8 0 -7 -5 1 -15 10 -12 10 -19 2 -27 -7 -7 -12 -22 -12 -35 0
-27 -25 -30 -54 -8 -17 13 -18 18 -8 40 16 34 15 45 -3 45 -8 0 -15 4 -15 9 0
25 68 37 85 15 9 -13 18 -11 65 13 30 16 56 36 58 44 4 24 -107 77 -147 70
-12 -2 -12 0 -3 12 7 8 23 12 40 10 25 -4 25 -3 10 10 -21 16 -25 71 -5 65 6
-3 16 -19 22 -36z m-265 -305 c0 -7 -5 -18 -11 -24 -7 -7 -5 -15 7 -27 13 -14
15 -22 6 -42 -9 -19 -9 -24 2 -24 8 0 17 6 19 13 4 9 8 8 16 -3 8 -12 12 -9
20 13 12 31 19 33 36 10 11 -15 15 -15 29 -4 14 11 16 11 16 -3 0 -12 6 -16
18 -12 9 3 24 1 32 -4 13 -8 13 -10 -1 -10 -12 0 -15 -7 -11 -25 5 -31 -21
-44 -51 -25 -18 11 -23 10 -38 -9 -18 -21 -39 -28 -39 -12 0 5 7 12 16 15 8 3
13 10 10 15 -6 9 -33 8 -101 -5 -36 -7 -39 -6 -26 9 8 10 14 47 16 89 4 87 2
78 20 78 8 0 15 -6 15 -13z"
        />
        <path
          d="M4055 1925 c-47 -8 -127 -11 -195 -8 -77 3 -132 0 -165 -9 -49 -13
-50 -14 -63 -63 -9 -36 -11 -91 -7 -195 4 -86 2 -166 -4 -197 -8 -42 -7 -59 6
-90 13 -32 14 -51 5 -118 -12 -100 -8 -400 7 -438 6 -16 11 -46 11 -67 0 -66
69 -200 141 -275 54 -56 74 -69 168 -108 113 -48 239 -82 336 -93 95 -10 307
13 379 41 33 13 81 29 106 35 25 7 80 32 123 57 70 41 80 51 113 111 20 37 50
87 67 112 16 25 35 61 40 80 5 19 11 159 13 310 2 151 8 296 14 323 9 46 2
163 -19 289 -4 26 -3 76 2 112 6 39 7 85 1 118 l-9 53 -158 7 c-86 4 -182 12
-212 18 -54 11 -102 5 -160 -22 -24 -11 -61 -90 -51 -107 4 -5 7 -216 7 -469
0 -433 -1 -461 -20 -504 -18 -43 -23 -47 -85 -68 l-65 -21 -65 36 c-35 19 -69
41 -75 49 -6 7 -17 70 -25 140 -11 107 -11 143 0 229 10 74 11 119 4 164 -6
34 -9 164 -8 288 l2 225 -34 35 c-19 19 -36 34 -39 34 -4 -1 -42 -7 -86 -14z
m850 -437 c14 -6 25 -17 25 -25 0 -17 47 -17 54 0 3 8 8 7 16 -5 12 -19 55
-24 79 -9 8 5 11 16 6 31 -5 16 -3 21 6 18 7 -2 14 -23 15 -47 2 -42 2 -42
-27 -36 -22 5 -29 3 -29 -9 0 -16 -15 -22 -23 -8 -3 4 -20 7 -39 6 -25 -1 -34
-6 -36 -22 -2 -13 4 -25 17 -32 11 -6 25 -19 31 -30 9 -16 6 -24 -14 -41 -30
-26 -25 -42 10 -33 17 4 26 1 30 -10 3 -9 13 -16 21 -16 8 0 11 5 8 11 -8 12
14 99 25 99 13 0 22 -90 11 -104 -6 -8 -9 -21 -5 -30 3 -9 1 -16 -5 -16 -6 0
-11 -4 -11 -10 0 -5 12 -10 26 -10 16 0 23 -4 18 -11 -3 -6 -19 -9 -35 -7 -16
3 -30 0 -32 -6 -2 -6 -12 -11 -23 -11 -14 0 -18 -6 -16 -24 4 -42 -54 -82 -73
-51 -7 12 -46 14 -44 3 1 -5 1 -17 0 -28 -2 -20 -2 -20 -16 -1 -14 19 -16 19
-28 2 -8 -11 -19 -15 -30 -10 -20 7 -23 24 -4 25 6 1 1 4 -13 8 -20 6 -25 13
-24 39 1 18 -2 32 -7 32 -5 0 -9 6 -9 14 0 30 -25 36 -65 16 -39 -20 -55 -19
-55 5 0 18 30 28 46 14 11 -9 14 -7 14 10 0 12 6 21 15 21 8 0 15 -4 15 -10 0
-5 5 -10 11 -10 6 0 8 8 4 19 -4 13 0 23 11 29 13 7 15 17 11 41 -6 29 -5 32
14 26 14 -5 25 -1 35 12 11 13 17 14 20 6 8 -19 22 -16 28 5 5 14 14 17 36 14
21 -3 30 0 31 9 0 8 2 22 4 32 2 11 -3 17 -17 17 -16 0 -19 5 -13 29 5 22 2
32 -13 43 -43 31 -36 48 13 26z m171 -473 c6 -12 7 -32 2 -50 -4 -16 -8 -43
-8 -59 0 -26 -2 -28 -30 -22 -20 4 -30 1 -31 -7 -3 -28 -4 -32 -14 -32 -5 0
-9 8 -8 18 2 11 -6 21 -21 27 -23 8 -56 45 -56 62 0 5 12 8 28 9 24 0 25 1 7
9 -11 5 -29 11 -39 15 -18 5 -17 7 8 21 38 19 54 5 58 -49 2 -29 8 -42 18 -42
11 0 14 9 12 33 -3 32 -2 33 25 30 34 -4 40 25 6 30 -13 2 -23 10 -23 18 0 22
53 13 66 -11z m-114 -215 c10 0 18 -6 18 -14 0 -19 32 -30 42 -14 4 7 8 21 8
31 0 12 6 17 17 15 27 -5 23 -70 -6 -84 -12 -7 -28 -17 -34 -23 -6 -6 -19 -11
-29 -11 -15 0 -17 -5 -12 -25 5 -19 2 -25 -10 -25 -10 0 -16 9 -16 24 0 13 -7
29 -15 36 -12 10 -15 10 -15 -3 0 -9 -7 -23 -16 -31 -8 -9 -12 -20 -9 -26 3
-5 -1 -10 -9 -10 -25 0 -19 -18 7 -22 17 -2 21 -9 19 -27 -4 -35 -10 -37 -33
-12 -15 16 -28 21 -45 17 -13 -4 -24 -2 -24 2 0 13 -48 2 -61 -14 -6 -8 -18
-14 -25 -14 -19 0 -18 26 1 34 8 3 15 17 15 31 0 15 -4 24 -9 20 -5 -3 -12 -1
-16 5 -3 5 3 10 13 10 11 0 25 7 32 15 22 26 31 16 16 -19 -8 -19 -12 -37 -8
-40 10 -11 22 -6 22 9 0 8 9 15 20 15 26 0 76 56 72 81 -2 14 3 19 21 19 28 0
41 22 31 54 -5 17 -4 19 7 9 7 -7 21 -13 31 -13z"
        />
        <path
          d="M9618 1535 c-2 -3 -60 -19 -127 -35 -105 -26 -133 -37 -194 -80 -75
-51 -105 -83 -174 -185 -33 -50 -44 -78 -62 -167 -11 -59 -21 -120 -21 -137 0
-16 -4 -32 -9 -36 -13 -8 -4 -63 30 -175 15 -52 30 -111 34 -131 3 -24 25 -59
65 -106 91 -109 220 -174 412 -209 99 -18 146 -16 348 15 68 11 255 92 294
129 42 40 117 158 119 189 4 60 -148 105 -242 72 -24 -8 -61 -8 -143 0 -97 11
-113 10 -135 -4 -13 -9 -53 -27 -89 -41 l-64 -24 -14 28 c-8 15 -15 47 -17 71
l-4 43 105 -1 c58 0 135 3 172 7 37 4 140 5 230 1 110 -4 174 -3 198 5 31 10
35 15 43 61 6 35 4 76 -7 135 -8 47 -18 104 -21 128 -11 83 -50 158 -127 242
-106 117 -142 135 -325 165 -50 8 -110 22 -133 30 -40 14 -131 21 -142 10z
m152 -395 c22 -27 30 -48 28 -67 l-3 -28 -75 4 c-41 2 -81 8 -88 14 -8 6 -12
26 -10 51 3 38 6 41 43 52 62 19 71 17 105 -26z"
        />
        <path
          d="M5645 1509 c-38 -4 -119 -8 -180 -8 -60 0 -115 0 -122 0 -6 -1 -21
-17 -33 -36 -23 -38 -21 -49 27 -111 12 -17 23 -36 23 -42 0 -7 22 -37 50 -67
27 -30 61 -78 76 -107 14 -29 36 -64 49 -78 12 -14 41 -55 63 -92 36 -60 38
-68 25 -80 -36 -29 -123 -149 -157 -214 -37 -73 -63 -108 -163 -223 -35 -39
-63 -76 -63 -81 0 -5 15 -25 33 -44 l32 -36 192 -1 c156 0 202 3 250 17 74 23
74 22 122 102 22 37 54 83 70 102 l30 35 17 -24 c9 -13 41 -50 70 -83 29 -33
56 -68 59 -78 3 -10 27 -31 53 -46 l47 -26 214 0 c195 1 217 2 240 20 39 29
38 58 -2 101 -37 39 -97 124 -97 138 0 17 -146 226 -174 248 -23 19 -76 104
-76 122 0 10 14 31 30 47 16 16 39 48 50 71 11 23 30 51 41 61 20 18 89 148
89 169 1 5 21 25 45 44 31 25 49 50 64 89 l21 54 -22 27 -23 27 -210 -1 -210
0 -40 -29 c-47 -34 -122 -121 -148 -173 l-19 -36 -18 28 c-10 16 -26 32 -34
37 -8 5 -31 37 -50 71 -57 100 -107 122 -241 106z"
        />
        <path
          d="M10407 1479 l-32 -27 22 -18 c12 -12 31 -53 46 -104 37 -127 75 -229
96 -258 10 -15 26 -52 36 -82 9 -30 28 -74 41 -96 13 -23 28 -63 34 -90 6 -27
28 -76 49 -109 27 -42 42 -80 50 -124 8 -46 19 -76 41 -102 16 -21 42 -69 56
-107 l26 -70 104 -7 c57 -4 134 -4 171 1 38 4 98 7 134 5 l67 -3 15 44 c9 23
23 68 31 99 9 31 23 62 32 70 29 24 71 93 79 129 12 59 55 173 79 210 12 19
28 62 35 95 7 33 21 75 32 93 10 18 19 37 19 43 0 5 15 33 34 62 19 28 38 70
42 92 4 22 20 75 36 118 33 91 34 107 10 137 -18 22 -23 22 -223 23 -112 0
-213 -3 -224 -7 -29 -9 -120 -215 -144 -326 -4 -19 -18 -57 -30 -85 -13 -27
-29 -71 -37 -97 -8 -26 -18 -49 -23 -52 -14 -9 -69 136 -79 212 -6 43 -22 96
-40 132 -17 33 -34 75 -38 92 -3 18 -22 51 -40 74 -31 38 -40 42 -97 49 -34 4
-133 8 -220 9 -158 1 -159 1 -190 -25z"
        />
        <path
          d="M6970 823 c-65 -4 -148 -24 -161 -40 -8 -9 -9 -48 -1 -137 8 -101 7
-139 -5 -197 -14 -65 -13 -75 2 -109 9 -21 29 -44 43 -51 34 -19 158 -15 222
6 43 14 54 15 97 2 40 -11 56 -12 97 -1 27 7 53 17 59 23 11 11 29 200 29 296
0 47 -8 77 -34 135 l-34 75 -135 0 c-74 0 -154 -1 -179 -2z m139 -246 c10 15
11 12 5 -15 -5 -31 -4 -33 15 -27 17 5 21 2 21 -14 0 -12 -4 -21 -8 -21 -4 0
-13 -13 -19 -30 -6 -16 -20 -33 -30 -36 -54 -17 -73 -48 -24 -38 33 7 43 -10
19 -34 -37 -37 -102 22 -71 64 8 10 16 18 19 16 9 -5 62 28 68 43 8 23 -21 31
-43 11 -26 -24 -45 -21 -37 7 3 12 6 25 6 30 0 4 7 7 15 7 17 0 19 9 6 30 -17
25 0 32 24 10 22 -21 24 -21 34 -3z"
        />
      </g>
    </svg>
  );
}

export default Logo;