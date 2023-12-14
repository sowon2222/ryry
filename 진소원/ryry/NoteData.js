function Install_NoteData(t) { // t = 낙하속도

    const MainTimeLineArr = [] // Main per 2.2sec ( 2200 ms )
    const SubTimeLineArr = [] // Sub per 0.55sec ( 550 ms )
    const Sub2TimeLineArr = [] // Sub2 per 0.1sec or 0.4sec ( 100ms / 400ms )
    const InitTime = t;

    function Sort_Asc(tempA, tempB) { // Ascending Sort
        if (tempA > tempB) {
            return 1
        } else if (tempA < tempB) {
            return -1
        } else {
            return 0
        }
    }
    
    // IntroPhase
    const IntroPhaseArr = [9.1, 11.3, 13.5, 15.7, 17.3, 17.9, 20.1, 22.3, 24.5, 26.7, 28.9,
        31.1, 33.3, 34.9, 35.5, 37.7, 39.9, 42.1, 43.7] // 2.2
    for (let i = 0; i < IntroPhaseArr.length; i++) {
        MainTimeLineArr.push(IntroPhaseArr[i] + InitTime)
    }

    // Phase 1
    for (let i = 0; i < 30; i++) {
        SubTimeLineArr.push(43.7 + 0.55 * i + InitTime)
    }
    const PH1MainArr = [44.25, 46.45, 48.65, 50.85, 53.05, 55.25, 57.45, 59.65] // 2,2
    for (let i = 0; i < PH1MainArr.length; i++) {
        MainTimeLineArr.push(PH1MainArr[i] + InitTime)
    }
    const VolUpArr = [61.02, 61.16, 61.3, 61.44, 61.54]
    for (let i = 0; i < VolUpArr.length; i++) {
        Sub2TimeLineArr.push(VolUpArr[i] + InitTime)
    }

    // Phase 2
    for (let i = 0; i < 11; i++) { // 0.55
        SubTimeLineArr.push(61.65 + 0.55 * i + InitTime)
        SubTimeLineArr.push(70.45 + 0.55 * i + InitTime)
    }
    const PH2MainArr = [61.65, 63.85, 66.05, 68.25, 70.45, 72.65, 74.85, 77.05]
    const PH2SubArr = [68.25, 68.8, 69.35, 69.9, 77.05, 77.6, 78.15, 78.7] // 0.55
    for (let i = 0; i < PH2SubArr.length; i++) {
        SubTimeLineArr.push(PH2SubArr[i] + InitTime)
    }
    for (let i = 0; i < PH2MainArr.length; i++) {
        MainTimeLineArr.push(PH2MainArr[i] + InitTime)
    }

    // Phase 3
    const PH3SubArr = [85.85, 86.4, 86.95, 87.5, 94.65, 95.2, 95.75]
    for (let i = 0; i < PH3SubArr.length; i++) {
        SubTimeLineArr.push(PH3SubArr[i] + InitTime)
    }
    for (let i = 0; i < 11; i++) {
        SubTimeLineArr.push(79.25 + 0.55 * i + InitTime)
        SubTimeLineArr.push(88.05 + 0.55 * i + InitTime)
    }

    // Phase 4, 5, 6
    const PH4MainArr = [96.6, 98.8, 101, 103.2, 105.4, 107.6, 109.8, 112]
    const PH5MainArr = [114, 116.2, 118.4, 120.6, 122.8, 125, 127.2, 129.4]
    const PH6MainArr = [133.7, 135.9, 138.1, 140.3, 142.5, 144.7, 146.9, 149.1]
    for (let i = 0; i < 8; i++) { // 2.2s
        MainTimeLineArr.push(PH4MainArr[i] + InitTime)
        MainTimeLineArr.push(PH5MainArr[i] + InitTime)
        MainTimeLineArr.push(PH6MainArr[i] + InitTime)
    }
    for (let i = 0; i < 28; i++) { // 0.55s
        SubTimeLineArr.push(96.6 + 0.55 * i + InitTime) // PH4
        SubTimeLineArr.push(114 + 0.55 * i + InitTime) // PH5
        SubTimeLineArr.push(133.7 + 0.55 * i + InitTime) // PH6
    }

    // Phase 7
    for (let i = 0; i < 63; i++) {
        SubTimeLineArr.push(151.45 + 0.55 * i + InitTime)
    }

    // Phase 8
    const PH8MainArr = [186.1, 187.6, 188.3, 189.9, 190.5, 192.1, 192.7, 193.7, 194.2, 194.8, 196.4, 197,
        198.6, 199.2, 200.8, 201.4, 202.4, 202.9]
    for (let i = 0; i < PH8MainArr.length; i++) { // 2.2s
        MainTimeLineArr.push(PH8MainArr[i] + InitTime)
    }
    for (let i = 0; i < 31; i++) { // 0.55s
        SubTimeLineArr.push(186.1 + 0.55 * i + InitTime)
    }

    // FadeIn, FadeOut
    const FadeIn = [203.4, 204.7]
    const FadeOut = [204.7, 205.5]

    // Phase 9
    const PH9MainArr = [205.7, 207.9, 210.1, 212.3, 214.5, 216.7, 218.9, 221.1]
    for (let i = 0; i < 8; i++) {
        MainTimeLineArr.push(PH9MainArr[i] + InitTime)
    }
    for (let i = 0; i < 28; i++) {
        SubTimeLineArr.push(205.7 + 0.55 * i + InitTime)
    }

    const VolUpArr2 = [222.7, 223.1]
    Sub2TimeLineArr.push(VolUpArr2[0] + InitTime)
    Sub2TimeLineArr.push(VolUpArr2[1] + InitTime)

    // Phase 10
    const PH10MainArr = [223.1, 225.3, 227.5, 229.7, 231.9, 234.1, 236.6, 238.5, 239.5]
    for (let i = 0; i < PH10MainArr.length; i++) {
        MainTimeLineArr.push(PH10MainArr[i] + InitTime)
    }
    for (let i = 0; i < 28; i++) {
        SubTimeLineArr.push(223.1 + 0.55 * i + InitTime)
    }

    const VolUpArr3 = [240, 240.4]
    Sub2TimeLineArr.push(VolUpArr3[0] + InitTime)
    Sub2TimeLineArr.push(VolUpArr3[1] + InitTime)

    // Last Phase
    for (let i = 0; i < 30; i++) {
        SubTimeLineArr.push(241.15 + 0.55 * i + InitTime)
    }

    // Sort
    for (let i = 0; i < SubTimeLineArr.length; i++) {
        MainTimeLineArr.push(SubTimeLineArr[i])
    }
    for (let i = 0; i < Sub2TimeLineArr.length; i++) {
        MainTimeLineArr.push(Sub2TimeLineArr[i])
    }
    for (let i = 0; i < MainTimeLineArr.length; i++) {
        MainTimeLineArr[i] = MainTimeLineArr[i]*10
    }
    MainTimeLineArr.sort(Sort_Asc)
    
    return MainTimeLineArr
}
