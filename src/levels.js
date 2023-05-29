//Each level is stored as an array with at least 12 entries.
//0 - This the the level passcode. It gets pushed to the beginning of the array at the end of the function.
//1-10 - This is the level map. Map squares are denoted with characters
//  ' '- Blank indicated an empty square.
//  'b'- This is a standard platform.
//  'e'- This marks the end of the level.
//  'l|r'- These are variable platforms that can be enabled or disabled by pushing switches. l and r stand for left and right, indicating the direction the platform will fold in from or out to.
//  'k|q'- Same as l and r, only difference is l and r start as disabled while k and q start as enabled.
//  'v'- This is a splitting switch that will split a joined block when the block is fully stood on the switch. Spawn points of the split blocks are noted in swatches (see 13).
//  's'- This is a "soft" switch. It only requires the weight of 1 block to be triggered.
//  'h'- This is a "heavy" switch. It requires both block to be standing on it to be triggered.
//  'f'- This is a fragile platform that will fall if both blocks are standing on it.
//11 - This is the start point on the map denoted as [x, y].
//12 - These are swatches that correspond to switches in the map and define which platforms they effect and how. The swatch is label by the location of the switch as "swatch"+x+y. Since y is 0-9, the last number will always be y and the other 1 or 2 digits will by x. Switches can effect variable platforms in 3 different ways:
//  "on"- This always enabled the platform.
//  "off"- This always disables the platform.
//  "onoff"- This toggles the platform state.
//13 - These are swatches that define spawn squares for split switches. Swatches are named in the same manner as 12. The spawn locations are defined as [x1, y1, x2, y2]
function getLevels() {
    //#region 01
    var level01 = [];
    level01.push("               ");
    level01.push("               ");
    level01.push("  bbb          ");
    level01.push("  bbbbbb       ");
    level01.push("  bbbbbbbbb    ");
    level01.push("   bbbbbbbbb   ");
    level01.push("       bbebb   ");
    level01.push("        bbb    ");
    level01.push("               ");
    level01.push("               ");
    level01.push([3, 3]);
    //#endregion
    //#region 02
    var level02 = [];
    level02.push("               ");
    level02.push("      bbbb  bbb");
    level02.push("bbbb  bbhb  beb");
    level02.push("bbsb  bbbb  bbb");
    level02.push("bbbb  bbbb  bbb");
    level02.push("bbbblrbbbblrbbb");
    level02.push("bbbb  bbbb     ");
    level02.push("               ");
    level02.push("               ");
    level02.push("               ");
    level02.push([1, 5]);
    level02.push({
        swatch23: [
            [4, 5, "onoff"],
            [5, 5, "onoff"]
        ],
        swatch82: [
            [10, 5, "onoff"],
            [11, 5, "onoff"]
        ]
    });
    //#endregion
    //#region 03
    var level03 = [];
    level03.push("               ");
    level03.push("               ");
    level03.push("      bbbbbbb  ");
    level03.push("bbbb  bbb  bb  ");
    level03.push("bbbbbbbbb  bbbb");
    level03.push("bbbb       bbeb");
    level03.push("bbbb       bbbb");
    level03.push("            bbb");
    level03.push("               ");
    level03.push("               ");
    level03.push([1, 5]);
    level03.push({});
    //#endregion
    //#region 04
    var level04 = [];
    level04.push("               ");
    level04.push("   fffffff     ");
    level04.push("   fffffff     ");
    level04.push("bbbb     bbb   ");
    level04.push("bbb       bb   ");
    level04.push("bbb       bb   ");
    level04.push("bbb  bbbbfffff ");
    level04.push("bbb  bbbbfffff ");
    level04.push("     beb  ffbf ");
    level04.push("     bbb  ffff ");
    level04.push([1, 6]);
    level04.push({});
    //#endregion
    //#region 05
    var level05 = [];
    level05.push("           bbbb");
    level05.push(" bbbbkqbsbbbbbb");
    level05.push(" bbbb       bbb");
    level05.push(" bbsb          ");
    level05.push(" bbbb          ");
    level05.push("   bbbsbkqbbb  ");
    level05.push("          bbbbs");
    level05.push("bbb       bbbbb");
    level05.push("bebbbkqbbbbbb  ");
    level05.push("bbbb           ");
    level05.push([13, 1]);
    level05.push({
        swatch81: [
            [6, 1, "onoff"],
            [5, 1, "onoff"]
        ],
        swatch65: [
            [5, 8, "off"],
            [6, 8, "off"]
        ],
        swatch33: [
            [5, 8, "on"],
            [6, 8, "on"]
        ],
        swatch146: [
            [5, 8, "onoff"],
            [6, 8, "onoff"]
        ]
    });
    //#endregion
    //#region 06
    var level06 = [];
    level06.push("     bbbbbb    ");
    level06.push("     b  bbb    ");
    level06.push("     b  bbbbb  ");
    level06.push("bbbbbb     bbbb");
    level06.push("    bbb    bbeb");
    level06.push("    bbb     bbb");
    level06.push("      b  bb    ");
    level06.push("      bbbbb    ");
    level06.push("      bbbbb    ");
    level06.push("       bbb     ");
    level06.push([0, 3]);
    level06.push({});
    //#endregion
    //#region 07
    var level07 = [];
    level07.push("               ");
    level07.push("        bbbb   ");
    level07.push("        bbbb   ");
    level07.push("bbb     b  bbbb");
    level07.push("bbbbbbbbb   beb");
    level07.push("bbb    bbh  bbb");
    level07.push("bbb    bbb  bbb");
    level07.push(" bbl   b       ");
    level07.push("  bbbbbb       ");
    level07.push("               ");
    level07.push([1, 4]);
    level07.push({
        swatch95: [
            [3, 7, "onoff"]
        ]
    });
    //#endregion
    //#region 08
    var level08 = [];
    level08.push("         bbb   ");
    level08.push("         bbb   ");
    level08.push("         bbb   ");
    level08.push("bbbbbb   bbbbbb");
    level08.push("bbbbvb   bbbbeb");
    level08.push("bbbbbb   bbbbbb");
    level08.push("         bbb   ");
    level08.push("         bbb   ");
    level08.push("         bbb   ");
    level08.push("               ");
    level08.push([1, 4]);
    level08.push({});
    level08.push({
        swatch44: [10, 1, 10, 7]
    });
    //#endregion
    //#region 09
    var level09 = [];
    level09.push("               ");
    level09.push("               ");
    level09.push("               ");
    level09.push("bbbb   b   bbbb");
    level09.push("bbbb   b   bbvb");
    level09.push("bbbbbbbbbbbbbbb");
    level09.push("      beb      ");
    level09.push("      bbb      ");
    level09.push("               ");
    level09.push("               ");
    level09.push([1, 4]);
    level09.push({});
    level09.push({
        swatch134: [12, 4, 2, 4]
    });
    //#endregion
    //#region 10
    var level10 = [];
    level10.push(" bbb     bbbbbb");
    level10.push(" beblrblrbbbbvb");
    level10.push(" bbb     bbbbl ");
    level10.push("          bbbl ");
    level10.push("            bb ");
    level10.push("             b ");
    level10.push("             b ");
    level10.push("            bb ");
    level10.push("     bbbbb  bb ");
    level10.push("     bs  bbbhb ");
    level10.push([10, 1]);
    level10.push({
        swatch129: [
            [7, 1, "onoff"],
            [8, 1, "onoff"],
            [13, 2, "onoff"],
            [13, 3, "onoff"]
        ],
        swatch69: [
            [4, 1, "onoff"],
            [5, 1, "onoff"]
        ]
    });
    level10.push({
        swatch131: [13, 1, 10, 1]
    });
    //#endregion
    //#region 11
    var level11 = [];
    level11.push("   bbbk        ");
    level11.push("   bebk        ");
    level11.push("   bbb         ");
    level11.push("   b   bbbbbb  ");
    level11.push("   b   bb  bb  ");
    level11.push("  bbbbbbb  bbb ");
    level11.push("       bs    b ");
    level11.push("       bbbb  b ");
    level11.push("       bbbbbbb ");
    level11.push("          bbb  ");
    level11.push([2, 5]);
    level11.push({
        swatch86: [
            [6, 0, "off"],
            [6, 1, "off"]
        ]
    });
    //#endregion
    //#region 12
    var level12 = [];
    level12.push("             h ");
    level12.push("      bbb  bbb ");
    level12.push("      bhbbbbbl ");
    level12.push("    bbbbb  bb  ");
    level12.push("    bebl   bb  ");
    level12.push("  bbbbb   bbbb ");
    level12.push(" bbbb     bbbb ");
    level12.push(" bbbb  bbbbb   ");
    level12.push("      bbb      ");
    level12.push("      bbb      ");
    level12.push([3, 6]);
    level12.push({
        swatch72: [
            [13, 2, "onoff"]
        ],
        swatch130: [
            [7, 4, "onoff"]
        ]
    });
    //#endregion
    //#region 13
    var level13 = [];
    level13.push(" bbbfbbbbfbbbb ");
    level13.push(" bb        bbb ");
    level13.push(" bb         bbb");
    level13.push(" bbb   bbb  bbb");
    level13.push(" bbbfffbeb  bbb");
    level13.push(" bbb  fbbb  b  ");
    level13.push("   b  fffffbb  ");
    level13.push("   bbbffbfff   ");
    level13.push("    bbffffff   ");
    level13.push("    bbb  bb    ");
    level13.push([13, 3]);
    level13.push({});
    //#endregion
    //#region 14
    var level14 = [];
    level14.push("        bbb    ");
    level14.push("   bbb  bbb    ");
    level14.push("blrbbbbbbbbbbb ");
    level14.push("blrbbb      hb ");
    level14.push("b           bb ");
    level14.push("b           bb ");
    level14.push("b       bbbbbb ");
    level14.push("bbbbb   bbb    ");
    level14.push(" bbeb   bbb    ");
    level14.push("  bbb   bbbbbh ");
    level14.push([4, 2]);
    level14.push({
        swatch123: [
            [1, 2, "onoff"],
            [2, 2, "onoff"]
        ],
        swatch139: [
            [1, 3, "onoff"],
            [2, 3, "onoff"]
        ]
    });
    //#endregion
    //#region 15
    var level15 = [];
    level15.push("       bbb  bbb");
    level15.push("    bkqbbblrhbb");
    level15.push("bblrb  bbb  bbb");
    level15.push("bbbbb   s      ");
    level15.push("bb             ");
    level15.push(" b     v       ");
    level15.push(" b     b       ");
    level15.push("bbb   bbb  sbb ");
    level15.push("bbbbbbbbbkqbeb ");
    level15.push("bbb   bbb  sbb ");
    level15.push([1, 8]);
    level15.push({
        swatch121: [
            [2, 2, "onoff"],
            [3, 2, "onoff"],
            [5, 1, "onoff"],
            [6, 1, "onoff"]
        ],
        swatch83: [
            [5, 1, "onoff"],
            [6, 1, "onoff"],
            [10, 1, "onoff"],
            [11, 1, "onoff"]
        ],
        swatch117: [
            [9, 8, "off"],
            [10, 8, "off"]
        ],
        swatch119: [
            [9, 8, "off"],
            [10, 8, "off"]
        ]
    });
    level15.push({
        swatch75: [13, 1, 1, 8]
    });
    //#endregion
    //#region 16
    var level16 = [];
    level16.push("               ");
    level16.push("               ");
    level16.push(" v        bbb  ");
    level16.push("vbvlrhhblrbeb  ");
    level16.push(" v        bbb  ");
    level16.push("               ");
    level16.push("               ");
    level16.push("  bbb   bbb    ");
    level16.push("  bbbbbbbvb    ");
    level16.push("  bbb   bbb    ");
    level16.push([3, 8]);
    level16.push({
        swatch53: [
            [3, 3, "on"],
            [4, 3, "on"]
        ],
        swatch63: [
            [8, 3, "on"],
            [9, 3, "on"]
        ]
    });
    level16.push({
        swatch98: [1, 2, 0, 3],
        swatch12: [7, 3, 5, 3],
        swatch03: [2, 3, 1, 2],
        swatch23: [0, 3, 2, 3],
        swatch14: [1, 4, 0, 3]
    });
    //#endregion
    //#region 17
    var level17 = [];
    level17.push("bbb            ");
    level17.push("bbbbbbbbbl  bbb");
    level17.push("bbb    rbbbbbeb");
    level17.push("bbb         hhb");
    level17.push("bbb            ");
    level17.push("bbb            ");
    level17.push("bbb   rbbbbbh  ");
    level17.push("bbbbbbbbl  bb  ");
    level17.push("bsb        bb  ");
    level17.push("bbb        bh  ");
    level17.push([1, 1]);
    level17.push({
        swatch18: [
            [8, 7, "onoff"]
        ],
        swatch126: [
            [7, 2, "on"]
        ],
        swatch129: [
            [9, 1, "on"],
            [8, 7, "off"]
        ],
        swatch123: [
            [6, 6, "off"]
        ],
        swatch133: [
            [6, 6, "on"]
        ]
    });
    //#endregion
    //#region 18
    var level18 = [];
    level18.push("               ");
    level18.push("       s       ");
    level18.push("bbsb   b       ");
    level18.push("bbbbb  b       ");
    level18.push("bsbbbbbblrbblrb");
    level18.push("bbbbbl  b   b  ");
    level18.push("bbsb    b   b  ");
    level18.push("b       s  bbb ");
    level18.push("b         bbeb ");
    level18.push("blrh      bbbb ");
    level18.push([2, 4]);
    level18.push({
        swatch14: [
            [8, 4, "off"],
            [9, 4, "off"]
        ],
        swatch71: [
            [8, 4, "on"],
            [9, 4, "on"]
        ],
        swatch22: [
            [12, 4, "off"],
            [13, 4, "off"],
            [1, 9, "off"],
            [2, 9, "off"]
        ],
        swatch26: [
            [12, 4, "off"],
            [13, 4, "off"],
            [1, 9, "off"],
            [2, 9, "off"]
        ],
        swatch39: [
            [5, 5, "onoff"]
        ],
        swatch87: [
            [12, 4, "on"],
            [13, 4, "on"],
            [1, 9, "on"],
            [2, 9, "on"]
        ]
    });
    //#endregion
    //#region 19
    var level19 = [];
    level19.push(" bbbbbbbbbsbbbb");
    level19.push("     bb      bb");
    level19.push("     bb      bb");
    level19.push("             bb");
    level19.push("             bb");
    level19.push("bbb  bblrbsbbbb");
    level19.push("beb  bb        ");
    level19.push("bbb  bb        ");
    level19.push(" bb  bb        ");
    level19.push(" bkqbbbbbbsbbb ");
    level19.push([1, 0]);
    level19.push({
        swatch100: [
            [7, 5, "onoff"],
            [8, 5, "onoff"]
        ],
        swatch105: [
            [2, 9, "off"],
            [3, 9, "off"]
        ],
        swatch109: [
            [2, 9, "on"],
            [3, 9, "on"]
        ]
    });
    //#endregion
    //#region 20
    var level20 = [];
    level20.push("            bbb");
    level20.push("  bbbkqbbblrbbb");
    level20.push("  bbb  sbb  bbb");
    level20.push("  bbb  bbb     ");
    level20.push("  bsb  vbs     ");
    level20.push("  bbb  bbb     ");
    level20.push("bbbb   bbblrsbb");
    level20.push("bs          bbb");
    level20.push("            beb");
    level20.push("            bbb");
    level20.push([8, 2]);
    level20.push({
        swatch72: [
            [5, 1, "off"],
            [6, 1, "off"]
        ],
        swatch94: [
            [5, 1, "off"],
            [6, 1, "off"]
        ],
        swatch34: [
            [5, 1, "off"],
            [6, 1, "off"]
        ],
        swatch126: [
            [10, 6, "onoff"],
            [11, 6, "onoff"]
        ],
        swatch17: [
            [10, 1, "onoff"],
            [11, 1, "onoff"]
        ]
    });
    level20.push({
        swatch74: [13, 1, 13, 7]
    });
    //#endregion
    //#region 21
    var level21 = [];
    level21.push("        bb     ");
    level21.push("       bbb     ");
    level21.push("bb  bbbbbb     ");
    level21.push("bbbbbb  b      ");
    level21.push("bbbb    b   bbb");
    level21.push(" bb     hbbbbeb");
    level21.push("  b     hb  bbb");
    level21.push("  bbbl  bb     ");
    level21.push("   bbb  bb     ");
    level21.push("   rbbbbbb     ");
    level21.push([1, 3]);
    level21.push({
        swatch85: [
            [3, 9, "onoff"]
        ],
        swatch86: [
            [5, 7, "onoff"]
        ]
    });
    //#endregion
    //#region 22
    var level22 = [];
    level22.push("      bb    bbb");
    level22.push("    bbbbbb  beb");
    level22.push(" bbbbbbsbbbbbbb");
    level22.push(" bbbbs  bbbbbl ");
    level22.push(" bbb      bbb  ");
    level22.push("  b        b   ");
    level22.push("  b        b   ");
    level22.push("  bl      qb   ");
    level22.push("  bb      bb   ");
    level22.push("   h      h    ");
    level22.push([2, 3]);
    level22.push({
        swatch109: [
            [3, 7, "onoff"]
        ],
        swatch39: [
            [13, 3, "onoff"]
        ],
        swatch53: [
            [3, 7, "off"],
            [13, 3, "off"]
        ],
        swatch72: [
            [3, 7, "off"],
            [13, 3, "off"]
        ]
    });
    //#endregion
    //#region 23
    var level23 = [];
    level23.push(" bbb        bbb");
    level23.push(" bhb        bsb");
    level23.push(" bbb   bbbkqbbb");
    level23.push("rbbbl  beb  bbs");
    level23.push("b   b  bbb    b");
    level23.push("s   b  fff    b");
    level23.push("blrbbbfffffbbbk");
    level23.push("   bbbfffffbvb ");
    level23.push("   bbbfffffbbb ");
    level23.push("   bbbbbl      ");
    level23.push([4, 7]);
    level23.push({
        swatch143: [
            [14, 6, "off"],
            [10, 2, "off"],
            [11, 2, "off"]
        ],
        swatch131: [
            [8, 9, "onoff"],
            [1, 6, "on"],
            [2, 6, "on"]
        ],
        swatch05: [
            [0, 3, "on"],
            [1, 6, "off"],
            [2, 6, "off"]
        ],
        swatch21: [
            [4, 3, "on"]
        ]
    });
    level23.push({
        swatch127: [12, 7, 2, 2]
    });
    //#endregion
    //#region 24
    var level24 = [];
    level24.push("               ");
    level24.push("           bbbb");
    level24.push("    rbbbbbbbhbv");
    level24.push("  blrbhb   bbbb");
    level24.push(" hb  bb      b ");
    level24.push(" bb  b       b ");
    level24.push(" bbbbb     bbb ");
    level24.push(" bbb  bbblrbeb ");
    level24.push("      hbl  bbb ");
    level24.push("               ");
    level24.push([2, 3]);
    level24.push({
        swatch14: [
            [4, 2, "on"]
        ],
        swatch122: [
            [4, 3, "on"],
            [3, 3, "on"]
        ],
        swatch63: [
            [8, 8, "on"]
        ],
        swatch68: [
            [9, 7, "on"],
            [10, 7, "on"]
        ]
    });
    level24.push({
        swatch142: [6, 7, 8, 7]
    });
    //#endregion
    //#region 25
    var level25 = [];
    level25.push("  bb           ");
    level25.push("  bbb          ");
    level25.push("  bbs     bbbl ");
    level25.push("   bbbbl  bebl ");
    level25.push("      bblrbbb  ");
    level25.push(" bb   bb       ");
    level25.push("bbhbkqbb       ");
    level25.push("bbk   bb   bbb ");
    level25.push("bbk   bbsbbbbb ");
    level25.push("           bbb ");
    level25.push([1, 7]);
    level25.push({
        swatch42: [
            [13, 2, "onoff"],
            [13, 3, "onoff"],
            [8, 4, "onoff"],
            [9, 4, "onoff"]
        ],
        swatch88: [
            [7, 3, "on"],
            [4, 6, "off"],
            [5, 6, "off"]
        ],
        swatch26: [
            [8, 4, "on"],
            [9, 4, "on"]
        ]
    });
    //#endregion
    //#region 26
    var level26 = [];
    level26.push("     bbbb    v ");
    level26.push("     bbsbbb  b ");
    level26.push("    bbbbbbb  b ");
    level26.push("bbkqbbbb  bbbb ");
    level26.push("bbbl  b   bb   ");
    level26.push("bbb   b   b    ");
    level26.push(" b    bbb      ");
    level26.push(" h    bebl     ");
    level26.push("      bbb      ");
    level26.push("               ");
    level26.push([10, 5]);
    level26.push({
        swatch71: [
            [2, 3, "off"],
            [3, 3, "off"]
        ],
        swatch17: [
            [9, 7, "on"],
            [3, 4, "on"]
        ]
    });
    level26.push({
        swatch130: [12, 3, 10, 5]
    });
    //#endregion
    //#region 27
    var level27 = [];
    level27.push("bbb    bbbbbbbb");
    level27.push("bbbbbbbbbbb  bb");
    level27.push("bbb    bb    bb");
    level27.push("            bhb");
    level27.push("            bb ");
    level27.push("bbb  ffffb  ss ");
    level27.push("bebfffffff  bbb");
    level27.push("bbbfffffffffbbb");
    level27.push("     fffffffbbb");
    level27.push("      qbbk     ");
    level27.push([1, 1]);
    level27.push({
        swatch125: [
            [6, 9, "off"]
        ],
        swatch135: [
            [9, 9, "off"]
        ],
        swatch133: [
            [6, 9, "off"],
            [9, 9, "off"]
        ]
    });
    //#endregion
    //#region 28
    var level28 = [];
    level28.push(" bbkqbb        ");
    level28.push(" bb  bbb       ");
    level28.push("ffb  bbbb      ");
    level28.push("ff     bbb     ");
    level28.push("ff      bbb    ");
    level28.push("fbbb     bbv   ");
    level28.push(" beb      bbbbb");
    level28.push(" bbbbbb   bsbbb");
    level28.push("  b  bb   bbb  ");
    level28.push("  b  bbbkqbbb  ");
    level28.push([2, 2]);
    level28.push({
        swatch117: [
            [4, 0, "off"],
            [3, 0, "off"],
            [8, 9, "off"],
            [9, 9, "off"]
        ]
    });
    level28.push({
        swatch115: [14, 6, 12, 9]
    });
    //#endregion
    //#region 29
    var level29 = [];
    level29.push("  skqb   blrh  ");
    level29.push("     b   b     ");
    level29.push("     bbbbb     ");
    level29.push("hlrbbbbbbbbblrh");
    level29.push("     bbbbb     ");
    level29.push("     rb  b     ");
    level29.push("     rb  bkqs  ");
    level29.push("bbb  bb  b     ");
    level29.push("beblrb   b     ");
    level29.push("bbbl     bkqs  ");
    level29.push([7, 3]);
    level29.push({
        swatch20: [
            [10, 0, "on"],
            [11, 0, "on"],
            [10, 6, "off"],
            [11, 6, "off"]
        ],
        swatch120: [
            [5, 5, "on"],
            [5, 6, "on"]
        ],
        swatch03: [
            [3, 8, "on"],
            [4, 8, "on"],
            [10, 9, "off"],
            [11, 9, "off"]
        ],
        swatch143: [
            [3, 9, "on"]
        ],
        swatch126: [
            [1, 3, "on"],
            [2, 3, "on"]
        ],
        swatch129: [
            [12, 3, "on"],
            [13, 3, "on"],
            [10, 6, "off"],
            [11, 6, "off"],
            [3, 0, "off"],
            [4, 0, "off"],
            [10, 0, "off"],
            [11, 0, "off"]
        ]
    });
    //#endregion
    //#region 30
    var level30 = [];
    level30.push("   bbbbbffbbbb ");
    level30.push("   bebb     fb ");
    level30.push("   bbb      fbh");
    level30.push("       fbbkqbbb");
    level30.push("  b    ff     b");
    level30.push(" hbf   ff     b");
    level30.push("ffff   bbl  rbb");
    level30.push("fffbfbffbf  hbl");
    level30.push("bfffffffffffb  ");
    level30.push(" fbfff  ffffb  ");
    level30.push([2, 4]);
    level30.push({
        swatch15: [
            [10, 3, "on"],
            [11, 3, "on"]
        ],
        swatch142: [
            [10, 3, "off"],
            [11, 3, "off"],
            [9, 6, "on"],
            [12, 6, "on"]
        ],
        swatch127: [
            [14, 7, "onoff"]
        ]
    });
    //#endregion
    //#region 31
    var level31 = [];
    level31.push("           bbbl");
    level31.push(" bbb    h  bebl");
    level31.push(" bbbkqbbblrbbbl");
    level31.push(" bbb  bbb   b  ");
    level31.push(" fff  sbb   f  ");
    level31.push("  f   bbb  fff ");
    level31.push("  b   bbb  bbb ");
    level31.push("qbbblrbsbkqbbb ");
    level31.push("qbhb  h    bbb ");
    level31.push("qbbb           ");
    level31.push([12, 7]);
    level31.push({
        swatch81: [
            [9, 2, "onoff"],
            [10, 2, "onoff"]
        ],
        swatch68: [
            [4, 7, "onoff"],
            [5, 7, "onoff"]
        ],
        swatch28: [
            [14, 2, "on"],
            [14, 1, "on"],
            [14, 0, "on"],
            [4, 2, "off"],
            [5, 2, "off"]
        ],
        swatch77: [
            [4, 2, "off"],
            [5, 2, "off"],
            [9, 2, "off"],
            [10, 2, "off"],
            [4, 7, "off"],
            [5, 7, "off"],
            [9, 7, "off"],
            [10, 7, "off"]
        ],
        swatch64: [
            [4, 2, "off"],
            [5, 2, "off"],
            [9, 2, "off"],
            [10, 2, "off"],
            [4, 7, "off"],
            [5, 7, "off"],
            [9, 7, "off"],
            [10, 7, "off"]
        ]
    });
    //#endregion
    //#region 32
    var level32 = [];
    level32.push("             bh");
    level32.push("   bbkqbb   bbb");
    level32.push("  bbblrbb  bhbb");
    level32.push("  beb   bbbbb  ");
    level32.push("  bbb    bbb   ");
    level32.push("          bb   ");
    level32.push("     bbb  bb   ");
    level32.push(" bblrbhb  bb   ");
    level32.push(" bblrbbbbbbb   ");
    level32.push("               ");
    level32.push([11, 6]);
    level32.push({
        swatch140: [
            [3, 7, "onoff"],
            [4, 7, "onoff"],
            [5, 1, "onoff"],
            [6, 1, "onoff"]
        ],
        swatch122: [
            [3, 8, "onoff"],
            [4, 8, "onoff"]
        ],
        swatch67: [
            [5, 2, "onoff"],
            [6, 2, "onoff"]
        ]
    });
    //#endregion
    //#region 33
    var level33 = [];
    level33.push("     bbsbbb    ");
    level33.push("     bbbbbbl   ");
    level33.push("bbb  sbbsbbbbb ");
    level33.push("bbbkqbbbbssbbs ");
    level33.push("     bbsbbsbbb ");
    level33.push("     bbbbbbsbb ");
    level33.push("bbb  bbbbbbsbbb");
    level33.push("bebkqbsb  bbbsh");
    level33.push("bbb  bbb   bbbb");
    level33.push("bbb         bbb");
    level33.push([1, 3]);
    level33.push({
        swatch147: [
            [11, 1, "on"]
        ],
        swatch70: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch52: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch82: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch93: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch103: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch104: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch115: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch133: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch116: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch137: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch74: [
            [3, 7, "off"],
            [4, 7, "off"]
        ],
        swatch67: [
            [3, 7, "off"],
            [4, 7, "off"]
        ]
    });
    //#endregion

    //#region sw
    var levelsw = [];
    levelsw.push("               ");
    levelsw.push(" bbbbbhhhbbbbb ");
    levelsw.push(" bbbb      beb ");
    levelsw.push(" bbbb      bbb ");
    levelsw.push(" bbbbbbb    b  ");
    levelsw.push(" h    rb    b  ");
    levelsw.push(" h    qb   bb  ");
    levelsw.push(" h    rb   bb  ");
    levelsw.push("      bbbbbb   ");
    levelsw.push("               ");
    levelsw.push([12, 1]);
    levelsw.push({
        swatch81: [
            [6, 5, "off"],
            [6, 6, "on"]
        ],
        swatch71: [
            [6, 7, "on"]
        ],
        swatch61: [
            [6, 7, "off"]
        ],
        swatch15: [
            [6, 5, "off"]
        ],
        swatch16: [
            [6, 5, "on"],
            [6, 7, "off"]
        ],
        swatch17: [
            [6, 6, "off"],
            [6, 7, "on"]
        ]
    });
    //#endregion
    //#region test
    var leveltest = [];
    leveltest.push("bbbbbbbbbbbb   ");
    leveltest.push("bbbbbbbbb      ");
    leveltest.push("bbbb  bbb      ");
    leveltest.push("sbbb  bbb      ");
    leveltest.push("bbbbbbbbb      ");
    leveltest.push("sbbbbbbbb      ");
    leveltest.push("bbbb           ");
    leveltest.push("sbbb           ");
    leveltest.push("bbbb           ");
    leveltest.push("               ");
    leveltest.push([0, 0]);
    leveltest.push({
        swatch03: [
            [4, 1, "on"],
            [5, 1, "on"],
            [4, 2, "on"],
            [5, 2, "on"]
        ],
        swatch05: [
            [4, 1, "off"],
            [5, 1, "off"],
            [4, 2, "off"],
            [5, 2, "off"]
        ],
        swatch07: [
            [4, 1, "onoff"],
            [5, 1, "onoff"],
            [4, 2, "onoff"],
            [5, 2, "onoff"]
        ]
    });
    //#endregion

    var levels = [
        level01,
        level02,
        level03,
        level04,
        level05,
        level06,
        level07,
        level08,
        level09,
        level10,
        level11,
        level12,
        level13,
        level14,
        level15,
        level16,
        level17,
        level18,
        level19,
        level20,
        level21,
        level22,
        level23,
        level24,
        level25,
        level26,
        level27,
        level28,
        level29,
        level30,
        level31,
        level32,
        level33
    ];

    for (var i = 0; i < levels.length; i++) {
        levels[i].unshift(stage.levelCodes[i]);
    }

    return levels;
}

function getLevelCodes() {
    return [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33"
    ];
    // return [
    //     "780464",
    //     "290299",
    //     "918660",
    //     "520967",
    //     "028431",
    //     "524383",
    //     "189493",
    //     "499707",
    //     "074355",
    //     "300590",
    //     "291709",
    //     "958640",
    //     "448106",
    //     "210362",
    //     "098598",
    //     "000241",
    //     "683596",
    //     "284933",
    //     "119785",
    //     "543019",
    //     "728724",
    //     "987319",
    //     "293486",
    //     "088198",
    //     "250453",
    //     "426329",
    //     "660141",
    //     "769721",
    //     "691859",
    //     "280351",
    //     "138620",
    //     "879021",
    //     "614955"
    // ];
}