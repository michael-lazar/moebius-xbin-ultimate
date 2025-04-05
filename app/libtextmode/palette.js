// This is the standard 4bit palette in bin (binary text) order.
const palette_4bit = [
    // standard 3-4bit colors
    { r: 0x00, g: 0x00, b: 0x00 }, // black
    { r: 0x00, g: 0x00, b: 0xaa }, // blue
    { r: 0x00, g: 0xaa, b: 0x00 }, // green
    { r: 0x00, g: 0xaa, b: 0xaa }, // cyan
    { r: 0xaa, g: 0x00, b: 0x00 }, // red
    { r: 0xaa, g: 0x00, b: 0xaa }, // magenta
    { r: 0xaa, g: 0x55, b: 0x00 }, // yellow
    { r: 0xaa, g: 0xaa, b: 0xaa }, // white
    // high intensity 4bit colors
    { r: 0x55, g: 0x55, b: 0x55 }, // bright black
    { r: 0x55, g: 0x55, b: 0xff }, // bright blue
    { r: 0x55, g: 0xff, b: 0x55 }, // bright green
    { r: 0x55, g: 0xff, b: 0xff }, // bright cyan
    { r: 0xff, g: 0x55, b: 0x55 }, // bright red
    { r: 0xff, g: 0x55, b: 0xff }, // bright magenta
    { r: 0xff, g: 0xff, b: 0x55 }, // bright yellow
    { r: 0xff, g: 0xff, b: 0xff } // bright white
];

// Standard ANSI defines colors in a different order than the order of our
// 4bit palette. We use this mapping to convert into an index that's useful
// for ansi codes.
const palette_4bit_ansi_mapping = {
    1: 4, 4: 1, 9: 12, 12: 9, // flip blue with red
    3: 6, 6: 3, 11: 14, 14: 11 // flip cyan with yellow
};

// This is the standard 8bit palette, also with the first portion being in
// bin (binary text) order to simplify consistency in conversion.
const palette_8bit = [
    // 0-15: standard 4bit palette
    ...palette_4bit,

    // 16-231: 6×6×6 cube (216 colors)
    { r: 0x00, g: 0x00, b: 0x00 },
    { r: 0x00, g: 0x00, b: 0x5f },
    { r: 0x00, g: 0x00, b: 0x87 },
    { r: 0x00, g: 0x00, b: 0xaf },
    { r: 0x00, g: 0x00, b: 0xd7 },
    { r: 0x00, g: 0x00, b: 0xff },
    { r: 0x00, g: 0x5f, b: 0x00 },
    { r: 0x00, g: 0x5f, b: 0x5f },
    { r: 0x00, g: 0x5f, b: 0x87 },
    { r: 0x00, g: 0x5f, b: 0xaf },
    { r: 0x00, g: 0x5f, b: 0xd7 },
    { r: 0x00, g: 0x5f, b: 0xff },
    { r: 0x00, g: 0x87, b: 0x00 },
    { r: 0x00, g: 0x87, b: 0x5f },
    { r: 0x00, g: 0x87, b: 0x87 },
    { r: 0x00, g: 0x87, b: 0xaf },
    { r: 0x00, g: 0x87, b: 0xd7 },
    { r: 0x00, g: 0x87, b: 0xff },
    { r: 0x00, g: 0xaf, b: 0x00 },
    { r: 0x00, g: 0xaf, b: 0x5f },
    { r: 0x00, g: 0xaf, b: 0x87 },
    { r: 0x00, g: 0xaf, b: 0xaf },
    { r: 0x00, g: 0xaf, b: 0xd7 },
    { r: 0x00, g: 0xaf, b: 0xff },
    { r: 0x00, g: 0xd7, b: 0x00 },
    { r: 0x00, g: 0xd7, b: 0x5f },
    { r: 0x00, g: 0xd7, b: 0x87 },
    { r: 0x00, g: 0xd7, b: 0xaf },
    { r: 0x00, g: 0xd7, b: 0xd7 },
    { r: 0x00, g: 0xd7, b: 0xff },
    { r: 0x00, g: 0xff, b: 0x00 },
    { r: 0x00, g: 0xff, b: 0x5f },
    { r: 0x00, g: 0xff, b: 0x87 },
    { r: 0x00, g: 0xff, b: 0xaf },
    { r: 0x00, g: 0xff, b: 0xd7 },
    { r: 0x00, g: 0xff, b: 0xff },
    { r: 0x5f, g: 0x00, b: 0x00 },
    { r: 0x5f, g: 0x00, b: 0x5f },
    { r: 0x5f, g: 0x00, b: 0x87 },
    { r: 0x5f, g: 0x00, b: 0xaf },
    { r: 0x5f, g: 0x00, b: 0xd7 },
    { r: 0x5f, g: 0x00, b: 0xff },
    { r: 0x5f, g: 0x5f, b: 0x00 },
    { r: 0x5f, g: 0x5f, b: 0x5f },
    { r: 0x5f, g: 0x5f, b: 0x87 },
    { r: 0x5f, g: 0x5f, b: 0xaf },
    { r: 0x5f, g: 0x5f, b: 0xd7 },
    { r: 0x5f, g: 0x5f, b: 0xff },
    { r: 0x5f, g: 0x87, b: 0x00 },
    { r: 0x5f, g: 0x87, b: 0x5f },
    { r: 0x5f, g: 0x87, b: 0x87 },
    { r: 0x5f, g: 0x87, b: 0xaf },
    { r: 0x5f, g: 0x87, b: 0xd7 },
    { r: 0x5f, g: 0x87, b: 0xff },
    { r: 0x5f, g: 0xaf, b: 0x00 },
    { r: 0x5f, g: 0xaf, b: 0x5f },
    { r: 0x5f, g: 0xaf, b: 0x87 },
    { r: 0x5f, g: 0xaf, b: 0xaf },
    { r: 0x5f, g: 0xaf, b: 0xd7 },
    { r: 0x5f, g: 0xaf, b: 0xff },
    { r: 0x5f, g: 0xd7, b: 0x00 },
    { r: 0x5f, g: 0xd7, b: 0x5f },
    { r: 0x5f, g: 0xd7, b: 0x87 },
    { r: 0x5f, g: 0xd7, b: 0xaf },
    { r: 0x5f, g: 0xd7, b: 0xd7 },
    { r: 0x5f, g: 0xd7, b: 0xff },
    { r: 0x5f, g: 0xff, b: 0x00 },
    { r: 0x5f, g: 0xff, b: 0x5f },
    { r: 0x5f, g: 0xff, b: 0x87 },
    { r: 0x5f, g: 0xff, b: 0xaf },
    { r: 0x5f, g: 0xff, b: 0xd7 },
    { r: 0x5f, g: 0xff, b: 0xff },
    { r: 0x87, g: 0x00, b: 0x00 },
    { r: 0x87, g: 0x00, b: 0x5f },
    { r: 0x87, g: 0x00, b: 0x87 },
    { r: 0x87, g: 0x00, b: 0xaf },
    { r: 0x87, g: 0x00, b: 0xd7 },
    { r: 0x87, g: 0x00, b: 0xff },
    { r: 0x87, g: 0x5f, b: 0x00 },
    { r: 0x87, g: 0x5f, b: 0x5f },
    { r: 0x87, g: 0x5f, b: 0x87 },
    { r: 0x87, g: 0x5f, b: 0xaf },
    { r: 0x87, g: 0x5f, b: 0xd7 },
    { r: 0x87, g: 0x5f, b: 0xff },
    { r: 0x87, g: 0x87, b: 0x00 },
    { r: 0x87, g: 0x87, b: 0x5f },
    { r: 0x87, g: 0x87, b: 0x87 },
    { r: 0x87, g: 0x87, b: 0xaf },
    { r: 0x87, g: 0x87, b: 0xd7 },
    { r: 0x87, g: 0x87, b: 0xff },
    { r: 0x87, g: 0xaf, b: 0x00 },
    { r: 0x87, g: 0xaf, b: 0x5f },
    { r: 0x87, g: 0xaf, b: 0x87 },
    { r: 0x87, g: 0xaf, b: 0xaf },
    { r: 0x87, g: 0xaf, b: 0xd7 },
    { r: 0x87, g: 0xaf, b: 0xff },
    { r: 0x87, g: 0xd7, b: 0x00 },
    { r: 0x87, g: 0xd7, b: 0x5f },
    { r: 0x87, g: 0xd7, b: 0x87 },
    { r: 0x87, g: 0xd7, b: 0xaf },
    { r: 0x87, g: 0xd7, b: 0xd7 },
    { r: 0x87, g: 0xd7, b: 0xff },
    { r: 0x87, g: 0xff, b: 0x00 },
    { r: 0x87, g: 0xff, b: 0x5f },
    { r: 0x87, g: 0xff, b: 0x87 },
    { r: 0x87, g: 0xff, b: 0xaf },
    { r: 0x87, g: 0xff, b: 0xd7 },
    { r: 0x87, g: 0xff, b: 0xff },
    { r: 0xaf, g: 0x00, b: 0x00 },
    { r: 0xaf, g: 0x00, b: 0x5f },
    { r: 0xaf, g: 0x00, b: 0x87 },
    { r: 0xaf, g: 0x00, b: 0xaf },
    { r: 0xaf, g: 0x00, b: 0xd7 },
    { r: 0xaf, g: 0x00, b: 0xff },
    { r: 0xaf, g: 0x5f, b: 0x00 },
    { r: 0xaf, g: 0x5f, b: 0x5f },
    { r: 0xaf, g: 0x5f, b: 0x87 },
    { r: 0xaf, g: 0x5f, b: 0xaf },
    { r: 0xaf, g: 0x5f, b: 0xd7 },
    { r: 0xaf, g: 0x5f, b: 0xff },
    { r: 0xaf, g: 0x87, b: 0x00 },
    { r: 0xaf, g: 0x87, b: 0x5f },
    { r: 0xaf, g: 0x87, b: 0x87 },
    { r: 0xaf, g: 0x87, b: 0xaf },
    { r: 0xaf, g: 0x87, b: 0xd7 },
    { r: 0xaf, g: 0x87, b: 0xff },
    { r: 0xaf, g: 0xaf, b: 0x00 },
    { r: 0xaf, g: 0xaf, b: 0x5f },
    { r: 0xaf, g: 0xaf, b: 0x87 },
    { r: 0xaf, g: 0xaf, b: 0xaf },
    { r: 0xaf, g: 0xaf, b: 0xd7 },
    { r: 0xaf, g: 0xaf, b: 0xff },
    { r: 0xaf, g: 0xd7, b: 0x00 },
    { r: 0xaf, g: 0xd7, b: 0x5f },
    { r: 0xaf, g: 0xd7, b: 0x87 },
    { r: 0xaf, g: 0xd7, b: 0xaf },
    { r: 0xaf, g: 0xd7, b: 0xd7 },
    { r: 0xaf, g: 0xd7, b: 0xff },
    { r: 0xaf, g: 0xff, b: 0x00 },
    { r: 0xaf, g: 0xff, b: 0x5f },
    { r: 0xaf, g: 0xff, b: 0x87 },
    { r: 0xaf, g: 0xff, b: 0xaf },
    { r: 0xaf, g: 0xff, b: 0xd7 },
    { r: 0xaf, g: 0xff, b: 0xff },
    { r: 0xd7, g: 0x00, b: 0x00 },
    { r: 0xd7, g: 0x00, b: 0x5f },
    { r: 0xd7, g: 0x00, b: 0x87 },
    { r: 0xd7, g: 0x00, b: 0xaf },
    { r: 0xd7, g: 0x00, b: 0xd7 },
    { r: 0xd7, g: 0x00, b: 0xff },
    { r: 0xd7, g: 0x5f, b: 0x00 },
    { r: 0xd7, g: 0x5f, b: 0x5f },
    { r: 0xd7, g: 0x5f, b: 0x87 },
    { r: 0xd7, g: 0x5f, b: 0xaf },
    { r: 0xd7, g: 0x5f, b: 0xd7 },
    { r: 0xd7, g: 0x5f, b: 0xff },
    { r: 0xd7, g: 0x87, b: 0x00 },
    { r: 0xd7, g: 0x87, b: 0x5f },
    { r: 0xd7, g: 0x87, b: 0x87 },
    { r: 0xd7, g: 0x87, b: 0xaf },
    { r: 0xd7, g: 0x87, b: 0xd7 },
    { r: 0xd7, g: 0x87, b: 0xff },
    { r: 0xd7, g: 0xaf, b: 0x00 },
    { r: 0xd7, g: 0xaf, b: 0x5f },
    { r: 0xd7, g: 0xaf, b: 0x87 },
    { r: 0xd7, g: 0xaf, b: 0xaf },
    { r: 0xd7, g: 0xaf, b: 0xd7 },
    { r: 0xd7, g: 0xaf, b: 0xff },
    { r: 0xd7, g: 0xd7, b: 0x00 },
    { r: 0xd7, g: 0xd7, b: 0x5f },
    { r: 0xd7, g: 0xd7, b: 0x87 },
    { r: 0xd7, g: 0xd7, b: 0xaf },
    { r: 0xd7, g: 0xd7, b: 0xd7 },
    { r: 0xd7, g: 0xd7, b: 0xff },
    { r: 0xd7, g: 0xff, b: 0x00 },
    { r: 0xd7, g: 0xff, b: 0x5f },
    { r: 0xd7, g: 0xff, b: 0x87 },
    { r: 0xd7, g: 0xff, b: 0xaf },
    { r: 0xd7, g: 0xff, b: 0xd7 },
    { r: 0xd7, g: 0xff, b: 0xff },
    { r: 0xff, g: 0x00, b: 0x00 },
    { r: 0xff, g: 0x00, b: 0x5f },
    { r: 0xff, g: 0x00, b: 0x87 },
    { r: 0xff, g: 0x00, b: 0xaf },
    { r: 0xff, g: 0x00, b: 0xd7 },
    { r: 0xff, g: 0x00, b: 0xff },
    { r: 0xff, g: 0x5f, b: 0x00 },
    { r: 0xff, g: 0x5f, b: 0x5f },
    { r: 0xff, g: 0x5f, b: 0x87 },
    { r: 0xff, g: 0x5f, b: 0xaf },
    { r: 0xff, g: 0x5f, b: 0xd7 },
    { r: 0xff, g: 0x5f, b: 0xff },
    { r: 0xff, g: 0x87, b: 0x00 },
    { r: 0xff, g: 0x87, b: 0x5f },
    { r: 0xff, g: 0x87, b: 0x87 },
    { r: 0xff, g: 0x87, b: 0xaf },
    { r: 0xff, g: 0x87, b: 0xd7 },
    { r: 0xff, g: 0x87, b: 0xff },
    { r: 0xff, g: 0xaf, b: 0x00 },
    { r: 0xff, g: 0xaf, b: 0x5f },
    { r: 0xff, g: 0xaf, b: 0x87 },
    { r: 0xff, g: 0xaf, b: 0xaf },
    { r: 0xff, g: 0xaf, b: 0xd7 },
    { r: 0xff, g: 0xaf, b: 0xff },
    { r: 0xff, g: 0xd7, b: 0x00 },
    { r: 0xff, g: 0xd7, b: 0x5f },
    { r: 0xff, g: 0xd7, b: 0x87 },
    { r: 0xff, g: 0xd7, b: 0xaf },
    { r: 0xff, g: 0xd7, b: 0xd7 },
    { r: 0xff, g: 0xd7, b: 0xff },
    { r: 0xff, g: 0xff, b: 0x00 },
    { r: 0xff, g: 0xff, b: 0x5f },
    { r: 0xff, g: 0xff, b: 0x87 },
    { r: 0xff, g: 0xff, b: 0xaf },
    { r: 0xff, g: 0xff, b: 0xd7 },
    { r: 0xff, g: 0xff, b: 0xff },

    // 232-255: grayscale in 24 steps
    { r: 0x08, g: 0x08, b: 0x08 },
    { r: 0x12, g: 0x12, b: 0x12 },
    { r: 0x1c, g: 0x1c, b: 0x1c },
    { r: 0x26, g: 0x26, b: 0x26 },
    { r: 0x30, g: 0x30, b: 0x30 },
    { r: 0x3a, g: 0x3a, b: 0x3a },
    { r: 0x44, g: 0x44, b: 0x44 },
    { r: 0x4e, g: 0x4e, b: 0x4e },
    { r: 0x58, g: 0x58, b: 0x58 },
    { r: 0x62, g: 0x62, b: 0x62 },
    { r: 0x6c, g: 0x6c, b: 0x6c },
    { r: 0x76, g: 0x76, b: 0x76 },
    { r: 0x80, g: 0x80, b: 0x80 },
    { r: 0x8a, g: 0x8a, b: 0x8a },
    { r: 0x94, g: 0x94, b: 0x94 },
    { r: 0x9e, g: 0x9e, b: 0x9e },
    { r: 0xa8, g: 0xa8, b: 0xa8 },
    { r: 0xb2, g: 0xb2, b: 0xb2 },
    { r: 0xbc, g: 0xbc, b: 0xbc },
    { r: 0xc6, g: 0xc6, b: 0xc6 },
    { r: 0xd0, g: 0xd0, b: 0xd0 },
    { r: 0xda, g: 0xda, b: 0xda },
    { r: 0xe4, g: 0xe4, b: 0xe4 },
    { r: 0xee, g: 0xee, b: 0xee }
]

function rgb_distance(rgb1, rgb2) {
    return Math.sqrt(
        Math.pow((rgb2.r - rgb1.r) * 0.3, 2) +
        Math.pow((rgb2.g - rgb1.g) * 0.59, 2) +
        Math.pow((rgb2.b - rgb1.b) * 0.11, 2)
    );
}

function closest_index_in(palette, rgb) {
    let index = 0;
    let closest = Infinity;

    for (let i in palette) {
        const distance = rgb_distance(rgb, palette[i]);
        if (distance > closest) continue;

        closest = distance;
        index = i;

        if (distance === 0) return index;
    }

    return index;
}

function convert_6_to_8bits(value) {
    return (value << 2) | ((value & 0x30) >> 4);
}

function index_to_ansi(index) {
    return parseInt(palette_4bit_ansi_mapping[index] || index, 10)
}

module.exports = {
    palette_4bit,
    palette_8bit,

    white: palette_4bit[7],
    bright_white: palette_4bit[15],
    
    lospec_palette(palette_name) {
        switch (palette_name) {
            case "Isolated16": return ["000000","555555","aaaaaa","ffffff","550000","aa5566","ffaadd","553300","aa9955","ffffaa","005544","55aa77","aaffaa","001155","5577aa","aaddff"];
            case "AJMSX": return ["000000","555555","aaaaaa","ffffff","ffaaaa","aa5555","550000","555500","aaaa55","aaffaa","55aa55","005500","55aaaa","aaaaff","5555aa","aa55aa"];
            case "link awakening : links colour": return ["10ad42","008000","004000","1984ff","003973","b59cbd","634273","3a1952","ff0829","de0000","ffbd8c","ffff8c","ffb531","804000","000000","8c8ca5"];
            case "MICROSOFT VGA": return ["000000","800000","008000","808000","000080","800080","008080","c0c0c0","808080","ff0000","00ff00","ffff00","0000ff","ff00ff","00ffff","ffffff"];
            case "Corruption-16": return ["e1d8cb","c3b197","a68a64","614f38","362c20","82998f","525e5a","3a4040","222326","0a0d0a","20331f","495840","888f72","c7c7a5","de8d7d","833121"];
            case "Sweetie 16": return ["1a1c2c","5d275d","b13e53","ef7d57","ffcd75","a7f070","38b764","257179","29366f","3b5dc9","41a6f6","73eff7","f4f4f4","94b0c2","566c86","333c57"];
            case "Steam Lords": return ["213b25","3a604a","4f7754","a19f7c","77744f","775c4f","603b3a","3b2137","170e19","2f213b","433a60","4f5277","65738c","7c94a1","a0b9ba","c0d1cc"];
            case "NA16": return ["8c8fae","584563","3e2137","9a6348","d79b7d","f5edba","c0c741","647d34","e4943a","9d303b","d26471","70377f","7ec4c1","34859d","17434b","1f0e1c"];
            case "Island Joy 16": return ["ffffff","6df7c1","11adc1","606c81","393457","1e8875","5bb361","a1e55a","f7e476","f99252","cb4d68","6a3771","c92464","f48cb6","f7b69e","9b9c82"];
            case "PICO-8": return ["000000","1D2B53","7E2553","008751","AB5236","5F574F","C2C3C7","FFF1E8","FF004D","FFA300","FFEC27","00E436","29ADFF","83769C","FF77A8","FFCCAA"];
            case "Bubblegum 16": return ["16171a","7f0622","d62411","ff8426","ffd100","fafdff","ff80a4","ff2674","94216a","430067","234975","68aed4","bfff3c","10d275","007899","002859"];
            case "Lost Century": return ["d1b187","c77b58","ae5d40","79444a","4b3d44","ba9158","927441","4d4539","77743b","b3a555","d2c9a5","8caba1","4b726e","574852","847875","ab9b8e"];
            case "Endesga 16": return ["e4a672","b86f50","743f39","3f2832","9e2835","e53b44","fb922b","ffe762","63c64d","327345","193d3f","4f6781","afbfd2","ffffff","2ce8f4","0484d1"];
            case "vanilla milkshake": return ["28282e","6c5671","d9c8bf","f98284","b0a9e4","accce4","b3e3da","feaae4","87a889","b0eb93","e9f59d","ffe6c6","dea38b","ffc384","fff7a0","fff7e4"];
            case "Galaxy Flame": return ["699fad","3a708e","2b454f","111215","151d1a","1d3230","314e3f","4f5d42","9a9f87","ede6cb","f5d893","e8b26f","b6834c","704d2b","40231e","151015"];
            case "DawnBringer 16": return ["140c1c","442434","30346d","4e4a4e","854c30","346524","d04648","757161","597dce","d27d2c","8595a1","6daa2c","d2aa99","6dc2ca","dad45e","deeed6"];
            case "Microsoft Windows": return ["000000","7e7e7e","bebebe","ffffff","7e0000","fe0000","047e00","06ff04","7e7e00","ffff04","00007e","0000ff","7e007e","fe00ff","047e7e","06ffff"];
            case "Taffy 16": return ["222533","6275ba","a3c0e6","fafffc","ffab7b","ff6c7a","dc435b","3f48c2","448de7","2bdb72","a7f547","ffeb33","f58931","db4b3d","a63d57","36354d"];
            case "Commodore 64": return ["000000","626262","898989","adadad","ffffff","9f4e44","cb7e75","6d5412","a1683c","c9d487","9ae29b","5cab5e","6abfc6","887ecb","50459b","a057a3"];
            case "antiquity16": return ["202020","2d211e","452923","6d3d29","b16b4a","e89f6e","e8be82","5d7557","8e9257","707b88","8aa7ac","e55d4d","f1866c","d26730","de9a28","e8d8a5"];
            case "Go-line": return ["430067","94216a","ff004d","ff8426","ffdd34","50e112","3fa66f","365987","000000","0033ff","29adff","00ffcc","fff1e8","c2c3c7","ab5236","5f574f"];
            case "Color Graphics Adapter": return ["000000","555555","AAAAAA","FFFFFF","0000AA","5555FF","00AA00","55FF55","00AAAA","55FFFF","AA0000","FF5555","AA00AA","FF55FF","AA5500","FFFF55"];
            case "16 Bital": return ["212b5e","636fb2","adc4ff","ffffff","ffccd7","ff7fbd","872450","e52d40","ef604a","ffd877","00cc8b","005a75","513ae8","19baff","7731a5","b97cff"];
            case "ARQ16": return ["ffffff","ffd19d","aeb5bd","4d80c9","e93841","100820","511e43","054494","f1892d","823e2c","ffa9a9","5ae150","ffe947","7d3ebf","eb6c82","1e8a4c"];
            case "Punolite": return ["64c224","0fa10d","097938","0b6457","0a5058","0a4158","0a2e58","091837","281961","552067","702763","863453","a14b4b","b67a5b","c8a26e","e1d483"];
            case "Nanner 16": return ["7acccc","627db3","554080","592858","804055","b37d62","ccc97a","70b362","40806a","274457","cccccc","999491","665c5f","332b33","804e46","4d2a2a"];
            case "colorquest-16": return ["99d4aa","498e86","324859","437a4d","7dbe58","eadb77","dc8254","c13d37","61363d","b06163","e6af89","fff9e5","c1a68c","8b6962","0d0b0d","9d5745"];
            case "Cretaceous-16": return ["313432","323e42","454b4b","3a5f3b","7c4545","675239","625055","516b43","796c64","718245","9e805c","998579","ac9086","a6a296","b4ab8f","bcb7a5"];
            case "Cthulhu 16": return ["1d2531","a5e5c5","f0fafd","52a593","2b6267","1e303a","3b4251","527b92","7dc1c1","c7fff3","b8cbd8","7e8da1","8fa990","e5debb","cea061","854731"];
            case "Summers Past-16": return ["320011","5f3a60","876672","b7a39d","ece8c2","6db7c3","5e80b2","627057","8da24e","d2cb3e","f7d554","e8bf92","e78c5b","c66f5e","c33846","933942"];
            case "Nanner Jam": return ["352b40","653d48","933f45","b25e46","cc925e","dacb80","f0e9c9","76c379","508d76","535c89","7b99c8","99d4e6","be7979","d8b1a1","7d6e6e","c2b5a9"];
            case "Flowers": return ["613832","8b5851","bf8f75","ffdeb2","ffa5a5","ff8db5","b87ca4","856082","5a4a60","73628b","887fce","8cc1d4","8bf0c4","78bab4","527378","2f4447"];
            case "SHIDO CYBERNEON": return ["00033c","005260","009d4a","0aff52","003884","008ac5","00f7ff","ff5cff","ac29ce","600088","b10585","ff004e","2a2e79","4e6ea8","add4fa","ffffff"];
            case "Forest-16": return ["64988e","3d7085","0f2c2e","345644","6b7f5c","b0b17c","e1c584","c89660","ad5f52","913636","692f11","89542f","796e63","a17d5e","b4a18f","ecddba"];
            case "Peachy Pop 16": return ["fdffff","ff8686","fb4771","ce186a","8f0b5f","53034b","ad6dea","9fb9ff","567feb","0a547b","278c7f","0ce7a7","acfcad","ffec6d","ffa763","ff4040"];
            case "retrobubble.": return ["9dc1c0","525b80","312139","120e1f","284646","62ab46","95533d","6a2435","654147","fff169","d7793f","ab3229","9e8f84","ffface","e0b56d","f68b69"];
            case "Fading 16": return ["ddcf99","cca87b","b97a60","9c524e","774251","4b3d44","4e5463","5b7d73","8e9f7d","645355","8c7c79","a99c8d","7d7b62","aaa25d","846d59","a88a5e"];
            case "AAP-16": return ["070708","332222","774433","cc8855","993311","dd7711","ffdd55","ffff33","55aa44","115522","44eebb","3388dd","5544aa","555577","aabbbb","ffffff"];
            case "Triton 16": return ["000000","2b2232","473759","98879f","232433","5f6f87","829eb3","93abc2","1a2120","424849","5e7173","c3b3c8","866273","a2878a","b09ea0","daced3"];
            case "URBEX 16": return ["cbd1be","8f9389","52534c","26201d","e0a46e","91a47a","5d7643","4d533a","a93130","7a1338","834664","917692","160712","593084","3870be","579fb4"];
            case "Oxygen 16": return ["f9fff2","f5d678","6be0bf","bab197","96d45b","f56c77","e0864a","59909e","579460","9e4891","6e6660","505273","ab3737","693c36","3a363d","202026"];
            case "Soldier 16": return ["fffdda","f1d29e","b58c6e","6b4a41","3b2422","665953","a39d77","ebdc6c","d9903d","a7512d","6b2727","3b1b23","170f0d","1e2f27","51634d","9dba6c"];
            case "Colodore": return ["000000","4a4a4a","7b7b7b","b2b2b2","ffffff","813338","c46c71","553800","8e5029","edf171","a9ff9f","56ac4d","75cec8","706deb","2e2c9b","8e3c97"];
            case "Versitle 16": return ["0c0b0f","af3f52","5f3959","2e2937","905c9a","d78d42","93593b","8d92ac","d47fb0","dddd50","75b546","4a6db2","f3cb94","eff0e9","a7d6da","56a1c8"];
            case "Endesga Soft 16": return ["fefed7","dbbc96","ddac46","c25940","683d64","9c6659","88434f","4d2831","a9aba3","666869","51b1ca","1773b8","639f5b","376e49","323441","161323"];
            case "retro_cal": return ["2e1b37","4e53a2","7394ba","e6e1cc","28524e","3a7e4c","7da446","edd15a","4b1d45","8c315d","cf4f4f","f6788d","6a5154","a45a41","d87e46","b49a8d"];
            case "Skedd16": return ["8c1e2c","dc443c","ff8c66","c75b38","d66f24","e4ba32","21913b","83b535","ebd5bd","66c3d9","387cee","3539a2","998da2","594e6f","2b1a4b","08050e"];
            case "Europa 16": return ["ffffff","75ceea","317ad7","283785","1a1b35","2e354e","4f6678","a4bcc2","ecf860","94d446","3b7850","20322e","512031","a43e4b","dc7d5e","f0cc90"];
            case "prospec_cal": return ["1b0f28","4c6684","83bfca","f4f9e6","233e38","357b45","8ab954","f2e05a","312039","6e2745","c6434e","e7937e","544242","9e523b","e98549","8d8878"];
            case "Cookiebox-16": return ["1b1a1a","4e3846","7f3837","1f6c37","625c4c","0a8a69","ba554e","609238","7e7b71","ab852e","3bb2b8","bd8b67","bfb24c","c9b49c","8ef6c4","e9d7bd"];
            case "colorquest (retro recolor)": return ["95cecd","4c898b","0e3e5b","15894c","95ce56","eeee77","f7a046","d64b33","5a340e","b05670","ffad93","ffffff","acaaac","626562","000000","ad601a"];
            case "PP-16": return ["2b0a03","692731","83403a","ab613b","b57735","bf914f","c1b367","5cbb72","49af75","5d9984","5d7c8f","63364e","63416b","6a5489","6569a0","627bb4"];
            case "Darkseed 16": return ["000000","001418","002024","002c38","143444","443444","583c48","6c4c44","806058","6c706c","888078","a49484","c4ac9c","d8b0a8","ecd4d0","fcfcfc"];
            case "mystic-16": return ["160d13","31293e","4d6660","95b666","ef9e4e","ad4030","56212a","904b41","a69998","5f575e","8eb89e","f6f2c3","e79b7c","9b4c63","432142","d1935f"];
            case "PICO-DB": return ["120919","1b1f4b","592942","106836","854a2f","4d4b44","a4b2bf","deeed6","d04648","ed8f3b","ebd951","61ad36","5190c8","776e87","e384a2","e5bba7"];
            case "Tauriel-16": return ["17171c","282a30","49363a","404735","3b536a","9b3535","92583f","21927e","a16a41","7e7b71","71a14e","be8d68","7abbb9","d9bd66","e8c6a1","dcd6cf"];
            case "FZT Ethereal 16": return ["f3f3f3","f9c2a4","b8700e","5e0d24","a29eb4","c259df","8f27b8","c1002b","6c606f","0047ed","00a8f3","ddb411","004952","07865c","00c37d","051c25"];
            case "Bloom 16": return ["ff9072","ffc567","fce39a","f7f7c7","afe48d","61d868","29ab7d","2b75b7","00408f","092867","110f3e","371a77","6f2a8f","ab2aa3","d64d9a","ff718c"];
            case "Commodore VIC-20": return ["000000","ffffff","a8734a","e9b287","772d26","b66862","85d4dc","c5ffff","a85fb4","e99df5","559e4a","92df87","42348b","7e70ca","bdcc71","ffffb0"];
            case "JONK 16": return ["242e36","455951","798766","b7bca2","d6d6d6","f4f0ea","6988a1","a1b0be","595b7c","95819d","c9a5a9","f4dec2","704f4f","b7635b","e39669","ebc790"];
            case "Macintosh II": return ["ffffff","ffff00","ff6500","dc0000","ff0097","360097","0000ca","0097ff","00a800","006500","653600","976536","b9b9b9","868686","454545","000000"];
            case "eteRN16": return ["000000","ada97d","ffdb80","e69c53","bd683a","854f3a","633845","85eb81","63d4bd","56a0a6","416078","39365c","212333","ab432e","85172b","571027"];
            case "Explorers16": return ["000000","1d2b53","065ab5","29adff","742f29","ab5236","ff6e59","ffccaa","125359","008751","00e436","a8e72e","f3ef7d","ffa300","ff004d","422136"];
            case "Smooth 16": return ["0d1521","350629","ffffee","6eebf2","308ace","254371","192140","2b6276","36ad6e","a1ff7b","ffca5c","eb6e21","9f2a38","57102e","a44141","ffcc9d"];
            case "System Mini 16": return ["000000","68605c","b0b0b8","fcfcfc","1c38ac","7070fc","a82814","fc4848","208800","70f828","b82cd0","fc74ec","ac581c","f8a850","3cd4e4","f8ec20"];
            case "Shine 16": return ["9de4e4","5d9ddd","070760","612f93","bf66bf","fdefff","b99cd4","784a5f","2b0000","49132f","be3131","efa65d","ecec77","97d954","2d892d","153f2f"];
            case "WinterFes 16": return ["3c1c4a","574084","655ec0","5a78e3","549fff","4fd8ff","7fffff","bfffff","ffffff","ffdaef","ffa8df","ef60bf","e716ac","991674","5c024a","300020"];
            case "Sk 16": return ["2497fc","283d85","271f36","592b66","a60d0d","ff5a00","fcb500","ede547","85d451","029925","00401c","000000","475370","798b94","99cfc5","ebffcc"];
            case "Melody 16": return ["c686ca","7853a7","3c3e66","5d91d8","9dddf0","eff5f5","a3b0bb","676b8b","23232e","4d3347","8e516a","ce6374","f4ae70","f1de82","6fc453","3d8367"];
            case "Lump 16": return ["000000","20123b","451c33","a8274b","ed7332","fff167","ffffd9","7defff","2dd660","2c7cc7","3030a1","381378","8c2da6","f57fc6","ffd7a8","c8765c"];
            case "Harpy 16": return ["e0aaaf","7f5e85","322e36","6a3b50","ad7f5b","edd189","f49c8c","dc4070","555562","918786","cdbec8","fbf5db","b5ddba","619a8a","5d7fb1","a9d3cd"];
            case "Combi 16": return ["060310","252bc5","7c3d13","535155","9c2f9b","239725","d84b37","2d9f62","8272ec","bf8321","ed6294","77d051","5ed6ea","b7ba9d","e5e052","ffffff"];
            case "Doomed": return ["000000","1b3e3c","3e5b51","6e7e55","a9a96b","ffe1cb","ffc190","ffb54a","ff8837","ff5d00","ba4509","902200","4e0d00","dd2200","ff4e1d","ffffff"];
            case "Magik16": return ["1c1e1f","3c4348","668b90","bee5e1","fbfceb","e9cea8","9b5a44","591e37","6d2fa7","d454c6","e98bb3","f0f3c4","bde9bf","82d3b0","58aaad","234663"];
            case "PYXEL": return ["000000","2b335f","7e2072","19959c","8b4852","395c98","a9c1ff","eeeeee","d4186c","d38441","e9c35b","a3a3a3","70c6a9","7696de","ff9798","edc7b0"];
            case "Colorblind 16": return ["000000","252525","676767","ffffff","171723","004949","009999","22cf22","490092","006ddb","b66dff","ff6db6","920000","8f4e00","db6d00","ffdf4d"];
            case "Autumn": return ["ec6f1c","b4522e","7a3030","f6ae3c","fbdb7a","eafba3","e3f6d5","9ce77f","49d866","408761","2d4647","345452","3a878b","3da4db","95c5f2","cacff9"];
            case "Lemon 16": return ["d5c7da","f8cfa7","f9e6ae","dffec9","bea9c7","f5bb8f","fbde86","bffcad","7a5784","eea273","fbbd62","02c69a","401f49","e68a59","fdb14a","029776"];
            case "SimpleJPC-16": return ["050403","221f31","543516","9b6e2d","e1b047","f5ee9b","fefefe","8be1e0","7cc264","678fcb","316f23","404a68","a14d3f","a568d4","9a93b7","ea9182"];
            case "Nord theme": return ["2e3440","3b4252","434c5e","4c566a","d8dee9","e5e9f0","eceff4","8fbcbb","88c0d0","81a1c1","5e81ac","bf616a","d08770","ebcb8b","a3be8c","b48ead"];
            case "Colodore VIC-64": return ["813338","e9b287","a1683c","553800","000000","2e2c9b","706deb","6abfc6","ffffff","adadad","7b7b7b","626262","559e4a","92df87","edf171","e99df5"];
            case "Griefwards and through": return ["a60241","ff621a","cf8d00","e3d800","ebdc9b","523c40","9e6771","cfa7ad","5861a1","290091","004a54","00ba4e","f2efeb","959d9e","00c7b3","212621"];
            case "ENOS16": return ["fafafa","d4d4d4","9d9d9d","4b4b4b","f9d381","eaaf4d","f9938a","e75952","9ad1f9","58aeee","8deda7","44c55b","c3a7e1","9569c8","bab5aa","948e82"];
            case "Ultima VI Atari ST": return ["f0f0f0","c0a0a0","706060","202020","000000","50f050","00a000","006000","5090f0","0040d0","101070","f0d080","e05000","d00000","504020","d030d0"];
            case "psyche16": return ["fafafa","ebe8da","ff7196","eb418a","304059","071822","f0007d","7f0d4b","962bb5","3c43ad","ffdd5f","fbb03b","b9e226","5ab00f","5dd8d6","40a095"];
            case "ADB hybrid 16": return ["0e0a16","353a41","575c53","90989e","f3f6f1","d78c8e","c6353d","432d2d","905429","de822e","e8d964","93c02a","3b7220","214879","448fdf","8fcedc"];
            case "Mappletosh 16": return ["dc0000","ea7d27","976536","653600","000000","454545","919191","c9d199","00a800","006752","0000ca","514888","0097ff","98dbc9","ffffff","e85def"];
            case "Just add water": return ["171224","5c3570","c7619c","f794b1","88374c","d85f6f","ff9c4d","eddb66","65c96f","2d7556","213c4a","477da8","75c0e3","b88476","ffcba3","f4f5f2"];
            case "Damage Dice 10 & 6": return ["00000d","172126","324026","3e4e59","5c7173","468c8b","76a632","99bfbd","bbd9b8","f2f1da","45002a","5e3d17","913a2c","ab7444","d4a83f","eddf48"];
            case "Hasty Rainbow 4bit": return ["68c3f8","2851b8","781278","310b47","101010","39444f","8f8fa1","f0f0f0","ecea9c","99e859","18b418","0e6243","6b3b1b","aa2d0e","eb762d","cfb820"];
            case "vampire-16": return ["0e0116","340a43","6d1a3d","ca2828","e99039","f4e27b","95c74d","2c9639","0b4b3b","6739bc","7ca0f4","f8f7f2","9a826b","4b2933","9d442c","f8b97f"];
            case "Loop Hero": return ["000000","232323","602217","3a3f3f","815938","626439","686f6f","497aa7","cd6627","879b42","af9156","5ea2b0","9fa089","a4bec1","dbce2d","ffffff"];
            case "Astron ST16": return ["000000","e0e0e0","a0a0a0","404040","503020","e0a060","e0e040","e06020","a02020","c020e0","e080c0","60e0c0","2080a0","202080","206000","40c020"];
            case "Lovey-Dovey 16": return ["f1f2da","514e61","00232b","500f22","761f28","cc3636","6e3f73","ce4b7a","eea0d3","ff7777","ffce96","f2ef91","9c9ee7","477777","33517d","25334d"];
            case "Jr-Comp": return ["030625","0000e8","077c35","028566","9f2441","6b03ca","4b7432","81899e","1c2536","0e59f0","2cc64e","0bc3a9","e85685","c137ff","a7c251","ced9ed"];
            case "Ye Olde Pirate Modde": return ["fcfcfc","a4a4a4","000000","24303c","55493c","b67914","eb923c","f3e375","a6cf34","559224","2438eb","3ca6f3","b2dbeb","db7996","b83044","a80c0c"];
            case "trk-losat-16": return ["2a3a35","435f55","648975","9ebcac","232e39","4a6369","669699","a4c1c1","1c1d2e","564768","aa82ab","c8c1cc","430609","a21517","f85729","ffb938"];
            case "The Perfect Palette pocket": return ["ff97ce","f32341","7e2550","ffd5a7","fb8404","944e2b","ffee68","50c555","178055","96ffff","00aafb","494297","a742ee","272727","919191","f9f9f9"];
            case "WILSON16": return ["110209","3d485a","584f28","8a9599","8f7b74","dcd175","f0f5cd","f3f3eb","421915","a8584f","b48156","c9a865","3c2418","493421","6b5434","7e663a"];
            case "Zeitgeist16": return ["141019","3d414a","5d727b","a6adb3","f7f7ef","e05569","5b3156","8f4438","dd844b","ecb984","e6e759","62c45a","2f7141","393b8a","5080d6","7bcee0"];
            case "AGC16": return ["cbc6c0","bfcb69","61cbac","4fbb64","cb80a3","8b8b8b","86765d","b54c66","5b754f","4b6d6d","5555b8","5a5252","6b4064","4c3737","2d273b","220c22"];
            case "Natural Colour System 16": return ["1c101c","4a3915","888864","dcdcc9","ffffee","ffed7e","f0dc3e","f2a75d","b65c36","ac1900","6b0000","022716","005365","007766","70a615","6bb5a4"];
            case "drowsy 16": return ["ffffff","e7e7bf","b494b4","9135a8","6a9ba8","68728c","4a319d","000d3a","ffcc77","db8b62","a8581b","5e3b37","ab6d6d","b33943","819958","006a66"];
            case "Minecraft Wool": return ["e9ecec","8e8e86","f07613","158991","bd44b3","792aac","3aafd9","35399d","f8c527","724728","70b919","546d1b","ed8dac","a02722","3e4447","141519"];
            case "Deep 16": return ["f5f5d9","d9c68d","5fba51","2d7f55","234d4c","1b2a39","464d51","808e8c","374eb0","312661","902727","c27343","864a3c","4d2e30","261c23","0d0814"];
            case "Deep Forest 16": return ["33242b","4d2e2e","664338","d9c68d","2e7350","2a4d44","233333","202729","bf864d","994326","5f318c","4167d9","6d6d73","3e3c47","26222e","16121a"];
            case "Huc 16": return ["ffffff","ffcc4e","fa7033","e52f1b","ac2385","000000","371b14","733525","faa1b2","9a8aa6","9ccdd5","227d66","787878","293a72","6ea763","244e32"];
            case "Thanksmas 16": return ["341d6d","000001","301f29","553131","867f6f","60a85b","b0bf65","00a6b4","3c58f6","a485f0","ffc083","ff73c0","d03043","f69420","ffe100","fff7ea"];
            case "king-16": return ["1d1b20","392e3c","3d3c58","643a40","46543e","505f93","517852","a05372","886659","b972a4","9e8d80","bca766","d1a2b9","c0c783","c5d1b4","c4ccbd"];
            case "Pastel Love": return ["631616","260b1e","343b22","7b6d32","af4d4d","631d84","306843","cbaf6b","deac96","8f6ab8","77b391","b1c276","dec4dc","9ea9cb","5880b3","38557b"];
            case "BPRD-16": return ["140c00","690804","de2c2c","fa5555","382400","a1858d","d0b2ba","facaca","002000","405544","617561","99b295","0c3044","556d89","7595b6","deeeff"];
            case "V.O.S.P ": return ["c22d4b","e45042","e35e3d","f09469","17233d","224168","67b6d0","45b3bf","67dcf0","7af0ee","bdece9","609884","79bc92","65c7ab","ace3c8","23988e"];
            case "Rayleigh": return ["050506","192739","551823","244c07","885135","45454c","908f88","fffbe8","b60a04","ff6e11","ffec62","7aa143","8bb6d2","5a45b4","f06391","f4be8b"];
            case "Old Christmas": return ["d9d2a1","9d8756","8c6d3f","f6754e","f59e44","e61b1f","ad1d23","a2d265","53824a","252d25","9fd2e5","67a7e3","404791","0b0b28","f2edf1","d384c7"];
            case "Jr-16": return ["040404","00015d","003808","00374b","580a0a","520a54","7a3820","4b4956","81f4b1","72ffff","a2a2ac","4d84ff","d76f6c","d887f0","f6f8ad","f5fffd"];
            case "Tropical Chancer": return ["141010","ff0396","bf0270","80014b","8e08cc","590580","2c0340","16ccbc","0f8c82","084d47","ff6803","ffab0a","ffe11c","11ff03","0ab300","fff0f0"];
            case "GRAYSCALE 16": return ["000000","181818","282828","383838","474747","565656","646464","717171","7e7e7e","8c8c8c","9b9b9b","ababab","bdbdbd","d1d1d1","e7e7e7","ffffff"];
            case "Ladder 5": return ["1d251c","294d30","456d45","7ca96d","ccb56d","c99934","b86a1e","e16886","b63354","8a2640","2a3648","366198","4d8195","c4d6ea","90a1b0","435258"];
            case "Shifty16": return ["000000","555555","aaaaaa","ffffff","55ffff","00aaff","0055ff","0000aa","550055","aa0000","ff5500","ffaa00","ffff55","55ff00","00aa55","005555"];
            case "super pocket boy": return ["3a3a3a","81719a","a777b7","d8b0c0","efafbf","df77a7","cf4f2f","f79f4f","f7df6f","cf9f00","a76f47","479f57","9fcf7f","a0d0f8","88a0f0","f8e8f8"];
            case "Sweets-16": return ["0c0c0c","181818","55415f","755579","64b964","7dde99","d77355","ea8165","e6e2cf","fffbea","508cd7","7daede","819181","9db29d","950048","b21c65"];
            case "Limted-16": return ["420084","b932c6","ff9dca","ffffff","4affff","0b82d8","0b1274","220035","000000","73ff2d","f9e83f","cc5923","941132","510b22","a85237","ffe1b9"];
            case "Astro16-v2": return ["151515","666666","bbbbbb","eeeeee","a34c4c","c76c6c","be966b","e2c68a","506942","6d976c","5e7d9d","92b5d9","534c3f","a69d8c","d1c7b2","6d5f7f"];
            case "RGGB 4-bit color palette": return ["000000","005500","00ab00","00ff00","0000ff","0055ff","00abff","00ffff","ff0000","ff5500","ffab00","ffff00","ff00ff","ff55ff","ffabff","ffffff"];
            case "Transit": return ["0c0308","34160b","612f0e","d82b00","fc6c00","fcd800","ffe4ae","f59562","846736","11191e","2a2c49","474fa2","5f9a77","b4d800","f7ffff","bfc1c9"];
            case "Arctic Level": return ["1f1a1d","323b95","44582c","6b6556","3968bb","947d4c","9366b5","8a80a3","648440","bd9b56","96c359","73b4f9","9fa7b5","bdc8c0","c0edde","f2f1d6"];
            case "Intellivision": return ["0c0005","a7a8a8","fffcff","ff3e00","ffa600","faea27","00780f","00a720","6ccd30","002dff","5acbff","bd95ff","c81a7d","ff3276","3c5800","c9d464"];
            case "fourbit": return ["000000","960503","2d6605","be6908","042d71","993374","309074","c09377","4e809c","dc819c","76dc9e","ffdc9e","4fa5ff","dda7ff","76ffff","ffffff"];
            case "Washed-Over 16": return ["000000","555555","aaaaaa","ffffff","aa3344","773300","bb7744","ffbb88","dddd66","66dd99","007733","003377","4477bb","88bbff","8844bb","ff88cc"];
            case "Colorbit-16": return ["fdffe3","ffe33b","ffb1e1","f9994d","c38757","e35353","ae40ab","602799","0c0728","885013","398651","97b954","8adee1","349edb","828282","bdbdbd"];
            case "The Amazing Spider-Man": return ["e0e0e0","a0a0a0","606060","000000","e0c000","e08000","60e0e0","00a0e0","c040e0","602080","20c040","006020","e04000","a02000","0060c0","0040a0"];
            case "Bounce-16": return ["ece0d3","a6afb7","937c65","625c5a","371b1b","713725","b73a2f","e17e39","f2c237","6ca239","36753d","3b4ca8","5f91c1","6bc7ab","d0589f","8d55ae"];
            case "JW-64": return ["000000","404040","8c8c8c","c8c8c8","644020","a82f2f","b46429","e0806c","403fc0","6496f4","63d4f0","e0e040","b437b4","54c048","a0f66e","ffffff"];
            case "Light Fantasy Game": return ["e7ebf8","adb2c1","797e8d","202026","f56c77","ac3232","f8c8af","e4a672","ffe762","96d45b","3ea155","0484d1","203c56","8d56a9","505273","693c36"];
            case "Doodle 16": return ["8c473f","47272b","0d0b23","3e1f54","424866","879bb0","83e6f3","2396de","3e40bc","5eb046","e1e848","db8840","a9262e","ff8aaf","ffd7a6","e8fffb"];
            case "ANDREW KENSLER 16 (STYLIZED)": return ["220826","ffffff","f8a04b","6d362b","e13728","f4ec64","5f9633","14473c","27b05b","6fe1c0","199ace","4a32ae","8a898e","ffa1a8","e14aa0","4d1a65"];
            case "the16wonder": return ["000000","f50f27","f56c3f","ffffff","004785","0395b1","36eb8f","abffa8","8f2700","ff8f15","ffec3c","e3fdaf","2d006a","0003f5","6ed1f5","adffca"];
            case "VNES-16 PALETTE": return ["ffffff","45c1ff","0057fa","4300a8","fa0f0f","fa5300","fa992a","fae769","acacac","000000","1b001f","350057","b3003b","007d4f","27b500","b0eb0e"];
            case "Campbell (New Windows Console)": return ["0c0c0c","0037da","13a10e","3a96dd","c50f1f","881798","c19c00","cccccc","767676","3b78ff","16c60c","61d6d6","e74856","b4009e","f9f1a5","f2f2f2"];
            case "Pastry Shop": return ["2e2e2e","616161","a1a1a1","d1d1d1","ffbf00","e64b17","cc2952","b33693","823d99","504080","3d4766","407080","3d9982","36b355","52cc29","b2e617"];
            case "Super Cassette Vision": return ["000000","ff0000","ffa100","ffa09f","ffff00","a3a000","00a100","00ff00","a0ff9d","00009b","0000ff","a200ff","ff00ff","00ffff","a2a19f","ffffff"];
            case "BoldSouls16": return ["10539f","194576","102c4d","0d1b2b","9f4310","763619","4d2310","2b160d","109f9f","19766e","104d45","0d2b25","38109f","2f1976","21104d","140d2b"];
            case "MG16": return ["f2f2f2","c8dbbe","e3cc7e","ccc8b3","6cd16c","ada0a5","cc5d6e","ff0084","7f7887","436357","634e70","6d403f","3d3d9e","42372a","333651","261d26"];
            case "Minecraft Concrete": return ["cfd5d6","e06101","a9309f","2489c7","f1af15","5ea918","d5658f","373a3e","7d7d73","157788","64209c","2d2f8f","603c20","495b24","8e2121","080a0f"];
            case "Rabbit Jump": return ["e0e0e0","e0c040","e06020","e00000","a00000","000000","808080","a0a0a0","a08040","008000","006000","004000","2080a0","006060","e0a0a0","c06060"];
            case "Spiral 16": return ["000000","808080","ffffff","ffcc99","ff99cc","aa55ff","00aaff","00ff00","ffff00","ff8000","ff0000","aa0055","5500aa","0000ff","00aa55","663300"];
            case "NanoC-16": return ["2a232d","3e434b","b8b8af","515983","5c7ba0","7aafc4","f6ebd3","eacf54","de7138","6c8d50","3f6d39","2e4236","dbac89","8c5d53","532a3a","a13b3a"];
            case "Brenyon's Rainbow": return ["212033","254092","3896d4","bfffee","26d07e","06694a","005244","0d0024","4e1f85","b644bd","d6619a","f09ab4","e5b527","d48022","bf3011","69122d"];
            case "Crayon16": return ["000000","5d2540","ef364b","672c26","ff752a","6f5a1d","fff341","215a39","49dc41","2e608e","3bccf8","2b2b63","a14ff1","717171","ffffff","292929"];
            case "Chip's Challenge Amiga/Atari ST": return ["ffffff","ddddff","9999dd","666699","444466","000000","dd6699","00bb00","66ffff","00bbff","0066ff","0000bb","ffdd00","dd6600","bb0000","664400"];
            case "16Dan": return ["7b7b7b","e9aa42","f5d565","ffffff","ca5531","b5a857","b1c01d","b9f5f7","763e34","377e2b","8d93b2","78b0ce","000000","2a2f5a","5c4d8f","be79b4"];
            case "LucasArts Atari ST": return ["e0e0e0","a0a0a0","606060","000000","e0e020","a06000","20e0e0","00a0a0","e020e0","a000a0","20e020","00a000","e08080","a00000","6060e0","0000a0"];
            case "4-Bit RGB": return ["000000","005500","00aa00","00ff00","0000ff","0055ff","00aaff","00ffff","ff0000","ff5500","ffaa00","ffff00","ff00ff","ff55ff","ffaaff","ffffff"];
            case "A.J.'s Pico-8 Palette": return ["000000","555555","aaaaaa","ffffff","770055","775500","007733","3333aa","ff0033","ff9900","ffff00","00ff55","00aaff","9977ff","ff99cc","ffcc99"];
            case "Minecraft Dyes": return ["ffffff","999999","4c4c4c","191919","664c33","993333","d87f33","e5e533","7fcc19","667f33","4c7f99","6699d8","334cb2","7f3fb2","b24cd8","f27fa5"];
            case "Proto 64": return ["002d15","246040","51a59e","c1fff9","8e493a","e0a598","2f88d9","2d337a","7eb779","2d8225","c6b10f","726713","724713","9d59b7","57246b","b2e4ff"];
            case "Softboy 16": return ["000000","ffffff","ff0000","ff7100","ffff00","00ff00","0000ff","5900ff","7f0000","702c00","7c7c00","007c00","00007c","29007c","e29f4d","e2614d"];
            case "Cartooners": return ["000000","777777","cc8855","001111","4455ff","008800","bb5500","dd0000","ff9900","ffee00","00ee00","ffbbaa","ff22aa","7788ff","cccccc","ffffff"];
            case "Pastari16": return ["002a33","404140","591a4c","312098","909090","1c5c48","442800","854514","5c9c5c","ac783c","9c2020","515cc0","ececec","fce08c","fcbc94","56b2c0"];
            case "Huemeister": return ["000000","555555","aaaaaa","ffffff","ff3399","ff4444","ee7700","999900","55aa00","00cc00","00cc66","00bbbb","1188ff","6666ff","aa55ff","ff33ff"];
            case "Ultima VI Sharp X68000 ": return ["e1e1e1","a5a5a5","4b4b4b","000000","e1c3b4","e1a578","a55a0f","a50000","e11e00","e14be1","e1e14b","4be14b","00a500","0000a5","4b4be1","4be1e1"];
            case "HWAYS-16": return ["101010","303030","4c4c4c","6d6d6d","919191","aeaeae","cecece","f2f2f2","480004","810000","c20000","ff0000","0c340c","446d44","759575","deeede"];
            case "Vibrant ramps": return ["07072a","1d2562","3a70b9","75c1e5","cbfcf5","fffff6","e7d184","a86e29","7a2b20","4d142f","2d132b","1a4569","24958d","43d88d","9ae796","ebefc9"];
            case "PAC-16": return ["dedeff","ffff00","ffb751","de9751","b96832","ff0000","000000","2121ff","4cb7d6","00ffff","21b800","00ff00","97ff00","ffb7ff","ff21ae","9797ae"];
            case "Random16": return ["060a0d","1f2d48","7389a4","adbec6","fffaf4","f1e48c","eea947","a16b32","5f3820","cd5950","ea927d","ac65d8","3d77b8","93dcee","87d237","255e29"];
            case "LovePal 16": return ["000000","573449","af3c7b","c89be3","7a7d91","0ff8aa","98f3ff","ffffff","e50010","ff9118","ffff00","83e563","3db602","a1a200","237b4b","2060ce"];
            case "NYANKOS16": return ["101010","333333","666666","f8f8f8","9c3247","cc66a0","ff99d4","a04210","f7c07b","ffe9cc","e01818","004ecc","639cf8","007f1d","00d030","7fff9c"];
            case "Sierra Adventures Atari ST": return ["e0e0e0","a0a0a0","404040","000000","e0e040","a06000","60e0e0","408080","e060e0","800080","80e040","008000","e06040","800000","0060e0","0000a0"];
            case "Race You Home!": return ["104a8e","1663be","1b7ced","bac3ff","cd5e77","e87ea1","fbb7c0","fde0e0","1e5636","578c49","5aac44","99be8f","0f080e","4c2b21","66442c","7c5835"];
            case "Baby Jo in \"Going Home\"": return ["f0e0e0","908080","504040","303040","000000","103020","306040","50a080","60b0f0","1060f0","300000","702020","e03030","e06040","f08080","f0b040"];
            case "Ice Cream 16": return ["2c2c33","2ae500","0ad100","00a51b","5d5f6b","72c2ff","3aadff","2162ef","c4baba","fcaf0a","ff5a07","e02c00","fffcf2","f99adb","ef70d8","d64acc"];
            case "Andrew Kensler's 16": return ["3f32ae","e30ec2","baaaff","ffffff","ff949d","e80200","7a243d","000000","195648","6a8927","16ed75","32c1c3","057fc1","6e4e23","c98f4c","efe305"];
            case "Krzywinski Colorblind 16": return ["000000","004949","009292","ff6db6","ffb6db","490092","006edb","b66dff","6db6ff","b6dbff","920000","924900","db6d00","24ff24","ffff6d","ffffff"];
            case "Supaplex": return ["ffffff","b0b0b0","909090","808080","707070","606060","000000","804000","b00000","e01010","f09040","e0e000","00b060","008050","7090e0","5050d0"];
            case "QAOS Minimalist 16": return ["e8e4dc","7e7567","222323","d62411","804000","ff8000","ffee00","808000","5ccf13","55a894","00c0c0","89cff0","004080","aa00ff","c000c0","ffc0cb"];
            case "DOS's Gloomy Gloss": return ["242424","005555","008888","55bbbb","cccccc","cc9999","bb5555","aa0000","770077","aa00aa","cc22cc","cc88aa","cccc88","55cc55","00aa00","008800"];
            case "Newer Graphics Adapter": return ["ffffff","bfbfbf","ff0000","7f0000","ffbe00","7f5d00","6aff00","357f00","ff00ff","7f007f","009569","00140e","1d007f","3e00ff","7f7f7f","000000"];
            case "Super Breakout ST": return ["efefef","cfcfcf","afafaf","8f8f8f","000000","0f0fef","6fafcf","6fcfef","ef6f6f","cf4f4f","efaf2f","cf8f2f","0fef0f","0fcf0f","ef0fef","cf0fcf"];
            case "another retro": return ["e66a2c","ffc64a","000000","2e7de6","80b7ff","59692e","62ad39","732a78","ba419c","de983c","f5d590","8c2e06","c9521e","404040","c0c0c0","ffffff"];
            case "JMP (Japanese Machine Palette)": return ["000000","191028","46af45","a1d685","453e78","7664fe","833129","9ec2e8","dc534b","e18d79","d6b97b","e9d8a1","216c4b","d365c8","afaab9","f5f4eb"];
            case "Eroge Copper": return ["0d080d","4f2b24","825b31","c59154","f0bd77","fbdf9b","fff9e4","bebbb2","7bb24e","74adbb","4180a0","32535f","2a2349","7d3840","c16c5b","e89973"];
            case "Castpixel 16": return ["2d1b2e","218a91","3cc2fa","9af6fd","4a247c","574b67","937ac5","8ae25d","8e2b45","f04156","f272ce","d3c0a8","c5754a","f2a759","f7db53","f9f4ea"];
            case "Fantasy 16": return ["8e6d34","513a18","332710","14130c","461820","a63c1e","d37b1e","e7bc4f","eeeefa","d9d55b","757320","14210f","040405","1c1b2f","435063","60a18f"];
            case "Psygnosia": return ["000000","1b1e29","362747","443f41","52524c","64647c","736150","77785b","9ea4a7","cbe8f7","e08b79","a2324e","003308","084a3c","546a00","516cbf"];
            case "DinoKnight 16": return ["0f151b","292732","535867","95928f","f1f1ea","c58d65","8d5242","513d3d","ecd56d","ea7730","cd3d3d","7c3f8c","304271","0083c8","47a44d","1f6143"];
            case "Chromatic16": return ["000000","90B0B0","FFFFFF","800018","FF0000","A05000","FF8000","FFC080","FFFF00","20AC00","40FF00","003070","3070B0","00D0FF","A000E0","FF60FF"];
            case "Arne 16": return ["000000","493c2b","be2633","e06f8b","9d9d9d","a46422","eb8931","f7e26b","ffffff","1b2632","2f484e","44891a","a3ce27","005784","31a2f2","b2dcef"];
            case "CGArne": return ["000000","5e606e","2234d1","4c81fb","0c7e45","6cd947","44aacc","7be2f9","8a3622","eb8a60","5c2e78","e23d69","aa5c3d","ffd93f","b5b5b5","ffffff"];
            case "Copper Tech": return ["000000","262144","355278","60748a","898989","5aa8b2","91d9f3","ffffff","f4cd72","bfb588","c58843","9e5b47","5f4351","dc392d","6ea92c","1651dd"];
            case "/r/Place": return ["FFFFFF","E4E4E4","888888","222222","FFA7D1","E50000","E59500","A06A42","E5D900","94E044","02BE01","00D3DD","0083C7","0000EA","CF6EE4","820080"];
            case "Night 16": return ["0f0f1e","fff8bc","0c2133","48586d","79a0b0","b0ce9d","657f49","3f4536","b99d6a","ffdd91","dd945b","9a5142","644b48","333033","767088","c5a3b3"];
            case "ZXArne 5.2": return ["000000","3c351f","313390","1559db","a73211","d85525","a15589","cd7a50","629a31","9cd33c","28a4cb","65dcd6","e8bc50","f1e782","bfbfbd","f2f1ed"];
            case "Easter Island": return ["f6f6bf","e6d1d1","868691","794765","f5e17a","edc38d","cc8d86","ca657e","39d4b9","8dbcd2","8184ab","686086","9dc085","7ea788","567864","051625"];
            case "A64": return ["0b0b0b","566262","8d8d85","a7b5ba","f0e9cf","d39f80","b0703e","5a4142","d1d15b","a7d254","58a23c","7ac2e0","786aff","3e489d","8363ad","c14867"];
            case "Grunge Shift": return ["000000","242424","240024","482400","6c2424","b42400","d8b490","b49000","6c6c00","484800","00fcd8","4890fc","486c90","244890","9048b4","d86cb4"];
            case "Fun16": return ["080008","5e6660","2a3443","5d4632","44508c","a6414d","c86b36","8375af","52903c","db7ebd","5b99f4","deac85","94cc4e","84dbfc","f2de70","fcfffe"];
            case "cm16": return ["e7ebf8","adb1e0","b06bb5","6d2ea4","aae474","14ada0","597acd","7dc9de","fff7a7","ffbe6c","ff6773","bb027a","f8c8af","a17374","2e5b86","0c2a47"];
            case "FlyGuy 16": return ["271620","242d42","326b3c","64b450","eeea44","f0e9db","a93630","3f3025","533c60","24495e","379589","a4e8df","eeb691","db8333","785136","566969"];
            case "[thUg] 16": return ["504050","a04040","d06060","f08080","ffc0c0","b0d0e0","70b0c0","4080b0","000030","102040","204040","306050","409060","50c060","50ff90","f0f0d0"];
            case "Naji 16": return ["101a3a","3d0e26","64113d","482e69","3f425a","6a3465","74434a","595579","b73e62","8d6d9c","64967c","c0719f","c8926c","dca286","f2c966","e6d1d5"];
            case "Andrew Kensler 16": return ["000000","ffffff","c98f4c","6e4e23","e80200","efe305","6a8927","195648","16ed75","32c1c3","057fc1","3f32ae","baaaff","ff949d","e30ec2","7a243d"];
            case "Crimso 11": return ["ffffe3","f3d762","bf9651","769a55","cb5e31","8e393d","7a4962","5e4531","8ec3cf","867696","456e51","3d6286","353d5a","232e32","41292d","110b11"];
            case "Chip16": return ["d64b61","3a2333","000014","538cc1","70c6e5","063e4c","637272","8e3737","598e33","7cb649","565349","eac879","c4854e","6f1a71","e5e5e5","d8a2a2"];
            case "RISC OS": return ["ffffff","dcdcdc","b9b9b9","979797","767676","555555","363636","000000","004597","eded04","05ca00","dc0000","ededb9","558600","ffb900","04b9ff"];
            case "CD-BAC": return ["000000","da835c","7f3710","c4c466","f4fb4a","c7f0dc","77e28e","31983f","37368d","8e64e3","d697ff","f5cee6","fdf5f9","ce3f50","5d0929","301421"];
            case "Super17 16": return ["240909","28171a","371a2e","342b41","57333f","323764","2a5a51","334591","834848","d73860","507952","265ace","947a6c","c3b570","df8ac7","eaf4b7"];
            case "Master-16": return ["141414","3b312f","6e655f","969590","ebe8da","f57d7d","a11a2c","4a1628","612a2a","c96540","d4be42","f0c295","276647","66bf3d","2b3061","4582cc"];
            case "Drazile 16": return ["d1a649","dd7252","c64b3b","754653","9b7269","bc8dad","ccb4a1","cad86c","abbabc","6fbc6f","4f737c","303a35","5c3a96","8a878e","6f96d6","e2e2c7"];
            case "Optimum": return ["000000","575757","a0a0a0","ffffff","2a4bd7","1d6914","814a19","8126c0","9dafff","81c57a","e9debb","ad2323","29d0d0","ffee33","ff9233","ffcdf3"];
            case "pavanz 16": return ["200037","ffeedc","65253f","333e55","b42f4b","845a75","406b81","8f693d","2b7d5f","888da3","c78f86","d89763","a1b25c","a2ccc9","e1cbc7","efd497"];
            case "Thomson M05": return ["000000","bbbbbb","ff0000","dd7777","eebb00","ffff00","dddd77","00ff00","77dd77","00ffff","bbffff","ffffff","ff00ff","dd77ee","0000ff","7777dd"];
            default: return ["000000", "555555", "aaaaaa", "ffffff", "550000", "aa5566", "ffaadd", "553300", "aa9955", "ffffaa", "005544", "55aa77", "aaffaa", "001155", "5577aa", "aaddff"];
        }
    },

    base_palette_index({ r, g, b}) {
        for (let i in palette_4bit) {
            if (r === palette_4bit[i].r && g === palette_4bit[i].g && b === palette_4bit[i].b) return i;
        }
        return -1;
    },

    rgb_to_css({ r, g, b }) {
        return `rgb(${r} ${g} ${b})`;
    },

    rgb_to_hex({ r, g, b }) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },

    rgb_to_xbin({ r, g, b }) {
        return [r >> 2, g >> 2, b >> 2]; // a direct bitshift is fine.
    },

    hex_to_rbg(hex) {
        const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || [0, 0, 0];
        return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) }
    },

    xbin_to_rgb(r, g, b) {
        return { r: convert_6_to_8bits(r), g: convert_6_to_8bits(g), b: convert_6_to_8bits(b) };
    },

    index_to_ansi,

    rgb_to_ansi(rgb, bit_depth = 4) {
        const { r, g, b } = rgb;
        const f = Math.floor;

        // we process 4bit first, because we use this in the 8bit lookup too.
        const base_index = closest_index_in(palette_4bit, rgb);
        if (bit_depth === 4) return base_index;

        // move on to calculating 8bit lookup.
        const options = [];
        const base_distance = rgb_distance(rgb, palette_4bit[base_index]);

        // early return if we found an exact base match.
        if (!base_distance) return base_index;
        options.push([base_index, base_distance])

        // find the nearest color on the cube map.
        const cube_index = 16 + f(b / 255 * 5) + (6 * f(g / 255 * 5)) + (36 * f(r / 255 * 5));
        options.push([cube_index, rgb_distance(rgb, palette_8bit[cube_index])])

        // find the nearest color on in the greyscale ramp (clamping to 255 because "precision").
        const grey_index = Math.min(255, 232 + f((rgb.r + rgb.g + rgb.b) / 2.8 / 255 * 23));
        options.push([grey_index, rgb_distance(rgb, palette_8bit[grey_index])])

        // return the index with the closest match.
        return options.sort((a, b) => a[1] - b[1])[0][0];
    }
};
