// Language System for Multi-language Support
const LANGUAGE_DATA = {
    th: {
        title: "เครื่องคำนวณมอร์ต้าร์",
        mortarType: "🎯 ประเภทมอร์ต้าร์",
        originalGame: "เกมต้นฉบับ",
        modMortars: "[MOD] Adult Mortars",
        shellType: "💥 ประเภทกระสุน",
        heShell: "กระสุนระเบิด",
        smokeShell: "กระสุนควัน", 
        illuminationShell: "กระสุนส่องสว่าง",
        "0832AyShell": "กระสุนระเบิด 0-832Ay",
        weaponPosition: "📍 ตำแหน่งอาวุธ",
        weapon: "อาวุธ",
        targetPosition: "🎯 ตำแหน่งเป้าหมาย", 
        target: "เป้าหมาย",
        gridX: "Grid X (0-20000):",
        gridY: "Grid Y (0-20000):",
        gridReference: "Grid Reference:",
        gridWarning: "รูปแบบ Grid Reference ต้องเท่ากับในแผนเกม",
        altitude: "ระดับความสูง (m):",
        calculate: "🧮 คำนวณ",
        firingSolution: "📊 ผลการคำนวณการยิง",
        distance: "ระยะทาง:",
        azimuth: "มุมแอซิมุท:",
        elevation: "มุมยกปืน:",
        charge: "ประจุ:",
        timeOfFlight: "เวลาบิน:",
        heightDifference: "ความต่างความสูง:",
        accuracyWarning: "⚠️ คำเตือนความแม่นยำ",
        accuracyWarningText: "หากระยะชดเชยความสูงมากกว่า 100 เมตร จะมีความคลาดเคลื่อนของระยะกระสุนตก 50-200 เมตร",
        ballisticData: "📋 ข้อมูลลิสติก",
        range: "ระยะ (m)",
        elevationMil: "มุมยกปืน (mil)",
        timeSec: "เวลา (วิ)",
        dispersion: "การกระจาย",
        footer: "เครื่องคำนวณมอร์ต้าร์ ARMA REFORGER v1.0 | อิงจากข้อมูลลิสติกในเกม",
        createdBy: "สร้างโดย:",
        targetPresets: "🎯 เป้าหมายที่บันทึกไว้",
        presetInstructions: "PC: คลิกซ้าย(โหลด) • คลิกขวา(บันทึก) | มือถือ: แตะ(โหลด) • แตะค้าง(บันทึก) | ✗: เคลีย",
        presetSaved: "บันทึกเป้าหมาย",
        presetLoaded: "โหลดเป้าหมาย",
        presetEmpty: "ว่าง",
        presetSavedMessage: "บันทึกเป้าหมาย {0} เรียบร้อยแล้ว",
        presetLoadedMessage: "โหลดเป้าหมาย {0} เรียบร้อยแล้ว",
        clearTarget: "เคลียทั้งหมด",
        clearTargetMessage: "เคลียข้อมูลเป้าหมายและเป้าหมายที่บันทึกไว้ทั้งหมดเรียบร้อยแล้ว",
        videoTutorial: "📺 วิดีโอสอนการใช้งาน"
    },
    en: {
        title: "Mortar Calculator",
        mortarType: "🎯 Mortar Type",
        originalGame: "Original Game",
        modMortars: "[MOD] Adult Mortars",
        shellType: "💥 Shell Type",
        heShell: "HE shell",
        smokeShell: "Smoke shell",
        illuminationShell: "Illumination shell",
        "0832AyShell": "0-832Ay HE shell", 
        weaponPosition: "📍 Weapon Position",
        weapon: "WEAPON",
        targetPosition: "🎯 Target Position",
        target: "TARGET", 
        gridX: "Grid X (0-20000):",
        gridY: "Grid Y (0-20000):",
        gridReference: "Grid Reference:",
        gridWarning: "Grid Reference format matches in-game Map display",
        altitude: "Altitude (m):",
        calculate: "🧮 CALCULATE",
        firingSolution: "📊 FIRING SOLUTION",
        distance: "Distance:",
        azimuth: "Azimuth:",
        elevation: "Elevation:",
        charge: "Charge:",
        timeOfFlight: "Time of Flight:",
        heightDifference: "Height Difference:",
        accuracyWarning: "⚠️ Accuracy Warning",
        accuracyWarningText: "If height compensation distance is greater than 100 meters, there will be impact deviation of 50-200 meters",
        ballisticData: "📋 Ballistic Data",
        range: "Range (m)",
        elevationMil: "Elevation (mil)",
        timeSec: "Time (sec)",
        dispersion: "Dispersion",
        footer: "ARMA REFORGER Mortar Calculator v1.0 | Based on in-game ballistic data",
        createdBy: "Created by:",
        targetPresets: "🎯 Target Presets",
        presetInstructions: "PC: Left-click(Load) • Right-click(Save) | Mobile: Tap(Load) • Long-press(Save) | ✗: Clear All",
        presetSaved: "Saved",
        presetLoaded: "Loaded",
        presetEmpty: "Empty",
        presetSavedMessage: "Target {0} saved successfully",
        presetLoadedMessage: "Target {0} loaded successfully",
        clearTarget: "Clear All",
        clearTargetMessage: "All target data and saved presets cleared successfully",
        videoTutorial: "📺 Video Tutorial"
    }
};

let currentLanguage = 'th'; // Default to Thai

// Language switching functions
function switchLanguage(lang) {
    currentLanguage = lang;
    updateLanguageDisplay();
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

function updateLanguageDisplay() {
    const texts = LANGUAGE_DATA[currentLanguage];
    
    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        if (texts[key]) {
            element.textContent = texts[key];
        }
    });
    
    // Update shell info if calculator is initialized
    if (window.mortarCalculator && window.mortarCalculator.updateShellInfo) {
        window.mortarCalculator.updateShellInfo();
        // Update preset button statuses with new language (exclude clear button)
        for (let i = 1; i <= 8; i++) {
            window.mortarCalculator.updatePresetButtonStatus(i);
        }
    }
}

// Initialize language system
function initializeLanguage() {
    // Get saved preference or default to Thai
    const savedLang = localStorage.getItem('preferredLanguage') || 'th';
    switchLanguage(savedLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
}

// Ballistic Data for ARMA REFORGER Mortars
// Based on MOD Adult Mortars data from the provided images

const BALLISTIC_DATA = {
    original: {
        // Original game mortar data - M252 (อัพเดทตามภาพ)
        M821: {
            0: [
                { range: 50, elevation: 1540, timeOfFlight: 13.2, dispersion: "61m" },
                { range: 100, elevation: 1479, timeOfFlight: 13.2, dispersion: "63m" },
                { range: 150, elevation: 1416, timeOfFlight: 13.0, dispersion: "66m" },
                { range: 200, elevation: 1350, timeOfFlight: 12.8, dispersion: "71m" },
                { range: 250, elevation: 1279, timeOfFlight: 12.6, dispersion: "78m" },
                { range: 300, elevation: 1201, timeOfFlight: 12.3, dispersion: "95m" },
                { range: 350, elevation: 1106, timeOfFlight: 11.7, dispersion: "151m" },
                { range: 400, elevation: 955, timeOfFlight: 10.7, dispersion: "0m" }
            ],
            1: [
                { range: 200, elevation: 1492, timeOfFlight: 19.9, dispersion: "27m" },
                { range: 300, elevation: 1437, timeOfFlight: 19.7, dispersion: "29m" },
                { range: 400, elevation: 1378, timeOfFlight: 19.5, dispersion: "31m" },
                { range: 500, elevation: 1317, timeOfFlight: 19.2, dispersion: "33m" },
                { range: 600, elevation: 1249, timeOfFlight: 18.8, dispersion: "35m" },
                { range: 700, elevation: 1174, timeOfFlight: 18.3, dispersion: "42m" },
                { range: 800, elevation: 1085, timeOfFlight: 17.5, dispersion: "57m" },
                { range: 900, elevation: 954, timeOfFlight: 16.1, dispersion: "148m" }
            ],
            2: [
                { range: 200, elevation: 1538, timeOfFlight: 26.6, dispersion: "15m" },
                { range: 300, elevation: 1507, timeOfFlight: 26.5, dispersion: "16m" },
                { range: 400, elevation: 1475, timeOfFlight: 26.4, dispersion: "16m" },
                { range: 500, elevation: 1443, timeOfFlight: 26.3, dispersion: "16m" },
                { range: 600, elevation: 1410, timeOfFlight: 26.2, dispersion: "16m" },
                { range: 700, elevation: 1376, timeOfFlight: 26.0, dispersion: "17m" },
                { range: 800, elevation: 1341, timeOfFlight: 25.8, dispersion: "18m" },
                { range: 900, elevation: 1305, timeOfFlight: 25.5, dispersion: "20m" },
                { range: 1000, elevation: 1266, timeOfFlight: 25.2, dispersion: "20m" },
                { range: 1100, elevation: 1225, timeOfFlight: 24.9, dispersion: "22m" },
                { range: 1200, elevation: 1180, timeOfFlight: 24.4, dispersion: "23m" },
                { range: 1300, elevation: 1132, timeOfFlight: 23.9, dispersion: "27m" },
                { range: 1400, elevation: 1076, timeOfFlight: 23.2, dispersion: "31m" },
                { range: 1500, elevation: 1009, timeOfFlight: 22.3, dispersion: "43m" },
                { range: 1600, elevation: 912, timeOfFlight: 20.9, dispersion: "109m" }
            ],
            3: [
                { range: 300, elevation: 1534, timeOfFlight: 31.7, dispersion: "11m" },
                { range: 400, elevation: 1511, timeOfFlight: 31.6, dispersion: "11m" },
                { range: 500, elevation: 1489, timeOfFlight: 31.6, dispersion: "12m" },
                { range: 600, elevation: 1466, timeOfFlight: 31.5, dispersion: "12m" },
                { range: 700, elevation: 1442, timeOfFlight: 31.4, dispersion: "12m" },
                { range: 800, elevation: 1419, timeOfFlight: 31.3, dispersion: "12m" },
                { range: 900, elevation: 1395, timeOfFlight: 31.1, dispersion: "13m" },
                { range: 1000, elevation: 1370, timeOfFlight: 31.0, dispersion: "13m" },
                { range: 1100, elevation: 1344, timeOfFlight: 30.8, dispersion: "13m" },
                { range: 1200, elevation: 1318, timeOfFlight: 30.6, dispersion: "13m" },
                { range: 1300, elevation: 1291, timeOfFlight: 30.3, dispersion: "14m" },
                { range: 1400, elevation: 1263, timeOfFlight: 30.1, dispersion: "15m" },
                { range: 1500, elevation: 1233, timeOfFlight: 29.0, dispersion: "15m" },
                { range: 1600, elevation: 1202, timeOfFlight: 29.4, dispersion: "16m" },
                { range: 1700, elevation: 1169, timeOfFlight: 29.0, dispersion: "17m" },
                { range: 1800, elevation: 1136, timeOfFlight: 28.5, dispersion: "19m" },
                { range: 1900, elevation: 1094, timeOfFlight: 28.0, dispersion: "21m" },
                { range: 2000, elevation: 1051, timeOfFlight: 27.3, dispersion: "26m" },
                { range: 2100, elevation: 999, timeOfFlight: 26.5, dispersion: "31m" },
                { range: 2200, elevation: 931, timeOfFlight: 25.3, dispersion: "46m" },
                { range: 2300, elevation: 801, timeOfFlight: 22.7, dispersion: "0m" }
            ],
            4: [
                { range: 400, elevation: 1531, timeOfFlight: 36.3, dispersion: "9m" },
                { range: 500, elevation: 1514, timeOfFlight: 36.2, dispersion: "9m" },
                { range: 600, elevation: 1496, timeOfFlight: 36.2, dispersion: "9m" },
                { range: 700, elevation: 1478, timeOfFlight: 36.1, dispersion: "9m" },
                { range: 800, elevation: 1460, timeOfFlight: 36.0, dispersion: "9m" },
                { range: 900, elevation: 1442, timeOfFlight: 35.9, dispersion: "9m" },
                { range: 1000, elevation: 1424, timeOfFlight: 35.8, dispersion: "10m" },
                { range: 1100, elevation: 1405, timeOfFlight: 35.7, dispersion: "10m" },
                { range: 1200, elevation: 1385, timeOfFlight: 35.6, dispersion: "9m" },
                { range: 1300, elevation: 1366, timeOfFlight: 35.4, dispersion: "10m" },
                { range: 1400, elevation: 1346, timeOfFlight: 35.3, dispersion: "10m" },
                { range: 1500, elevation: 1326, timeOfFlight: 35.1, dispersion: "11m" },
                { range: 1600, elevation: 1305, timeOfFlight: 34.9, dispersion: "11m" },
                { range: 1700, elevation: 1283, timeOfFlight: 34.6, dispersion: "11m" },
                { range: 1800, elevation: 1261, timeOfFlight: 34.4, dispersion: "11m" },
                { range: 1900, elevation: 1238, timeOfFlight: 34.1, dispersion: "12m" },
                { range: 2000, elevation: 1214, timeOfFlight: 33.8, dispersion: "12m" },
                { range: 2100, elevation: 1188, timeOfFlight: 33.5, dispersion: "13m" },
                { range: 2200, elevation: 1162, timeOfFlight: 33.1, dispersion: "14m" },
                { range: 2300, elevation: 1134, timeOfFlight: 32.7, dispersion: "15m" },
                { range: 2400, elevation: 1104, timeOfFlight: 32.2, dispersion: "17m" },
                { range: 2500, elevation: 1070, timeOfFlight: 31.7, dispersion: "17m" },
                { range: 2600, elevation: 1034, timeOfFlight: 31.0, dispersion: "20m" },
                { range: 2700, elevation: 993, timeOfFlight: 30.3, dispersion: "25m" },
                { range: 2800, elevation: 942, timeOfFlight: 29.2, dispersion: "31m" },
                { range: 2900, elevation: 870, timeOfFlight: 27.7, dispersion: "64m" }
            ]
        },
        M819: {
            1: [
                { range: 200, elevation: 1463, timeOfFlight: 17.7, dispersion: "36m" },
                { range: 250, elevation: 1427, timeOfFlight: 17.6, dispersion: "36m" },
                { range: 300, elevation: 1391, timeOfFlight: 17.5, dispersion: "39m" },
                { range: 350, elevation: 1352, timeOfFlight: 17.3, dispersion: "38m" },
                { range: 400, elevation: 1314, timeOfFlight: 17.2, dispersion: "43m" },
                { range: 450, elevation: 1271, timeOfFlight: 16.9, dispersion: "44m" },
                { range: 500, elevation: 1227, timeOfFlight: 16.7, dispersion: "49m" },
                { range: 550, elevation: 1178, timeOfFlight: 16.4, dispersion: "54m" },
                { range: 600, elevation: 1124, timeOfFlight: 16.0, dispersion: "64m" },
                { range: 650, elevation: 1060, timeOfFlight: 15.4, dispersion: "78m" },
                { range: 700, elevation: 982, timeOfFlight: 14.7, dispersion: "160m" },
                { range: 750, elevation: 822, timeOfFlight: 13.0, dispersion: "0m" }
            ],
            2: [
                { range: 200, elevation: 1538, timeOfFlight: 24.8, dispersion: "19m" },
                { range: 300, elevation: 1491, timeOfFlight: 24.7, dispersion: "19m" },
                { range: 400, elevation: 1453, timeOfFlight: 24.6, dispersion: "19m" },
                { range: 500, elevation: 1414, timeOfFlight: 24.4, dispersion: "19m" },
                { range: 600, elevation: 1374, timeOfFlight: 24.2, dispersion: "20m" },
                { range: 700, elevation: 1333, timeOfFlight: 24.0, dispersion: "22m" },
                { range: 800, elevation: 1289, timeOfFlight: 23.7, dispersion: "23m" },
                { range: 900, elevation: 1242, timeOfFlight: 23.3, dispersion: "25m" },
                { range: 1000, elevation: 1191, timeOfFlight: 22.9, dispersion: "28m" },
                { range: 1100, elevation: 1135, timeOfFlight: 22.3, dispersion: "31m" },
                { range: 1200, elevation: 1067, timeOfFlight: 21.6, dispersion: "39m" },
                { range: 1300, elevation: 980, timeOfFlight: 20.5, dispersion: "58m" },
                { range: 1400, elevation: 818, timeOfFlight: 18.0, dispersion: "0m" }
            ],
            3: [
                { range: 300, elevation: 1522, timeOfFlight: 29.6, dispersion: "14m" },
                { range: 400, elevation: 1495, timeOfFlight: 29.6, dispersion: "14m" },
                { range: 500, elevation: 1467, timeOfFlight: 29.5, dispersion: "14m" },
                { range: 600, elevation: 1440, timeOfFlight: 29.3, dispersion: "14m" },
                { range: 700, elevation: 1412, timeOfFlight: 29.2, dispersion: "14m" },
                { range: 800, elevation: 1383, timeOfFlight: 29.0, dispersion: "14m" },
                { range: 900, elevation: 1354, timeOfFlight: 28.9, dispersion: "16m" },
                { range: 1000, elevation: 1323, timeOfFlight: 28.6, dispersion: "16m" },
                { range: 1100, elevation: 1291, timeOfFlight: 28.4, dispersion: "17m" },
                { range: 1200, elevation: 1257, timeOfFlight: 28.1, dispersion: "18m" },
                { range: 1300, elevation: 1221, timeOfFlight: 27.7, dispersion: "20m" },
                { range: 1400, elevation: 1183, timeOfFlight: 27.3, dispersion: "23m" },
                { range: 1500, elevation: 1142, timeOfFlight: 26.8, dispersion: "25m" },
                { range: 1600, elevation: 1096, timeOfFlight: 26.2, dispersion: "30m" },
                { range: 1700, elevation: 1044, timeOfFlight: 25.5, dispersion: "38m" },
                { range: 1800, elevation: 980, timeOfFlight: 24.5, dispersion: "84m" },
                { range: 1900, elevation: 892, timeOfFlight: 23.0, dispersion: "0m" }
            ],
            4: [
                { range: 400, elevation: 1517, timeOfFlight: 33.6, dispersion: "11m" },
                { range: 500, elevation: 1495, timeOfFlight: 33.5, dispersion: "10m" },
                { range: 600, elevation: 1474, timeOfFlight: 33.5, dispersion: "11m" },
                { range: 700, elevation: 1452, timeOfFlight: 33.4, dispersion: "11m" },
                { range: 800, elevation: 1429, timeOfFlight: 33.2, dispersion: "11m" },
                { range: 900, elevation: 1407, timeOfFlight: 33.1, dispersion: "12m" },
                { range: 1000, elevation: 1383, timeOfFlight: 33.0, dispersion: "11m" },
                { range: 1100, elevation: 1360, timeOfFlight: 32.8, dispersion: "12m" },
                { range: 1200, elevation: 1335, timeOfFlight: 32.6, dispersion: "12m" },
                { range: 1300, elevation: 1310, timeOfFlight: 32.4, dispersion: "13m" },
                { range: 1400, elevation: 1284, timeOfFlight: 32.1, dispersion: "14m" },
                { range: 1500, elevation: 1257, timeOfFlight: 31.9, dispersion: "14m" },
                { range: 1600, elevation: 1228, timeOfFlight: 31.6, dispersion: "15m" },
                { range: 1700, elevation: 1199, timeOfFlight: 31.2, dispersion: "17m" },
                { range: 1800, elevation: 1166, timeOfFlight: 30.8, dispersion: "16m" },
                { range: 1900, elevation: 1132, timeOfFlight: 30.3, dispersion: "18m" },
                { range: 2000, elevation: 1096, timeOfFlight: 29.8, dispersion: "21m" },
                { range: 2100, elevation: 1055, timeOfFlight: 29.1, dispersion: "23m" },
                { range: 2200, elevation: 1008, timeOfFlight: 28.4, dispersion: "28m" },
                { range: 2300, elevation: 952, timeOfFlight: 27.4, dispersion: "36m" },
                { range: 2400, elevation: 871, timeOfFlight: 25.8, dispersion: "67m" }
            ]
        },
        M853A1: {
            1: [
                { range: 200, elevation: 1463, timeOfFlight: 18.1, dispersion: "35m" },
                { range: 250, elevation: 1428, timeOfFlight: 18.0, dispersion: "37m" },
                { range: 300, elevation: 1391, timeOfFlight: 17.9, dispersion: "39m" },
                { range: 350, elevation: 1352, timeOfFlight: 17.7, dispersion: "40m" },
                { range: 400, elevation: 1312, timeOfFlight: 17.5, dispersion: "43m" },
                { range: 450, elevation: 1269, timeOfFlight: 17.3, dispersion: "45m" },
                { range: 500, elevation: 1224, timeOfFlight: 17.0, dispersion: "49m" },
                { range: 550, elevation: 1175, timeOfFlight: 16.7, dispersion: "55m" },
                { range: 600, elevation: 1120, timeOfFlight: 16.3, dispersion: "65m" },
                { range: 650, elevation: 1055, timeOfFlight: 15.7, dispersion: "81m" },
                { range: 700, elevation: 974, timeOfFlight: 15.0, dispersion: "151m" },
                { range: 750, elevation: 823, timeOfFlight: 13.3, dispersion: "0m" }
            ],
            2: [
                { range: 200, elevation: 1529, timeOfFlight: 26.2, dispersion: "17m" },
                { range: 300, elevation: 1496, timeOfFlight: 26.1, dispersion: "18m" },
                { range: 400, elevation: 1457, timeOfFlight: 26.0, dispersion: "19m" },
                { range: 500, elevation: 1419, timeOfFlight: 25.8, dispersion: "19m" },
                { range: 600, elevation: 1379, timeOfFlight: 25.6, dispersion: "20m" },
                { range: 700, elevation: 1338, timeOfFlight: 25.4, dispersion: "21m" },
                { range: 800, elevation: 1295, timeOfFlight: 25.1, dispersion: "23m" },
                { range: 900, elevation: 1249, timeOfFlight: 24.7, dispersion: "25m" },
                { range: 1000, elevation: 1199, timeOfFlight: 24.3, dispersion: "27m" },
                { range: 1100, elevation: 1144, timeOfFlight: 23.7, dispersion: "30m" },
                { range: 1200, elevation: 1081, timeOfFlight: 23.0, dispersion: "35m" },
                { range: 1300, elevation: 1005, timeOfFlight: 22.0, dispersion: "47m" },
                { range: 1400, elevation: 900, timeOfFlight: 20.5, dispersion: "98m" }
            ],
            3: [
                { range: 300, elevation: 1521, timeOfFlight: 31.1, dispersion: "14m" },
                { range: 400, elevation: 1494, timeOfFlight: 31.1, dispersion: "14m" },
                { range: 500, elevation: 1466, timeOfFlight: 31.0, dispersion: "14m" },
                { range: 600, elevation: 1438, timeOfFlight: 30.8, dispersion: "14m" },
                { range: 700, elevation: 1409, timeOfFlight: 30.7, dispersion: "14m" },
                { range: 800, elevation: 1380, timeOfFlight: 30.5, dispersion: "16m" },
                { range: 900, elevation: 1349, timeOfFlight: 30.3, dispersion: "16m" },
                { range: 1000, elevation: 1317, timeOfFlight: 30.1, dispersion: "16m" },
                { range: 1100, elevation: 1284, timeOfFlight: 29.8, dispersion: "18m" },
                { range: 1200, elevation: 1249, timeOfFlight: 29.4, dispersion: "19m" },
                { range: 1300, elevation: 1212, timeOfFlight: 29.1, dispersion: "20m" },
                { range: 1400, elevation: 1172, timeOfFlight: 28.6, dispersion: "21m" },
                { range: 1500, elevation: 1128, timeOfFlight: 28.1, dispersion: "22m" },
                { range: 1600, elevation: 1081, timeOfFlight: 27.4, dispersion: "26m" },
                { range: 1700, elevation: 1027, timeOfFlight: 26.6, dispersion: "30m" },
                { range: 1800, elevation: 962, timeOfFlight: 25.6, dispersion: "39m" },
                { range: 1900, elevation: 875, timeOfFlight: 24.1, dispersion: "67m" }
            ],
            4: [
                { range: 400, elevation: 1515, timeOfFlight: 35.7, dispersion: "11m" },
                { range: 500, elevation: 1493, timeOfFlight: 35.7, dispersion: "11m" },
                { range: 600, elevation: 1471, timeOfFlight: 35.6, dispersion: "11m" },
                { range: 700, elevation: 1448, timeOfFlight: 35.5, dispersion: "11m" },
                { range: 800, elevation: 1426, timeOfFlight: 35.4, dispersion: "12m" },
                { range: 900, elevation: 1402, timeOfFlight: 35.2, dispersion: "12m" },
                { range: 1000, elevation: 1378, timeOfFlight: 35.0, dispersion: "12m" },
                { range: 1100, elevation: 1353, timeOfFlight: 34.8, dispersion: "13m" },
                { range: 1200, elevation: 1328, timeOfFlight: 34.6, dispersion: "13m" },
                { range: 1300, elevation: 1301, timeOfFlight: 34.4, dispersion: "14m" },
                { range: 1400, elevation: 1274, timeOfFlight: 34.1, dispersion: "14m" },
                { range: 1500, elevation: 1245, timeOfFlight: 33.8, dispersion: "15m" },
                { range: 1600, elevation: 1215, timeOfFlight: 33.4, dispersion: "15m" },
                { range: 1700, elevation: 1184, timeOfFlight: 33.0, dispersion: "17m" },
                { range: 1800, elevation: 1151, timeOfFlight: 32.6, dispersion: "18m" },
                { range: 1900, elevation: 1115, timeOfFlight: 32.1, dispersion: "19m" },
                { range: 2000, elevation: 1076, timeOfFlight: 31.5, dispersion: "21m" },
                { range: 2100, elevation: 1033, timeOfFlight: 30.8, dispersion: "23m" },
                { range: 2200, elevation: 985, timeOfFlight: 29.9, dispersion: "27m" },
                { range: 2300, elevation: 928, timeOfFlight: 28.8, dispersion: "33m" },
                { range: 2400, elevation: 855, timeOfFlight: 27.4, dispersion: "52m" }
            ]
        },
        "0-832Ay": {
            // 0 Ring - Original (Dispersion: 8m ตามภาพที่ 2)
            0: [
                { range: 50, elevation: 1455, timeOfFlight: 15, dispersion: "44m" },
                { range: 100, elevation: 1411, timeOfFlight: 15, dispersion: "46m" },
                { range: 150, elevation: 1365, timeOfFlight: 14.9, dispersion: "47m" },
                { range: 200, elevation: 1318, timeOfFlight: 14.8, dispersion: "50m" },
                { range: 250, elevation: 1268, timeOfFlight: 14.6, dispersion: "51m" },
                { range: 300, elevation: 1217, timeOfFlight: 14.4, dispersion: "58m" },
                { range: 350, elevation: 1159, timeOfFlight: 14.1, dispersion: "64m" },
                { range: 400, elevation: 1095, timeOfFlight: 13.7, dispersion: "72m" },
                { range: 450, elevation: 1023, timeOfFlight: 13.2, dispersion: "101m" },
                { range: 500, elevation: 922, timeOfFlight: 12.4, dispersion: "0m" }
            ],
            // 1 Ring - Original (Dispersion: 13m ตามภาพที่ 1)
            1: [
                { range: 100, elevation: 1446, timeOfFlight: 19.5, dispersion: "27m" },
                { range: 200, elevation: 1392, timeOfFlight: 19.4, dispersion: "28m" },
                { range: 300, elevation: 1335, timeOfFlight: 19.2, dispersion: "29m" },
                { range: 400, elevation: 1275, timeOfFlight: 18.9, dispersion: "31m" },
                { range: 500, elevation: 1212, timeOfFlight: 18.6, dispersion: "35m" },
                { range: 600, elevation: 1141, timeOfFlight: 18.1, dispersion: "40m" },
                { range: 700, elevation: 1058, timeOfFlight: 17.4, dispersion: "48m" },
                { range: 800, elevation: 952, timeOfFlight: 16.4, dispersion: "81m" }
            ],
            // 2 Ring - Original (Dispersion: 19m ตามภาพที่ 1)
            2: [
                { range: 200, elevation: 1432, timeOfFlight: 24.8, dispersion: "17m" },
                { range: 300, elevation: 1397, timeOfFlight: 24.7, dispersion: "18m" },
                { range: 400, elevation: 1362, timeOfFlight: 24.6, dispersion: "18m" },
                { range: 500, elevation: 1325, timeOfFlight: 24.4, dispersion: "18m" },
                { range: 600, elevation: 1288, timeOfFlight: 24.2, dispersion: "20m" },
                { range: 700, elevation: 1248, timeOfFlight: 24, dispersion: "20m" },
                { range: 800, elevation: 1207, timeOfFlight: 23.7, dispersion: "22m" },
                { range: 900, elevation: 1162, timeOfFlight: 23.3, dispersion: "23m" },
                { range: 1000, elevation: 1114, timeOfFlight: 22.9, dispersion: "26m" },
                { range: 1100, elevation: 1060, timeOfFlight: 22.3, dispersion: "29m" },
                { range: 1200, elevation: 997, timeOfFlight: 21.5, dispersion: "37m" },
                { range: 1300, elevation: 914, timeOfFlight: 20.4, dispersion: "55m" },
                { range: 1400, elevation: 755, timeOfFlight: 17.8, dispersion: "0m" }
            ],
            // 3 Ring - Original (Dispersion: 27m ตามภาพที่ 1)
            3: [
                { range: 300, elevation: 1423, timeOfFlight: 28.9, dispersion: "13m" },
                { range: 400, elevation: 1397, timeOfFlight: 28.8, dispersion: "14m" },
                { range: 500, elevation: 1370, timeOfFlight: 28.6, dispersion: "13m" },
                { range: 600, elevation: 1343, timeOfFlight: 28.5, dispersion: "14m" },
                { range: 700, elevation: 1315, timeOfFlight: 28.5, dispersion: "14m" },
                { range: 800, elevation: 1286, timeOfFlight: 28.3, dispersion: "14m" },
                { range: 900, elevation: 1257, timeOfFlight: 28.1, dispersion: "16m" },
                { range: 1000, elevation: 1226, timeOfFlight: 27.9, dispersion: "16m" },
                { range: 1100, elevation: 1193, timeOfFlight: 27.6, dispersion: "16m" },
                { range: 1200, elevation: 1159, timeOfFlight: 27.2, dispersion: "18m" },
                { range: 1300, elevation: 1123, timeOfFlight: 26.8, dispersion: "19m" },
                { range: 1400, elevation: 1084, timeOfFlight: 26.4, dispersion: "22m" },
                { range: 1500, elevation: 1040, timeOfFlight: 25.8, dispersion: "24m" },
                { range: 1600, elevation: 991, timeOfFlight: 25.1, dispersion: "28m" },
                { range: 1700, elevation: 932, timeOfFlight: 24.2, dispersion: "36m" },
                { range: 1800, elevation: 851, timeOfFlight: 22.8, dispersion: "68m" }
            ],
            // 4 Ring - Original (Dispersion: 34m ตามภาพที่ 1)
            4: [
                { range: 400, elevation: 1418, timeOfFlight: 32.9, dispersion: "10m" },
                { range: 500, elevation: 1398, timeOfFlight: 32.9, dispersion: "11m" },
                { range: 600, elevation: 1376, timeOfFlight: 32.8, dispersion: "10m" },
                { range: 700, elevation: 1355, timeOfFlight: 32.7, dispersion: "11m" },
                { range: 800, elevation: 1333, timeOfFlight: 32.6, dispersion: "11m" },
                { range: 900, elevation: 1311, timeOfFlight: 32.4, dispersion: "12m" },
                { range: 1000, elevation: 1288, timeOfFlight: 32.2, dispersion: "12m" },
                { range: 1100, elevation: 1264, timeOfFlight: 32.1, dispersion: "12m" },
                { range: 1200, elevation: 1240, timeOfFlight: 31.8, dispersion: "13m" },
                { range: 1300, elevation: 1215, timeOfFlight: 31.6, dispersion: "13m" },
                { range: 1400, elevation: 1189, timeOfFlight: 31.3, dispersion: "14m" },
                { range: 1500, elevation: 1161, timeOfFlight: 31, dispersion: "14m" },
                { range: 1600, elevation: 1133, timeOfFlight: 30.7, dispersion: "15m" },
                { range: 1700, elevation: 1102, timeOfFlight: 30.3, dispersion: "16m" },
                { range: 1800, elevation: 1069, timeOfFlight: 29.8, dispersion: "17m" },
                { range: 1900, elevation: 1034, timeOfFlight: 29.3, dispersion: "19m" },
                { range: 2000, elevation: 995, timeOfFlight: 28.7, dispersion: "22m" },
                { range: 2100, elevation: 950, timeOfFlight: 27.9, dispersion: "26m" },
                { range: 2200, elevation: 896, timeOfFlight: 26.9, dispersion: "34m" },
                { range: 2300, elevation: 820, timeOfFlight: 25.3, dispersion: "65m" }
            ]
        }
    },
    mod: {
        M821: {
            // Charge 0 - Dispersion: 10m
            0: [
                { range: 50, elevation: 1540, timeOfFlight: 13.2, dispersion: "61m" },
                { range: 100, elevation: 1479, timeOfFlight: 13.2, dispersion: "63m" },
                { range: 150, elevation: 1416, timeOfFlight: 13.0, dispersion: "66m" },
                { range: 200, elevation: 1350, timeOfFlight: 12.8, dispersion: "71m" },
                { range: 250, elevation: 1279, timeOfFlight: 12.6, dispersion: "78m" },
                { range: 300, elevation: 1201, timeOfFlight: 12.3, dispersion: "95m" },
                { range: 350, elevation: 1106, timeOfFlight: 11.7, dispersion: "151m" },
                { range: 400, elevation: 955, timeOfFlight: 10.7, dispersion: "0m" }
            ],
            // Charge 1 - Dispersion: 23m (ตามตารางในภาพ)
            1: [
                { range: 300, elevation: 1520, timeOfFlight: 28.6, dispersion: "14m" },
                { range: 400, elevation: 1492, timeOfFlight: 28.6, dispersion: "13m" },
                { range: 500, elevation: 1465, timeOfFlight: 28.5, dispersion: "14m" },
                { range: 600, elevation: 1437, timeOfFlight: 28.3, dispersion: "15m" },
                { range: 700, elevation: 1408, timeOfFlight: 28.2, dispersion: "15m" },
                { range: 800, elevation: 1378, timeOfFlight: 28.0, dispersion: "15m" },
                { range: 900, elevation: 1348, timeOfFlight: 27.9, dispersion: "16m" },
                { range: 1000, elevation: 1316, timeOfFlight: 27.6, dispersion: "15m" },
                { range: 1100, elevation: 1284, timeOfFlight: 27.5, dispersion: "17m" },
                { range: 1200, elevation: 1249, timeOfFlight: 27.1, dispersion: "18m" },
                { range: 1300, elevation: 1213, timeOfFlight: 26.7, dispersion: "20m" },
                { range: 1400, elevation: 1173, timeOfFlight: 26.3, dispersion: "20m" },
                { range: 1500, elevation: 1130, timeOfFlight: 25.7, dispersion: "23m" },
                { range: 1600, elevation: 1082, timeOfFlight: 25.1, dispersion: "26m" },
                { range: 1700, elevation: 1026, timeOfFlight: 24.3, dispersion: "33m" },
                { range: 1800, elevation: 955, timeOfFlight: 23.2, dispersion: "50m" },
                { range: 1900, elevation: 841, timeOfFlight: 20.7, dispersion: "0m" }
            ],
            // Charge 2 - MOD Adult Mortars (2 Rings) - Average Dispersion: 39m
            2: [
                { range: 500, elevation: 1523, timeOfFlight: 38.6, dispersion: "8m" },
                { range: 600, elevation: 1507, timeOfFlight: 38.5, dispersion: "8m" },
                { range: 700, elevation: 1491, timeOfFlight: 38.5, dispersion: "8m" },
                { range: 800, elevation: 1475, timeOfFlight: 38.4, dispersion: "8m" },
                { range: 900, elevation: 1459, timeOfFlight: 38.3, dispersion: "8m" },
                { range: 1000, elevation: 1443, timeOfFlight: 38.2, dispersion: "8m" },
                { range: 1100, elevation: 1426, timeOfFlight: 38.1, dispersion: "8m" },
                { range: 1200, elevation: 1410, timeOfFlight: 38.0, dispersion: "9m" },
                { range: 1300, elevation: 1393, timeOfFlight: 37.9, dispersion: "9m" },
                { range: 1400, elevation: 1375, timeOfFlight: 37.7, dispersion: "9m" },
                { range: 1500, elevation: 1358, timeOfFlight: 37.6, dispersion: "9m" },
                { range: 1600, elevation: 1339, timeOfFlight: 37.4, dispersion: "9m" },
                { range: 1700, elevation: 1321, timeOfFlight: 37.3, dispersion: "9m" },
                { range: 1800, elevation: 1302, timeOfFlight: 37.1, dispersion: "10m" },
                { range: 1900, elevation: 1282, timeOfFlight: 36.8, dispersion: "10m" },
                { range: 2000, elevation: 1263, timeOfFlight: 36.6, dispersion: "10m" },
                { range: 2100, elevation: 1242, timeOfFlight: 36.3, dispersion: "11m" },
                { range: 2200, elevation: 1220, timeOfFlight: 36.1, dispersion: "10m" },
                { range: 2300, elevation: 1199, timeOfFlight: 35.8, dispersion: "12m" },
                { range: 2400, elevation: 1175, timeOfFlight: 35.4, dispersion: "12m" },
                { range: 2500, elevation: 1151, timeOfFlight: 35.1, dispersion: "13m" },
                { range: 2600, elevation: 1125, timeOfFlight: 34.6, dispersion: "14m" },
                { range: 2700, elevation: 1098, timeOfFlight: 34.2, dispersion: "16m" },
                { range: 2800, elevation: 1067, timeOfFlight: 33.6, dispersion: "15m" },
                { range: 2900, elevation: 1035, timeOfFlight: 33.0, dispersion: "18m" },
                { range: 3000, elevation: 999, timeOfFlight: 32.3, dispersion: "22m" },
                { range: 3100, elevation: 955, timeOfFlight: 31.4, dispersion: "26m" },
                { range: 3200, elevation: 901, timeOfFlight: 30.2, dispersion: "39m" },
                { range: 3300, elevation: 804, timeOfFlight: 27.8, dispersion: "0m" }
            ],
            // Charge 3 - MOD Adult Mortars (3 Rings) - Average Dispersion: 54m
            3: [
                { range: 700, elevation: 1522, timeOfFlight: 46.5, dispersion: "6m" },
                { range: 800, elevation: 1511, timeOfFlight: 46.4, dispersion: "6m" },
                { range: 900, elevation: 1499, timeOfFlight: 46.4, dispersion: "5m" },
                { range: 1000, elevation: 1488, timeOfFlight: 46.3, dispersion: "6m" },
                { range: 1100, elevation: 1476, timeOfFlight: 46.3, dispersion: "5m" },
                { range: 1200, elevation: 1465, timeOfFlight: 46.2, dispersion: "6m" },
                { range: 1300, elevation: 1453, timeOfFlight: 46.1, dispersion: "6m" },
                { range: 1400, elevation: 1441, timeOfFlight: 46.0, dispersion: "6m" },
                { range: 1500, elevation: 1429, timeOfFlight: 45.9, dispersion: "6m" },
                { range: 1600, elevation: 1417, timeOfFlight: 45.9, dispersion: "6m" },
                { range: 1700, elevation: 1405, timeOfFlight: 45.8, dispersion: "6m" },
                { range: 1800, elevation: 1393, timeOfFlight: 45.6, dispersion: "7m" },
                { range: 1900, elevation: 1380, timeOfFlight: 45.5, dispersion: "6m" },
                { range: 2000, elevation: 1367, timeOfFlight: 45.4, dispersion: "6m" },
                { range: 2100, elevation: 1354, timeOfFlight: 45.3, dispersion: "6m" },
                { range: 2200, elevation: 1341, timeOfFlight: 45.1, dispersion: "6m" },
                { range: 2300, elevation: 1328, timeOfFlight: 45.0, dispersion: "7m" },
                { range: 2400, elevation: 1314, timeOfFlight: 44.8, dispersion: "6m" },
                { range: 2500, elevation: 1301, timeOfFlight: 44.6, dispersion: "7m" },
                { range: 2600, elevation: 1287, timeOfFlight: 44.4, dispersion: "7m" },
                { range: 2700, elevation: 1272, timeOfFlight: 44.3, dispersion: "7m" },
                { range: 2800, elevation: 1258, timeOfFlight: 44.0, dispersion: "8m" },
                { range: 2900, elevation: 1243, timeOfFlight: 43.8, dispersion: "8m" },
                { range: 3000, elevation: 1227, timeOfFlight: 43.6, dispersion: "8m" },
                { range: 3100, elevation: 1211, timeOfFlight: 43.3, dispersion: "8m" },
                { range: 3200, elevation: 1195, timeOfFlight: 43.0, dispersion: "8m" },
                { range: 3300, elevation: 1178, timeOfFlight: 42.8, dispersion: "9m" },
                { range: 3400, elevation: 1161, timeOfFlight: 42.4, dispersion: "9m" },
                { range: 3500, elevation: 1142, timeOfFlight: 42.1, dispersion: "9m" },
                { range: 3600, elevation: 1124, timeOfFlight: 41.7, dispersion: "10m" },
                { range: 3700, elevation: 1104, timeOfFlight: 41.3, dispersion: "10m" },
                { range: 3800, elevation: 1083, timeOfFlight: 40.9, dispersion: "11m" },
                { range: 3900, elevation: 1061, timeOfFlight: 40.4, dispersion: "11m" },
                { range: 4000, elevation: 1037, timeOfFlight: 39.9, dispersion: "13m" },
                { range: 4100, elevation: 1012, timeOfFlight: 39.3, dispersion: "13m" },
                { range: 4200, elevation: 983, timeOfFlight: 38.6, dispersion: "15m" },
                { range: 4300, elevation: 953, timeOfFlight: 37.9, dispersion: "18m" },
                { range: 4400, elevation: 916, timeOfFlight: 36.9, dispersion: "20m" },
                { range: 4500, elevation: 870, timeOfFlight: 35.6, dispersion: "29m" },
                { range: 4600, elevation: 801, timeOfFlight: 33.6, dispersion: "0m" }
            ],
            // Charge 4 - MOD Adult Mortars (4 Rings) - อัพเดทตามข้อมูลล่าสุด
            4: [
                { range: 900, elevation: 1522, timeOfFlight: 53.7, dispersion: "5m" },
                { range: 1000, elevation: 1513, timeOfFlight: 53.7, dispersion: "5m" },
                { range: 1100, elevation: 1504, timeOfFlight: 53.6, dispersion: "5m" },
                { range: 1200, elevation: 1495, timeOfFlight: 53.5, dispersion: "5m" },
                { range: 1300, elevation: 1486, timeOfFlight: 53.5, dispersion: "5m" },
                { range: 1400, elevation: 1477, timeOfFlight: 53.5, dispersion: "5m" },
                { range: 1500, elevation: 1468, timeOfFlight: 53.4, dispersion: "5m" },
                { range: 1600, elevation: 1458, timeOfFlight: 53.4, dispersion: "4m" },
                { range: 1700, elevation: 1449, timeOfFlight: 53.3, dispersion: "4m" },
                { range: 1800, elevation: 1440, timeOfFlight: 53.2, dispersion: "5m" },
                { range: 1900, elevation: 1430, timeOfFlight: 53.1, dispersion: "4m" },
                { range: 2000, elevation: 1421, timeOfFlight: 53.1, dispersion: "5m" },
                { range: 2100, elevation: 1411, timeOfFlight: 53.0, dispersion: "4m" },
                { range: 2200, elevation: 1402, timeOfFlight: 52.9, dispersion: "5m" },
                { range: 2300, elevation: 1392, timeOfFlight: 52.8, dispersion: "5m" },
                { range: 2400, elevation: 1382, timeOfFlight: 52.7, dispersion: "5m" },
                { range: 2500, elevation: 1372, timeOfFlight: 52.6, dispersion: "5m" },
                { range: 2600, elevation: 1362, timeOfFlight: 52.4, dispersion: "5m" },
                { range: 2700, elevation: 1352, timeOfFlight: 52.3, dispersion: "5m" },
                { range: 2800, elevation: 1341, timeOfFlight: 52.2, dispersion: "5m" },
                { range: 2900, elevation: 1331, timeOfFlight: 52.0, dispersion: "5m" },
                { range: 3000, elevation: 1320, timeOfFlight: 51.9, dispersion: "5m" },
                { range: 3100, elevation: 1310, timeOfFlight: 51.7, dispersion: "5m" },
                { range: 3200, elevation: 1299, timeOfFlight: 51.6, dispersion: "6m" },
                { range: 3300, elevation: 1288, timeOfFlight: 51.4, dispersion: "6m" },
                { range: 3400, elevation: 1276, timeOfFlight: 51.2, dispersion: "6m" },
                { range: 3500, elevation: 1265, timeOfFlight: 51.1, dispersion: "5m" },
                { range: 3600, elevation: 1253, timeOfFlight: 50.9, dispersion: "6m" },
                { range: 3700, elevation: 1241, timeOfFlight: 50.7, dispersion: "6m" },
                { range: 3800, elevation: 1229, timeOfFlight: 50.4, dispersion: "6m" },
                { range: 3900, elevation: 1217, timeOfFlight: 50.2, dispersion: "7m" },
                { range: 4000, elevation: 1204, timeOfFlight: 50.0, dispersion: "6m" },
                { range: 4100, elevation: 1191, timeOfFlight: 49.7, dispersion: "7m" },
                { range: 4200, elevation: 1178, timeOfFlight: 49.5, dispersion: "7m" },
                { range: 4300, elevation: 1164, timeOfFlight: 49.2, dispersion: "7m" },
                { range: 4400, elevation: 1150, timeOfFlight: 48.9, dispersion: "7m" },
                { range: 4500, elevation: 1136, timeOfFlight: 48.6, dispersion: "7m" },
                { range: 4600, elevation: 1121, timeOfFlight: 48.2, dispersion: "8m" },
                { range: 4700, elevation: 1105, timeOfFlight: 47.9, dispersion: "8m" },
                { range: 4800, elevation: 1089, timeOfFlight: 47.5, dispersion: "8m" },
                { range: 4900, elevation: 1072, timeOfFlight: 47.1, dispersion: "8m" },
                { range: 5000, elevation: 1055, timeOfFlight: 46.7, dispersion: "9m" },
                { range: 5100, elevation: 1036, timeOfFlight: 46.2, dispersion: "9m" },
                { range: 5200, elevation: 1017, timeOfFlight: 45.7, dispersion: "10m" },
                { range: 5300, elevation: 996, timeOfFlight: 45.1, dispersion: "11m" },
                { range: 5400, elevation: 974, timeOfFlight: 44.5, dispersion: "12m" },
                { range: 5500, elevation: 950, timeOfFlight: 43.8, dispersion: "13m" },
                { range: 5600, elevation: 923, timeOfFlight: 43.0, dispersion: "15m" },
                { range: 5700, elevation: 892, timeOfFlight: 42.1, dispersion: "17m" },
                { range: 5800, elevation: 854, timeOfFlight: 40.9, dispersion: "25m" },
                { range: 5900, elevation: 802, timeOfFlight: 39.1, dispersion: "0m" }
            ]
        },
        // M819 smoke shell data
        M819: {
            1: [
                { range: 300, elevation: 1498, timeOfFlight: 25.6, dispersion: "18m" },
                { range: 350, elevation: 1480, timeOfFlight: 25.6, dispersion: "17m" },
                { range: 400, elevation: 1463, timeOfFlight: 25.5, dispersion: "18m" },
                { range: 450, elevation: 1445, timeOfFlight: 25.5, dispersion: "18m" },
                { range: 500, elevation: 1427, timeOfFlight: 25.4, dispersion: "18m" },
                { range: 550, elevation: 1409, timeOfFlight: 25.3, dispersion: "19m" },
                { range: 600, elevation: 1390, timeOfFlight: 25.2, dispersion: "19m" },
                { range: 650, elevation: 1371, timeOfFlight: 25.1, dispersion: "19m" },
                { range: 700, elevation: 1352, timeOfFlight: 25.0, dispersion: "20m" },
                { range: 750, elevation: 1332, timeOfFlight: 24.9, dispersion: "20m" },
                { range: 800, elevation: 1312, timeOfFlight: 24.7, dispersion: "21m" },
                { range: 850, elevation: 1291, timeOfFlight: 24.6, dispersion: "22m" },
                { range: 900, elevation: 1269, timeOfFlight: 24.4, dispersion: "22m" },
                { range: 950, elevation: 1247, timeOfFlight: 24.3, dispersion: "23m" },
                { range: 1000, elevation: 1224, timeOfFlight: 24.0, dispersion: "24m" },
                { range: 1050, elevation: 1200, timeOfFlight: 23.8, dispersion: "26m" },
                { range: 1100, elevation: 1174, timeOfFlight: 23.6, dispersion: "36m" },
                { range: 1150, elevation: 1148, timeOfFlight: 23.3, dispersion: "29m" },
                { range: 1200, elevation: 1119, timeOfFlight: 23.0, dispersion: "30m" },
                { range: 1250, elevation: 1089, timeOfFlight: 22.6, dispersion: "34m" },
                { range: 1300, elevation: 1055, timeOfFlight: 22.2, dispersion: "38m" },
                { range: 1350, elevation: 1017, timeOfFlight: 21.7, dispersion: "45m" },
                { range: 1400, elevation: 972, timeOfFlight: 21.1, dispersion: "56m" },
                { range: 1450, elevation: 916, timeOfFlight: 20.3, dispersion: "105m" },
                { range: 1500, elevation: 811, timeOfFlight: 18.6, dispersion: "0m" }
            ],
            // Charge 2 - MOD Adult Mortars (2 Rings) - Average Dispersion: 33m
            2: [
                { range: 400, elevation: 1527, timeOfFlight: 36.3, dispersion: "9m" },
                { range: 500, elevation: 1509, timeOfFlight: 36.3, dispersion: "10m" },
                { range: 600, elevation: 1490, timeOfFlight: 36.2, dispersion: "10m" },
                { range: 700, elevation: 1471, timeOfFlight: 36.1, dispersion: "10m" },
                { range: 800, elevation: 1452, timeOfFlight: 36.0, dispersion: "10m" },
                { range: 900, elevation: 1432, timeOfFlight: 35.9, dispersion: "10m" },
                { range: 1000, elevation: 1412, timeOfFlight: 35.8, dispersion: "10m" },
                { range: 1100, elevation: 1392, timeOfFlight: 35.7, dispersion: "10m" },
                { range: 1200, elevation: 1372, timeOfFlight: 35.5, dispersion: "11m" },
                { range: 1300, elevation: 1351, timeOfFlight: 35.4, dispersion: "11m" },
                { range: 1400, elevation: 1328, timeOfFlight: 35.2, dispersion: "11m" },
                { range: 1500, elevation: 1306, timeOfFlight: 34.9, dispersion: "11m" },
                { range: 1600, elevation: 1283, timeOfFlight: 34.7, dispersion: "12m" },
                { range: 1700, elevation: 1259, timeOfFlight: 34.4, dispersion: "12m" },
                { range: 1800, elevation: 1235, timeOfFlight: 34.2, dispersion: "13m" },
                { range: 1900, elevation: 1209, timeOfFlight: 33.8, dispersion: "13m" },
                { range: 2000, elevation: 1181, timeOfFlight: 33.5, dispersion: "14m" },
                { range: 2100, elevation: 1153, timeOfFlight: 33.1, dispersion: "15m" },
                { range: 2200, elevation: 1122, timeOfFlight: 32.6, dispersion: "16m" },
                { range: 2300, elevation: 1089, timeOfFlight: 32.1, dispersion: "18m" },
                { range: 2400, elevation: 1053, timeOfFlight: 31.5, dispersion: "20m" },
                { range: 2500, elevation: 1012, timeOfFlight: 30.7, dispersion: "22m" },
                { range: 2600, elevation: 965, timeOfFlight: 29.8, dispersion: "27m" },
                { range: 2700, elevation: 906, timeOfFlight: 28.7, dispersion: "39m" },
                { range: 2800, elevation: 810, timeOfFlight: 26.5, dispersion: "0m" }
            ],
            // M819 Charge 3 - MOD Adult Mortars (3 Rings) - Average Dispersion: 46m
            3: [
                { range: 500, elevation: 1534, timeOfFlight: 44.1, dispersion: "7m" },
                { range: 600, elevation: 1521, timeOfFlight: 44.1, dispersion: "7m" },
                { range: 700, elevation: 1507, timeOfFlight: 44.0, dispersion: "6m" },
                { range: 800, elevation: 1494, timeOfFlight: 44.0, dispersion: "7m" },
                { range: 900, elevation: 1480, timeOfFlight: 43.9, dispersion: "7m" },
                { range: 1000, elevation: 1466, timeOfFlight: 43.9, dispersion: "7m" },
                { range: 1100, elevation: 1452, timeOfFlight: 43.8, dispersion: "7m" },
                { range: 1200, elevation: 1438, timeOfFlight: 43.8, dispersion: "7m" },
                { range: 1300, elevation: 1424, timeOfFlight: 43.7, dispersion: "7m" },
                { range: 1400, elevation: 1409, timeOfFlight: 43.6, dispersion: "7m" },
                { range: 1500, elevation: 1395, timeOfFlight: 43.5, dispersion: "8m" },
                { range: 1600, elevation: 1380, timeOfFlight: 43.3, dispersion: "8m" },
                { range: 1700, elevation: 1364, timeOfFlight: 43.2, dispersion: "7m" },
                { range: 1800, elevation: 1349, timeOfFlight: 43.1, dispersion: "8m" },
                { range: 1900, elevation: 1333, timeOfFlight: 42.9, dispersion: "8m" },
                { range: 2000, elevation: 1317, timeOfFlight: 42.7, dispersion: "8m" },
                { range: 2100, elevation: 1300, timeOfFlight: 42.6, dispersion: "8m" },
                { range: 2200, elevation: 1284, timeOfFlight: 42.4, dispersion: "9m" },
                { range: 2300, elevation: 1266, timeOfFlight: 42.2, dispersion: "9m" },
                { range: 2400, elevation: 1249, timeOfFlight: 41.9, dispersion: "10m" },
                { range: 2500, elevation: 1230, timeOfFlight: 41.7, dispersion: "9m" },
                { range: 2600, elevation: 1211, timeOfFlight: 41.4, dispersion: "9m" },
                { range: 2700, elevation: 1192, timeOfFlight: 41.1, dispersion: "10m" },
                { range: 2800, elevation: 1172, timeOfFlight: 40.8, dispersion: "11m" },
                { range: 2900, elevation: 1150, timeOfFlight: 40.5, dispersion: "11m" },
                { range: 3000, elevation: 1128, timeOfFlight: 40.1, dispersion: "11m" },
                { range: 3100, elevation: 1105, timeOfFlight: 39.9, dispersion: "12m" },
                { range: 3200, elevation: 1080, timeOfFlight: 39.3, dispersion: "13m" },
                { range: 3300, elevation: 1054, timeOfFlight: 38.3, dispersion: "14m" },
                { range: 3400, elevation: 1026, timeOfFlight: 37.7, dispersion: "15m" },
                { range: 3500, elevation: 996, timeOfFlight: 37.1, dispersion: "18m" },
                { range: 3600, elevation: 961, timeOfFlight: 36.3, dispersion: "19m" },
                { range: 3700, elevation: 921, timeOfFlight: 35.3, dispersion: "21m" },
                { range: 3800, elevation: 873, timeOfFlight: 34.1, dispersion: "28m" },
                { range: 3900, elevation: 806, timeOfFlight: 32.3, dispersion: "0m" }
            ],
            // M819 Charge 4 - MOD Adult Mortars (4 Rings) - Average Dispersion: 57m
            4: [
                { range: 800, elevation: 1515, timeOfFlight: 50.7, dispersion: "6m" },
                { range: 900, elevation: 1504, timeOfFlight: 50.6, dispersion: "5m" },
                { range: 1000, elevation: 1493, timeOfFlight: 50.6, dispersion: "5m" },
                { range: 1100, elevation: 1482, timeOfFlight: 50.5, dispersion: "5m" },
                { range: 1200, elevation: 1471, timeOfFlight: 50.4, dispersion: "6m" },
                { range: 1300, elevation: 1460, timeOfFlight: 50.4, dispersion: "6m" },
                { range: 1400, elevation: 1448, timeOfFlight: 50.3, dispersion: "5m" },
                { range: 1500, elevation: 1437, timeOfFlight: 50.2, dispersion: "6m" },
                { range: 1600, elevation: 1425, timeOfFlight: 50.1, dispersion: "5m" },
                { range: 1700, elevation: 1414, timeOfFlight: 50.0, dispersion: "6m" },
                { range: 1800, elevation: 1402, timeOfFlight: 49.9, dispersion: "6m" },
                { range: 1900, elevation: 1390, timeOfFlight: 49.8, dispersion: "6m" },
                { range: 2000, elevation: 1378, timeOfFlight: 49.7, dispersion: "6m" },
                { range: 2100, elevation: 1366, timeOfFlight: 49.5, dispersion: "7m" },
                { range: 2200, elevation: 1353, timeOfFlight: 49.4, dispersion: "6m" },
                { range: 2300, elevation: 1340, timeOfFlight: 49.2, dispersion: "6m" },
                { range: 2400, elevation: 1328, timeOfFlight: 49.1, dispersion: "7m" },
                { range: 2500, elevation: 1314, timeOfFlight: 48.9, dispersion: "6m" },
                { range: 2600, elevation: 1301, timeOfFlight: 48.7, dispersion: "7m" },
                { range: 2700, elevation: 1288, timeOfFlight: 48.5, dispersion: "7m" },
                { range: 2800, elevation: 1274, timeOfFlight: 48.3, dispersion: "7m" },
                { range: 2900, elevation: 1260, timeOfFlight: 48.1, dispersion: "7m" },
                { range: 3000, elevation: 1245, timeOfFlight: 47.9, dispersion: "7m" },
                { range: 3100, elevation: 1230, timeOfFlight: 47.7, dispersion: "7m" },
                { range: 3200, elevation: 1215, timeOfFlight: 47.4, dispersion: "7m" },
                { range: 3300, elevation: 1200, timeOfFlight: 47.1, dispersion: "8m" },
                { range: 3400, elevation: 1184, timeOfFlight: 46.8, dispersion: "8m" },
                { range: 3500, elevation: 1167, timeOfFlight: 46.5, dispersion: "8m" },
                { range: 3600, elevation: 1151, timeOfFlight: 46.2, dispersion: "9m" },
                { range: 3700, elevation: 1133, timeOfFlight: 45.8, dispersion: "9m" },
                { range: 3800, elevation: 1115, timeOfFlight: 45.5, dispersion: "10m" },
                { range: 3900, elevation: 1096, timeOfFlight: 45.1, dispersion: "10m" },
                { range: 4000, elevation: 1076, timeOfFlight: 44.6, dispersion: "10m" },
                { range: 4100, elevation: 1055, timeOfFlight: 44.1, dispersion: "10m" },
                { range: 4200, elevation: 1033, timeOfFlight: 43.6, dispersion: "11m" },
                { range: 4300, elevation: 1010, timeOfFlight: 43.1, dispersion: "12m" },
                { range: 4400, elevation: 985, timeOfFlight: 42.4, dispersion: "13m" },
                { range: 4500, elevation: 958, timeOfFlight: 41.7, dispersion: "14m" },
                { range: 4600, elevation: 929, timeOfFlight: 40.9, dispersion: "16m" },
                { range: 4700, elevation: 895, timeOfFlight: 40.0, dispersion: "20m" },
                { range: 4800, elevation: 856, timeOfFlight: 38.8, dispersion: "25m" },
                { range: 4900, elevation: 805, timeOfFlight: 37.3, dispersion: "0m" }
            ]
        },
        M853A1: {
            1: [
                { range: 300, elevation: 1493, timeOfFlight: 26.1, dispersion: "18m" },
                { range: 350, elevation: 1475, timeOfFlight: 26.0, dispersion: "18m" },
                { range: 400, elevation: 1457, timeOfFlight: 26.0, dispersion: "19m" },
                { range: 450, elevation: 1438, timeOfFlight: 25.9, dispersion: "19m" },
                { range: 500, elevation: 1419, timeOfFlight: 25.8, dispersion: "19m" },
                { range: 550, elevation: 1400, timeOfFlight: 25.7, dispersion: "21m" },
                { range: 600, elevation: 1379, timeOfFlight: 25.6, dispersion: "20m" },
                { range: 650, elevation: 1359, timeOfFlight: 25.5, dispersion: "21m" },
                { range: 700, elevation: 1338, timeOfFlight: 25.4, dispersion: "21m" },
                { range: 750, elevation: 1317, timeOfFlight: 25.2, dispersion: "22m" },
                { range: 800, elevation: 1295, timeOfFlight: 25.1, dispersion: "23m" },
                { range: 850, elevation: 1272, timeOfFlight: 24.9, dispersion: "23m" },
                { range: 900, elevation: 1249, timeOfFlight: 24.7, dispersion: "25m" },
                { range: 950, elevation: 1224, timeOfFlight: 24.5, dispersion: "25m" },
                { range: 1000, elevation: 1199, timeOfFlight: 24.3, dispersion: "27m" },
                { range: 1050, elevation: 1172, timeOfFlight: 24.0, dispersion: "28m" },
                { range: 1100, elevation: 1144, timeOfFlight: 23.7, dispersion: "30m" },
                { range: 1150, elevation: 1114, timeOfFlight: 23.4, dispersion: "33m" },
                { range: 1200, elevation: 1081, timeOfFlight: 23.0, dispersion: "35m" },
                { range: 1250, elevation: 1046, timeOfFlight: 22.6, dispersion: "41m" },
                { range: 1300, elevation: 1005, timeOfFlight: 22.0, dispersion: "47m" },
                { range: 1350, elevation: 958, timeOfFlight: 21.4, dispersion: "58m" },
                { range: 1400, elevation: 900, timeOfFlight: 20.5, dispersion: "98m" },
                { range: 1450, elevation: 802, timeOfFlight: 18.9, dispersion: "0m" }
            ]
        },
        "0-832Ay": {
            // 0 Ring - MOD (Dispersion: 13m ตามภาพใหม่)
            0: [
                { range: 50, elevation: 1455, timeOfFlight: 15.0, dispersion: "44m" },
                { range: 100, elevation: 1411, timeOfFlight: 15.0, dispersion: "46m" },
                { range: 150, elevation: 1365, timeOfFlight: 14.9, dispersion: "47m" },
                { range: 200, elevation: 1318, timeOfFlight: 14.8, dispersion: "50m" },
                { range: 250, elevation: 1268, timeOfFlight: 14.6, dispersion: "51m" },
                { range: 300, elevation: 1217, timeOfFlight: 14.4, dispersion: "58m" },
                { range: 350, elevation: 1159, timeOfFlight: 14.1, dispersion: "64m" },
                { range: 400, elevation: 1095, timeOfFlight: 13.7, dispersion: "72m" },
                { range: 450, elevation: 1023, timeOfFlight: 13.2, dispersion: "101m" },
                { range: 500, elevation: 922, timeOfFlight: 12.4, dispersion: "0m" }
            ],
            // 1 Ring - MOD (Dispersion: 13m ตามภาพที่ 2)
            1: [
                { range: 200, elevation: 1435, timeOfFlight: 25.5, dispersion: "16m" },
                { range: 300, elevation: 1403, timeOfFlight: 25.4, dispersion: "17m" },
                { range: 400, elevation: 1369, timeOfFlight: 25.3, dispersion: "17m" },
                { range: 500, elevation: 1335, timeOfFlight: 25.2, dispersion: "18m" },
                { range: 600, elevation: 1299, timeOfFlight: 25, dispersion: "18m" },
                { range: 700, elevation: 1263, timeOfFlight: 24.8, dispersion: "19m" },
                { range: 800, elevation: 1224, timeOfFlight: 24.5, dispersion: "20m" },
                { range: 900, elevation: 1183, timeOfFlight: 24.2, dispersion: "21m" },
                { range: 1000, elevation: 1139, timeOfFlight: 23.8, dispersion: "23m" },
                { range: 1100, elevation: 1091, timeOfFlight: 23.3, dispersion: "26m" },
                { range: 1200, elevation: 1037, timeOfFlight: 22.7, dispersion: "31m" },
                { range: 1300, elevation: 973, timeOfFlight: 21.9, dispersion: "38m" },
                { range: 1400, elevation: 883, timeOfFlight: 20.5, dispersion: "68m" }
            ],
            // 2 Ring - MOD (Dispersion: 33m ตามภาพที่ 2)
            2: [
                { range: 300, elevation: 1459, timeOfFlight: 32.9, dispersion: "11m" },
                { range: 400, elevation: 1418, timeOfFlight: 32.8, dispersion: "11m" },
                { range: 500, elevation: 1397, timeOfFlight: 32.7, dispersion: "11m" },
                { range: 600, elevation: 1375, timeOfFlight: 32.6, dispersion: "10m" },
                { range: 700, elevation: 1354, timeOfFlight: 32.5, dispersion: "11m" },
                { range: 800, elevation: 1332, timeOfFlight: 32.4, dispersion: "11m" },
                { range: 900, elevation: 1309, timeOfFlight: 32.3, dispersion: "11m" },
                { range: 1000, elevation: 1286, timeOfFlight: 32.1, dispersion: "12m" },
                { range: 1100, elevation: 1263, timeOfFlight: 31.9, dispersion: "13m" },
                { range: 1200, elevation: 1238, timeOfFlight: 31.7, dispersion: "13m" },
                { range: 1300, elevation: 1213, timeOfFlight: 31.5, dispersion: "14m" },
                { range: 1400, elevation: 1186, timeOfFlight: 31.2, dispersion: "13m" },
                { range: 1500, elevation: 1158, timeOfFlight: 30.9, dispersion: "14m" },
                { range: 1600, elevation: 1130, timeOfFlight: 30.5, dispersion: "16m" },
                { range: 1700, elevation: 1098, timeOfFlight: 30.1, dispersion: "16m" },
                { range: 1800, elevation: 1065, timeOfFlight: 29.7, dispersion: "17m" },
                { range: 1900, elevation: 1030, timeOfFlight: 29.1, dispersion: "20m" },
                { range: 2000, elevation: 989, timeOfFlight: 28.5, dispersion: "22m" },
                { range: 2100, elevation: 943, timeOfFlight: 27.7, dispersion: "27m" },
                { range: 2200, elevation: 887, timeOfFlight: 26.6, dispersion: "36m" },
                { range: 2300, elevation: 805, timeOfFlight: 24.9, dispersion: "0m" }
            ],
            // 3 Ring - MOD (Dispersion: 44m ตามภาพที่ 2)
            3: [
                { range: 400, elevation: 1438, timeOfFlight: 38.7, dispersion: "8m" },
                { range: 500, elevation: 1422, timeOfFlight: 38.7, dispersion: "7m" },
                { range: 600, elevation: 1407, timeOfFlight: 38.6, dispersion: "8m" },
                { range: 700, elevation: 1391, timeOfFlight: 38.5, dispersion: "8m" },
                { range: 800, elevation: 1374, timeOfFlight: 38.5, dispersion: "8m" },
                { range: 900, elevation: 1358, timeOfFlight: 38.4, dispersion: "8m" },
                { range: 1000, elevation: 1342, timeOfFlight: 38.3, dispersion: "9m" },
                { range: 1100, elevation: 1325, timeOfFlight: 38.1, dispersion: "9m" },
                { range: 1200, elevation: 1307, timeOfFlight: 38, dispersion: "8m" },
                { range: 1300, elevation: 1290, timeOfFlight: 37.9, dispersion: "8m" },
                { range: 1400, elevation: 1272, timeOfFlight: 37.7, dispersion: "9m" },
                { range: 1500, elevation: 1254, timeOfFlight: 37.5, dispersion: "10m" },
                { range: 1600, elevation: 1235, timeOfFlight: 37.3, dispersion: "10m" },
                { range: 1700, elevation: 1216, timeOfFlight: 37.1, dispersion: "10m" },
                { range: 1800, elevation: 1196, timeOfFlight: 36.9, dispersion: "11m" },
                { range: 1900, elevation: 1175, timeOfFlight: 36.6, dispersion: "11m" },
                { range: 2000, elevation: 1153, timeOfFlight: 36.3, dispersion: "11m" },
                { range: 2100, elevation: 1131, timeOfFlight: 36, dispersion: "11m" },
                { range: 2200, elevation: 1108, timeOfFlight: 35.7, dispersion: "12m" },
                { range: 2300, elevation: 1084, timeOfFlight: 35.3, dispersion: "13m" },
                { range: 2400, elevation: 1058, timeOfFlight: 34.8, dispersion: "14m" },
                { range: 2500, elevation: 1031, timeOfFlight: 34.4, dispersion: "15m" },
                { range: 2600, elevation: 1001, timeOfFlight: 33.8, dispersion: "15m" },
                { range: 2700, elevation: 968, timeOfFlight: 33.2, dispersion: "17m" },
                { range: 2800, elevation: 933, timeOfFlight: 32.4, dispersion: "21m" },
                { range: 2900, elevation: 891, timeOfFlight: 31.5, dispersion: "26m" },
                { range: 3000, elevation: 839, timeOfFlight: 30.3, dispersion: "33m" },
                { range: 3100, elevation: 758, timeOfFlight: 28.3, dispersion: "0m" }
            ],
            // 4 Ring - MOD (Dispersion: 55m ตามภาพที่ 2)
            4: [
                { range: 600, elevation: 1426, timeOfFlight: 44.4, dispersion: "6m" },
                { range: 700, elevation: 1413, timeOfFlight: 44.4, dispersion: "6m" },
                { range: 800, elevation: 1401, timeOfFlight: 44.3, dispersion: "7m" },
                { range: 900, elevation: 1388, timeOfFlight: 44.2, dispersion: "7m" },
                { range: 1000, elevation: 1375, timeOfFlight: 44.2, dispersion: "7m" },
                { range: 1100, elevation: 1362, timeOfFlight: 44.1, dispersion: "7m" },
                { range: 1200, elevation: 1348, timeOfFlight: 44, dispersion: "6m" },
                { range: 1300, elevation: 1335, timeOfFlight: 43.9, dispersion: "7m" },
                { range: 1400, elevation: 1321, timeOfFlight: 43.8, dispersion: "6m" },
                { range: 1500, elevation: 1308, timeOfFlight: 43.7, dispersion: "7m" },
                { range: 1600, elevation: 1294, timeOfFlight: 43.5, dispersion: "7m" },
                { range: 1700, elevation: 1279, timeOfFlight: 43.4, dispersion: "7m" },
                { range: 1800, elevation: 1265, timeOfFlight: 43.2, dispersion: "8m" },
                { range: 1900, elevation: 1250, timeOfFlight: 43.1, dispersion: "7m" },
                { range: 2000, elevation: 1235, timeOfFlight: 42.9, dispersion: "8m" },
                { range: 2100, elevation: 1220, timeOfFlight: 42.7, dispersion: "8m" },
                { range: 2200, elevation: 1204, timeOfFlight: 42.5, dispersion: "8m" },
                { range: 2300, elevation: 1188, timeOfFlight: 42.3, dispersion: "9m" },
                { range: 2400, elevation: 1171, timeOfFlight: 42, dispersion: "9m" },
                { range: 2500, elevation: 1154, timeOfFlight: 41.8, dispersion: "9m" },
                { range: 2600, elevation: 1136, timeOfFlight: 41.5, dispersion: "9m" },
                { range: 2700, elevation: 1118, timeOfFlight: 41.2, dispersion: "9m" },
                { range: 2800, elevation: 1099, timeOfFlight: 40.8, dispersion: "10m" },
                { range: 2900, elevation: 1077, timeOfFlight: 40.5, dispersion: "10m" },
                { range: 3000, elevation: 1059, timeOfFlight: 50.1, dispersion: "11m" },
                { range: 3100, elevation: 1037, timeOfFlight: 39.7, dispersion: "11m" },
                { range: 3200, elevation: 1014, timeOfFlight: 39.2, dispersion: "12m" },
                { range: 3300, elevation: 990, timeOfFlight: 38.7, dispersion: "13m" },
                { range: 3400, elevation: 963, timeOfFlight: 38, dispersion: "13m" },
                { range: 3500, elevation: 936, timeOfFlight: 37.4, dispersion: "16m" },
                { range: 3600, elevation: 904, timeOfFlight: 36.6, dispersion: "17m" },
                { range: 3700, elevation: 868, timeOfFlight: 35.7, dispersion: "20m" },
                { range: 3800, elevation: 824, timeOfFlight: 34.5, dispersion: "24m" },
                { range: 3900, elevation: 766, timeOfFlight: 32.9, dispersion: "0m" }
            ]
        }
    }
};

// คลาสหลักสำหรับการคำนวณมอร์ต้าร์ในเกม ARMA REFORGER
// ใช้ข้อมูลจาก BALLISTIC_DATA เป็นหลักในการคำนวณวิถีกระสุน
// รวมถึงการชดเชยมุมยกปืนจากความแตกต่างของระดับความสูง
class MortarCalculator {
    constructor() {
        this.currentMortarType = 'original';  // ประเภทมอร์ต้าร์ (original หรือ mod)
        this.currentShell = 'M821';           // ประเภทกระสุน
        this.currentCharge = 0;               // ระดับประจุ (Charge)
        this.targetPresets = {};              // เก็บข้อมูลเป้าหมายที่บันทึกไว้
        this.initializeElements();
        this.bindEvents();
        this.loadInitialData();
        this.loadTargetPresets();
    }

    initializeElements() {
        // Grid coordinate input elements
        this.weaponX = document.getElementById('weapon-x');
        this.weaponY = document.getElementById('weapon-y');
        this.weaponAlt = document.getElementById('weapon-alt');
        this.targetX = document.getElementById('target-x');
        this.targetY = document.getElementById('target-y');
        this.targetAlt = document.getElementById('target-alt');
        
        // Grid display elements
        this.weaponGridRef = document.getElementById('weapon-grid-ref');
        this.targetGridRef = document.getElementById('target-grid-ref');
        
        // Control elements
        this.calculateBtn = document.getElementById('calculate-btn');
        this.resultsSection = document.getElementById('results-section');
        this.mortarTypeInputs = document.querySelectorAll('input[name="mortar-type"]');
        this.shellButtons = document.querySelectorAll('.shell-btn');
        
        // Results elements
        this.distanceEl = document.getElementById('distance');
        this.azimuthEl = document.getElementById('azimuth');
        this.elevationEl = document.getElementById('elevation');
        this.chargeEl = document.getElementById('charge');
        this.timeFlightEl = document.getElementById('time-flight');
        this.heightDiffEl = document.getElementById('height-diff');
        
        // Table elements
        this.chargeTabsEl = document.getElementById('charge-tabs');
        this.ballisticTbody = document.getElementById('ballistic-tbody');
        
        // Preset elements
        this.presetButtons = document.querySelectorAll('.preset-btn');
    }

    bindEvents() {
        // Calculate button
        this.calculateBtn.addEventListener('click', () => this.calculate());
        
        // Real-time calculation and grid display update
        [this.weaponX, this.weaponY, this.weaponAlt, 
         this.targetX, this.targetY, this.targetAlt].forEach(input => {
            input.addEventListener('input', () => {
                this.updateGridReferences();
                // Check and update active preset status for target inputs only
                if (input === this.targetX || input === this.targetY || input === this.targetAlt) {
                    this.updateActivePresetStatus();
                }
                if (this.validateInputs()) {
                    this.calculate();
                }
            });
        });

        // Mortar type selection
        this.mortarTypeInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.currentMortarType = e.target.value;
                this.createChargeTabs(); // Recreate charge tabs (this will reset currentCharge)
                this.loadBallisticData();
                if (this.validateInputs()) {
                    this.calculate();
                }
            });
        });

        // Shell selection
        this.shellButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.shellButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentShell = e.target.dataset.shell;
                this.updateShellInfo(); // Update shell info with language support
                this.createChargeTabs(); // Recreate charge tabs (this will reset currentCharge)
                this.loadBallisticData();
                if (this.validateInputs()) {
                    this.calculate();
                }
            });
        });

        // Target preset buttons
        this.presetButtons.forEach(btn => {
            if (btn.dataset.preset === 'clear') {
                // Clear button
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.clearTargetData();
                });
            } else {
                // Regular preset buttons
                const presetNumber = parseInt(btn.dataset.preset);
                
                // Touch/Mobile support variables
                let touchStartTime = 0;
                let touchTimer = null;
                let isLongPress = false;
                
                // Touch start (mobile)
                btn.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    touchStartTime = Date.now();
                    isLongPress = false;
                    
                    // Add visual feedback for touch
                    btn.style.transform = 'scale(0.95)';
                    
                    // Set timer for long press (500ms)
                    touchTimer = setTimeout(() => {
                        isLongPress = true;
                        // Vibrate if supported (mobile feedback)
                        if (navigator.vibrate) {
                            navigator.vibrate(50);
                        }
                        // Visual feedback for long press
                        btn.style.background = 'rgba(34, 197, 94, 0.4)';
                        btn.style.borderColor = '#22c55e';
                        
                        // Save preset
                        this.saveTargetPreset(presetNumber);
                    }, 500);
                });
                
                // Touch end (mobile)
                btn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    
                    // Reset visual feedback
                    btn.style.transform = '';
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    
                    // Clear timer
                    if (touchTimer) {
                        clearTimeout(touchTimer);
                    }
                    
                    // If it was a short tap (not long press), load preset
                    if (!isLongPress && (Date.now() - touchStartTime < 500)) {
                        this.loadTargetPreset(presetNumber);
                    }
                });
                
                // Touch cancel (mobile)
                btn.addEventListener('touchcancel', (e) => {
                    // Reset everything if touch is cancelled
                    btn.style.transform = '';
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    if (touchTimer) {
                        clearTimeout(touchTimer);
                    }
                });
                
                // Desktop support (existing functionality)
                // Left click: Load preset
                btn.addEventListener('click', (e) => {
                    // Only handle if not on touch device or if touch events didn't handle it
                    if (!('ontouchstart' in window)) {
                        e.preventDefault();
                        this.loadTargetPreset(presetNumber);
                    }
                });

                // Right click: Save preset (desktop only)
                btn.addEventListener('contextmenu', (e) => {
                    if (!('ontouchstart' in window)) {
                        e.preventDefault();
                        this.saveTargetPreset(presetNumber);
                    }
                });
            }
        });
    }

    loadInitialData() {
        this.updateShellInfo(); // Initialize shell info
        this.createChargeTabs();
        this.loadBallisticData();
        this.updateGridReferences();
        this.setupDeviceSpecificUI();
    }

    setupDeviceSpecificUI() {
        // Detect if device supports touch
        const isTouchDevice = ('ontouchstart' in window) || 
                             (navigator.maxTouchPoints > 0) || 
                             (navigator.msMaxTouchPoints > 0);
        
        if (isTouchDevice) {
            // Show mobile instructions
            document.querySelectorAll('.desktop-instructions').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.mobile-instructions').forEach(el => el.style.display = 'inline');
            
            // Add mobile-friendly class to body
            document.body.classList.add('touch-device');
        } else {
            // Show desktop instructions
            document.querySelectorAll('.desktop-instructions').forEach(el => el.style.display = 'inline');
            document.querySelectorAll('.mobile-instructions').forEach(el => el.style.display = 'none');
        }
    }

    updateShellInfo() {
        const shellTypeEl = document.querySelector('.shell-type');
        if (shellTypeEl) {
            const texts = LANGUAGE_DATA[currentLanguage];
            let shellText = '';
            
            switch(this.currentShell) {
                case 'M821':
                    shellText = texts.heShell;
                    break;
                case 'M819':
                    shellText = texts.smokeShell;
                    break;
                case 'M853A1':
                    shellText = texts.illuminationShell;
                    break;
                case '0-832Ay':
                    shellText = texts["0832AyShell"];
                    break;
                default:
                    shellText = texts.heShell;
            }
            
            shellTypeEl.textContent = shellText;
        }
    }

    createChargeTabs() {
        const charges = this.getAvailableCharges();
        this.chargeTabsEl.innerHTML = '';
        
        // Reset current charge to first available charge
        if (charges.length > 0) {
            this.currentCharge = charges[0];
        }
        
        charges.forEach((charge, index) => {
            const tab = document.createElement('button');
            tab.className = `charge-tab ${charge === this.currentCharge ? 'active' : ''}`;
            tab.textContent = `Charge ${charge}`;
            tab.dataset.charge = charge;
            
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.charge-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCharge = parseInt(e.target.dataset.charge);
                this.loadBallisticData();
                if (this.validateInputs()) {
                    this.calculate();
                }
            });
            
            this.chargeTabsEl.appendChild(tab);
        });
    }

    getAvailableCharges() {
        const data = BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell];
        if (!data) return [0];
        return Object.keys(data).map(Number).sort((a, b) => a - b);
    }

    loadBallisticData() {
        const data = this.getCurrentBallisticData();
        this.ballisticTbody.innerHTML = '';
        
        if (!data || data.length === 0) {
            this.ballisticTbody.innerHTML = '<tr><td colspan="4">No data available</td></tr>';
            return;
        }
        
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.range}</td>
                <td>${item.elevation}</td>
                <td>${item.timeOfFlight}</td>
                <td>${item.dispersion}</td>
            `;
            row.dataset.range = item.range;
            this.ballisticTbody.appendChild(row);
        });
    }

    getCurrentBallisticData() {
        return BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell]?.[this.currentCharge] || [];
    }

    // Select optimal charge/ring based on distance to minimize compensation
    selectOptimalCharge(targetDistance) {
        const shellData = BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell];
        if (!shellData) return this.currentCharge;

        let bestCharge = this.currentCharge;
        let bestScore = Infinity;

        // Check each available charge/ring
        Object.keys(shellData).forEach(charge => {
            const chargeData = shellData[charge];
            if (!chargeData || chargeData.length === 0) return;

            // Filter out invalid data (dispersion = "0m")
            const validData = chargeData.filter(item => item.dispersion !== "0m");
            if (validData.length === 0) return;

            // Find if target distance falls within this charge's effective range
            const minRange = Math.min(...validData.map(item => item.range));
            const maxRange = Math.max(...validData.map(item => item.range));

            let score;
            if (targetDistance >= minRange && targetDistance <= maxRange) {
                // Distance is within range - perfect score is 0
                score = 0;
            } else {
                // Distance is outside range - calculate how far outside
                if (targetDistance < minRange) {
                    score = minRange - targetDistance;
                } else {
                    score = targetDistance - maxRange;
                }
            }

            // Prefer charges with target distance within range, then closest ranges
            if (score < bestScore) {
                bestScore = score;
                bestCharge = parseInt(charge);
            }
        });

        return bestCharge;
    }

    // Update charge tabs display to reflect current selection
    updateChargeTabsDisplay() {
        const tabs = this.chargeTabsEl.querySelectorAll('.charge-tab');
        tabs.forEach(tab => {
            const tabCharge = parseInt(tab.dataset.charge);
            if (tabCharge === this.currentCharge) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    validateInputs() {
        const inputs = [this.weaponX, this.weaponY, this.weaponAlt, 
                       this.targetX, this.targetY, this.targetAlt];
        
        let isValid = true;
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
            if (!input.value || isNaN(input.value)) {
                input.classList.add('error');
                isValid = false;
            } else {
                // Validate grid coordinates are within 20km x 20km map
                if ((input === this.weaponX || input === this.targetX || 
                     input === this.weaponY || input === this.targetY) && 
                    (parseInt(input.value) < 0 || parseInt(input.value) > 20000)) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.add('success');
                }
            }
        });
        
        return isValid;
    }

    // Update grid reference displays
    updateGridReferences() {
        if (this.weaponX.value && this.weaponY.value) {
            const weaponGrid = this.formatGridReference(parseInt(this.weaponX.value), parseInt(this.weaponY.value));
            this.weaponGridRef.textContent = weaponGrid;
        } else {
            this.weaponGridRef.textContent = '-';
        }

        if (this.targetX.value && this.targetY.value) {
            const targetGrid = this.formatGridReference(parseInt(this.targetX.value), parseInt(this.targetY.value));
            this.targetGridRef.textContent = targetGrid;
        } else {
            this.targetGridRef.textContent = '-';
        }
    }

    // Format grid coordinates to ARMA style (e.g., 105 053)
    formatGridReference(x, y) {
        const gridX = Math.floor(x / 100).toString().padStart(3, '0');
        const gridY = Math.floor(y / 100).toString().padStart(3, '0');
        return `${gridX} ${gridY}`;
    }

    // Calculate distance between two grid coordinates (direct cartesian distance)
    calculateDistance(x1, y1, x2, y2) {
        // Grid coordinates are in meters, so direct calculation
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Calculate azimuth (bearing) from weapon to target using grid coordinates
    calculateAzimuth(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        
        // Calculate angle in radians, then convert to degrees
        let angle = Math.atan2(dx, dy) * 180 / Math.PI;
        
        // Convert to 0-360 degree bearing (North = 0°, East = 90°)
        if (angle < 0) {
            angle += 360;
        }
        
        return angle;

        let bearing = Math.atan2(y, x) * 180 / Math.PI;
        return (bearing + 360) % 360;
    }

    // Convert degrees to mils (1 degree = 17.777... mils)
    degreesToMils(degrees) {
        return degrees * 17.777777777778;
    }

    // ค้นหาข้อมูลการยิงจากตาราง BALLISTIC_DATA ตามระยะทาง
    // ระบบนี้ใช้ข้อมูลจริงจากเกม ARMA เป็นหลัก แทนการคำนวณทางฟิสิกส์
    findBallisticData(distance) {
        const data = this.getCurrentBallisticData();
        if (!data || data.length === 0) return null;

        // กรองข้อมูลที่มี dispersion = "0m" ออก เพราะไม่ควรใช้ในการคำนวณ
        const validData = data.filter(item => item.dispersion !== "0m");
        
        // หากไม่มีข้อมูลที่ใช้ได้ ให้ใช้ข้อมูลเดิมทั้งหมด
        const dataToUse = validData.length > 0 ? validData : data;

        // ค้นหาข้อมูลที่ใกล้เคียงที่สุดจากตาราง
        let closest = dataToUse[0];
        let minDiff = Math.abs(distance - closest.range);

        for (let item of dataToUse) {
            const diff = Math.abs(distance - item.range);
            if (diff < minDiff) {
                minDiff = diff;
                closest = item;
            }
        }

        // การประมาณค่าแบบ Linear interpolation ระหว่างจุดที่ใกล้เคียง (เหมือน arma-mortar.com)
        const sortedData = dataToUse.sort((a, b) => a.range - b.range);
        
        // หาจุดข้อมูลที่อยู่ก่อนและหลังระยะเป้าหมาย
        let lower = null;
        let upper = null;
        
        for (let i = 0; i < sortedData.length - 1; i++) {
            if (distance >= sortedData[i].range && distance <= sortedData[i + 1].range) {
                lower = sortedData[i];
                upper = sortedData[i + 1];
                break;
            }
        }

        // หากมีจุดข้อมูลครอบคลุม ให้ทำการประมาณค่าระหว่างจุด
        if (lower && upper && lower.range !== upper.range) {
            const ratio = (distance - lower.range) / (upper.range - lower.range);
            
            return {
                range: distance,
                elevation: Math.round(lower.elevation + (upper.elevation - lower.elevation) * ratio),
                timeOfFlight: +(lower.timeOfFlight + (upper.timeOfFlight - lower.timeOfFlight) * ratio).toFixed(1),
                dispersion: lower.dispersion, // ใช้ค่า dispersion ของจุดล่าง
                charge: this.currentCharge
            };
        }

        // หากไม่สามารถประมาณค่าได้ ให้ใช้จุดที่ใกล้ที่สุด
        return {
            ...closest,
            charge: this.currentCharge
        };
    }

    // คำนวณค่าชดเชยมุมยกปืนสำหรับความแตกต่างของระดับความสูง
    // ใช้ค่า dispersion จาก BALLISTIC_DATA เป็นฐานในการคำนวณ
    calculateElevationCorrection(heightDiff, ballisticData) {
        // ตรวจสอบว่ามีข้อมูล ballistic data หรือไม่
        if (!ballisticData || !ballisticData.dispersion) {
            return 0;
        }
        
        // แปลงค่า dispersion จากรูปแบบ "xxm" เป็นตัวเลข
        const dispersionValue = parseFloat(ballisticData.dispersion.replace('m', ''));
        
        // ตรวจสอบว่าค่า dispersion เป็น 0 หรือไม่ถูกต้องหรือไม่
        if (isNaN(dispersionValue) || dispersionValue <= 0) {
            return 0;
        }
        
        // สูตรการคำนวณ: (dispersion ÷ 100) × ความต่างระดับความสูง
        // ค่าที่ได้จะเป็น mils สำหรับการปรับมุมยกปืน
        const correction = (dispersionValue / 100) * heightDiff;
        
        return Math.round(correction);
    }

    // Advanced ballistic trajectory calculation using physics
    calculateBallisticTrajectory(distance, heightDiff, muzzleVelocity = 70) {
        const g = 9.81; // gravity (m/s²)
        const R = distance; // horizontal range (m)
        const h = heightDiff; // height difference (m)
        
        // Calculate required launch angle using ballistic trajectory formula
        // R = (v²/g) * sin(2θ) * (1 + √(1 + 2gh/(v²sin²θ)))
        // Simplified approximation for launch angle
        let launchAngle;
        
        try {
            // First approximation using standard projectile motion
            const discriminant = Math.pow(muzzleVelocity, 4) - g * (g * R * R + 2 * h * muzzleVelocity * muzzleVelocity);
            
            if (discriminant < 0) {
                // Target too far, use maximum range angle (45°) as fallback
                launchAngle = Math.PI / 4;
            } else {
                // Calculate high angle solution (mortar trajectory)
                const numerator = muzzleVelocity * muzzleVelocity + Math.sqrt(discriminant);
                const denominator = g * R;
                launchAngle = Math.atan(numerator / denominator);
            }
            
            // Ensure angle is within realistic mortar range (45° to 85°)
            const minAngle = 45 * Math.PI / 180; // 45 degrees
            const maxAngle = 85 * Math.PI / 180; // 85 degrees
            launchAngle = Math.max(minAngle, Math.min(maxAngle, launchAngle));
            
        } catch (error) {
            // Fallback to standard high angle
            launchAngle = 60 * Math.PI / 180; // 60 degrees default
        }
        
        // Convert radians to degrees, then to mils
        const angleDegrees = launchAngle * 180 / Math.PI;
        const angleMils = angleDegrees * 17.777777777778;
        
        // Calculate time of flight using trajectory physics
        const vY = muzzleVelocity * Math.sin(launchAngle);
        const vX = muzzleVelocity * Math.cos(launchAngle);
        
        // Time to reach target (accounting for height difference)
        const timeOfFlight = (vY + Math.sqrt(vY * vY + 2 * g * h)) / g;
        
        return {
            elevationMils: Math.round(angleMils),
            elevationDegrees: angleDegrees,
            timeOfFlight: timeOfFlight,
            muzzleVelocity: muzzleVelocity,
            trajectory: this.generateTrajectoryPoints(distance, heightDiff, launchAngle, muzzleVelocity)
        };
    }

    // Generate trajectory points for visualization
    generateTrajectoryPoints(range, heightDiff, launchAngle, muzzleVelocity, numPoints = 50) {
        const g = 9.81;
        const vX = muzzleVelocity * Math.cos(launchAngle);
        const vY = muzzleVelocity * Math.sin(launchAngle);
        const totalTime = (vY + Math.sqrt(vY * vY + 2 * g * heightDiff)) / g;
        
        const points = [];
        for (let i = 0; i <= numPoints; i++) {
            const t = (i / numPoints) * totalTime;
            const x = vX * t;
            const y = vY * t - 0.5 * g * t * t;
            points.push({ x: x, y: y, time: t });
        }
        
        return points;
    }

    // Enhanced ballistic data finder with physics integration
    findEnhancedBallisticData(distance, heightDiff) {
        const tableData = this.findBallisticData(distance);
        
        if (!tableData) {
            return null;
        }
        
        // Get muzzle velocity from charge level (estimated)
        const chargeVelocities = {
            0: 70,   // Charge 0: ~70 m/s
            1: 110,  // Charge 1: ~110 m/s
            2: 150,  // Charge 2: ~150 m/s
            3: 190,  // Charge 3: ~190 m/s
            4: 225   // Charge 4: ~225 m/s
        };
        
        const muzzleVelocity = chargeVelocities[this.currentCharge] || 150;
        
        // Calculate physics-based trajectory for reference only
        const physicsResult = this.calculateBallisticTrajectory(distance, heightDiff, muzzleVelocity);
        
        // Use table data as primary, physics as supplementary info only
        return {
            ...tableData,
            physicsElevation: physicsResult.elevationMils,
            physicsTimeOfFlight: physicsResult.timeOfFlight,
            trajectory: physicsResult.trajectory,
            muzzleVelocity: muzzleVelocity,
            // Keep original table data for accuracy - only add small height correction
            elevation: tableData.elevation, // Use table elevation as-is
            timeOfFlight: tableData.timeOfFlight // Use table time of flight as-is
        };
    }

    calculate() {
        if (!this.validateInputs()) {
            this.showError('Please fill in all fields with valid numbers (Grid: 0-20000)');
            return;
        }

        const weapon = {
            x: parseInt(this.weaponX.value),
            y: parseInt(this.weaponY.value),
            alt: parseInt(this.weaponAlt.value)
        };

        const target = {
            x: parseInt(this.targetX.value),
            y: parseInt(this.targetY.value),
            alt: parseInt(this.targetAlt.value)
        };

        // คำนวณระยะทางและทิศทางโดยใช้พิกัดตาราง (Grid Coordinates)
        const distance = this.calculateDistance(weapon.x, weapon.y, target.x, target.y);
        const azimuthDegrees = this.calculateAzimuth(weapon.x, weapon.y, target.x, target.y);
        const azimuthMils = this.degreesToMils(azimuthDegrees);

        // คำนวณความแตกต่างของระดับความสูงระหว่างปืนกับเป้าหมาย
        const heightDiff = target.alt - weapon.alt;
        
        // สูตรการปรับปรุงระยะทางและความสูงเมื่อความต่างความสูงเกิน 100 เมตร
        let adjustedDistance = distance;
        let adjustedHeightDiff = heightDiff;
        let calculationNote = '';

        const absoluteHeightDiff = Math.abs(heightDiff);
        if (absoluteHeightDiff > 100) {
            // ส่วนที่เกิน 100 เมตร
            const excessHeight = absoluteHeightDiff - 100;
            // นำส่วนเกินไปบวกหรือลบกับระยะทาง (ไม่ปัด)
            const rangeAdjustment = excessHeight;
            let sign = heightDiff > 0 ? '+' : '-';
            if (heightDiff > 0) {
                adjustedDistance = distance + rangeAdjustment;
            } else {
                adjustedDistance = distance - rangeAdjustment;
            }
            // ความต่างความสูงที่ใช้คำนวณ = 100 หรือ -100 เท่านั้น
            adjustedHeightDiff = heightDiff > 0 ? 100 : -100;
            calculationNote = `สูตรปรับแล้ว: ระยะทาง ${distance}m ${sign} ${rangeAdjustment}m = ${adjustedDistance}m, ความสูง ${adjustedHeightDiff}m (ตัดไว้ 100m)`;
        }
        
        // เลือกประจุที่เหมาะสมตามระยะทางที่ปรับแล้ว
        const optimalCharge = this.selectOptimalCharge(adjustedDistance);
        if (optimalCharge !== this.currentCharge) {
            this.currentCharge = optimalCharge;
            this.updateChargeTabsDisplay();
        }
        
        // ค้นหาข้อมูลการยิงจากตาราง BALLISTIC_DATA ใช้ระยะทางที่ปรับแล้ว
        const ballisticData = this.findBallisticData(adjustedDistance);
        if (!ballisticData) {
            this.showError('ไม่มีข้อมูลการยิงสำหรับการตั้งค่านี้');
            return;
        }

        // คำนวณค่าชดเชยมุมยกปืนจากความต่างระดับความสูงที่ปรับแล้ว
        // ใช้สูตร: (dispersion ÷ 100) × ความต่างระดับความสูงที่ปรับแล้ว
        const elevationCorrection = this.calculateElevationCorrection(adjustedHeightDiff, ballisticData);
        
        // ใช้ข้อมูลจากตารางโดยตรงโดยไม่ปรับค่า (วิธีมาตรฐานของเครื่องคำนวณมอร์ต้าร์)
        // ข้อมูลในตารางถูกปรับเทียบสำหรับ ARMA แล้ว
        const adjustedBaseElevation = Math.round(ballisticData.elevation * 1.00); 
        const finalElevation = adjustedBaseElevation + elevationCorrection;

        // Display results (simplified like arma-mortar.com)
        this.displayResults({
            distance: Math.round(distance),
            adjustedDistance: Math.round(adjustedDistance),
            azimuthDegrees: azimuthDegrees.toFixed(1),
            azimuthMils: Math.round(azimuthMils),
            elevation: finalElevation,
            originalElevation: ballisticData.elevation,
            elevationCorrection: elevationCorrection,
            charge: this.currentCharge,
            timeOfFlight: ballisticData.timeOfFlight,
            heightDiff: heightDiff,
            adjustedHeightDiff: adjustedHeightDiff,
            dispersion: ballisticData.dispersion,
            muzzleVelocity: ballisticData.muzzleVelocity || 150,
            trajectory: ballisticData.trajectory || [],
            calculationNote: calculationNote,
            isAdjusted: adjustedDistance !== distance || adjustedHeightDiff !== heightDiff
        });

        // Highlight table row
        this.highlightTableRow(ballisticData.range);
    }

    displayResults(results) {
        this.distanceEl.textContent = `${results.distance} m`;
        this.azimuthEl.textContent = `${results.azimuthMils} mils (${results.azimuthDegrees}°)`;
        this.elevationEl.textContent = `${results.elevation} mils`;
        this.chargeEl.textContent = `${results.charge}`;
        this.timeFlightEl.textContent = `${results.timeOfFlight} sec`;
        this.heightDiffEl.textContent = `${results.heightDiff > 0 ? '+' : ''}${results.heightDiff.toFixed(1)} m`;

        // Add additional info
        this.updateAdditionalInfo(results);

        this.resultsSection.classList.add('show');
    }

    updateAdditionalInfo(results) {
        const additionalInfo = document.getElementById('additional-info');
        // คำนวณค่า dispersion ที่ใช้ในการคำนวณ elevation correction
        const dispersionValue = parseFloat(results.dispersion.replace('m', ''));
        const correctionFormula = `(${dispersionValue} ÷ 100) × ${results.adjustedHeightDiff || results.heightDiff} = ${results.elevationCorrection}`;
        
        // Check if calculation was adjusted
        const originalHeightCompensation = Math.abs(results.heightDiff);
        const showWarning = originalHeightCompensation > 100;
        const wasAdjusted = results.isAdjusted;
        
        // Get text from current language
        const texts = LANGUAGE_DATA[currentLanguage];
        
        additionalInfo.innerHTML = `
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'กระสุน:' : 'Shell:'}</strong> ${this.currentShell}
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ประเภทมอร์ต้าร์:' : 'Mortar Type:'}</strong> ${this.currentMortarType === 'mod' ? 'MOD Adult Mortars' : 'Original Game'}
            </div>
            ${wasAdjusted ? `
            <div class="info-item calculation-adjustment">
                <strong>🔧 ${currentLanguage === 'th' ? 'การปรับปรุงการคำนวณ:' : 'Calculation Adjustment:'}</strong>
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ระยะทางเดิม:' : 'Original Distance:'}</strong> ${results.distance} m
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ระยะทางที่ใช้คำนวณ:' : 'Calculation Distance:'}</strong> ${results.adjustedDistance} m
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ความสูงเดิม:' : 'Original Height Diff:'}</strong> ${results.heightDiff > 0 ? '+' : ''}${results.heightDiff} m
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ความสูงที่ใช้คำนวณ:' : 'Calculation Height Diff:'}</strong> ${results.adjustedHeightDiff > 0 ? '+' : ''}${results.adjustedHeightDiff} m
            </div>
            <div class="info-item calculation-note">
                <em>${results.calculationNote}</em>
            </div>
            ` : ''}
            <div class="info-item physics-info">
                <strong>📊 ${currentLanguage === 'th' ? 'ข้อมูลการคำนวณจาก BALLISTIC_DATA:' : 'Calculation Data from BALLISTIC_DATA:'}</strong>
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'มุมยกปืนจากตาราง:' : 'Table Elevation:'}</strong> ${results.originalElevation} mils
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ค่า Dispersion:' : 'Dispersion:'}</strong> ${results.dispersion}
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'สูตรการชดเชยมุมยก:' : 'Elevation Correction Formula:'}</strong> ${correctionFormula} mils
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'ค่าชดเชยมุมยก:' : 'Elevation Correction:'}</strong> ${results.elevationCorrection > 0 ? '+' : ''}${results.elevationCorrection} mils
            </div>
            <div class="info-item">
                <strong>${currentLanguage === 'th' ? 'มุมยกปืนสุดท้าย:' : 'Final Elevation:'}</strong> ${results.elevation} mils
            </div>
            ${showWarning ? `
            <div class="accuracy-warning">
                <div class="warning-header">
                    <span class="warning-icon">⚠️</span>
                    <strong>${currentLanguage === 'th' ? 'การปรับปรุงความแม่นยำ' : 'Accuracy Improvement'}</strong>
                </div>
                <div class="warning-text">
                    ${currentLanguage === 'th' ? 
                        'ใช้สูตรพิเศษเมื่อความต่างความสูง > 100m เพื่อลดความคลาดเคลื่อน' : 
                        'Using special formula when height difference > 100m to reduce deviation'
                    }
                </div>
            </div>
            ` : ''}
            <div class="trajectory-hint">
                🎯 ${currentLanguage === 'th' ? 
                    (wasAdjusted ? 'ใช้สูตรปรับปรุงสำหรับความแม่นยำสูง' : 'ใช้ข้อมูลจาก BALLISTIC_DATA เป็นหลัก พร้อมค่าชดเชยจากความสูง') : 
                    (wasAdjusted ? 'Using improved formula for high accuracy' : 'Using BALLISTIC_DATA with height compensation')
                }
            </div>
        `;
    }

    highlightTableRow(range) {
        // Remove previous highlights
        document.querySelectorAll('#ballistic-tbody tr').forEach(row => {
            row.classList.remove('highlighted');
        });

        // Add highlight to current row
        const targetRow = document.querySelector(`#ballistic-tbody tr[data-range="${range}"]`);
        if (targetRow) {
            targetRow.classList.add('highlighted');
            targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    showError(message) {
        // Simple error display - could be enhanced with a proper toast system
        alert(message);
    }

    // Target Preset Management Functions
    saveTargetPreset(presetNumber) {
        // Get current target values
        const targetData = {
            x: this.targetX.value,
            y: this.targetY.value,
            alt: this.targetAlt.value,
            timestamp: new Date().getTime()
        };

        // Validate that we have data to save
        if (!targetData.x || !targetData.y || !targetData.alt) {
            this.showMessage(LANGUAGE_DATA[currentLanguage].presetSavedMessage.replace('{0}', presetNumber) + ' - กรุณากรอกข้อมูลเป้าหมายให้ครบ', 'warning');
            return;
        }

        // Save to memory and localStorage
        this.targetPresets[presetNumber] = targetData;
        localStorage.setItem('mortarTargetPresets', JSON.stringify(this.targetPresets));

        // Update button appearance
        this.updatePresetButtonStatus(presetNumber);
        
        // Update active preset status
        this.updateActivePresetStatus();

        // Show success message
        this.showMessage(LANGUAGE_DATA[currentLanguage].presetSavedMessage.replace('{0}', presetNumber), 'success');
    }

    loadTargetPreset(presetNumber) {
        const preset = this.targetPresets[presetNumber];
        
        if (!preset) {
            this.showMessage(`เป้าหมาย ${presetNumber} ยังไม่มีข้อมูล`, 'warning');
            return;
        }

        // Load values into input fields
        this.targetX.value = preset.x;
        this.targetY.value = preset.y;
        this.targetAlt.value = preset.alt;

        // Update grid reference display
        this.updateGridReferences();
        
        // Update active preset status
        this.updateActivePresetStatus();

        // Trigger calculation if inputs are valid
        if (this.validateInputs()) {
            this.calculate();
        }

        // Show success message
        this.showMessage(LANGUAGE_DATA[currentLanguage].presetLoadedMessage.replace('{0}', presetNumber), 'success');
    }

    loadTargetPresets() {
        // Load presets from localStorage
        try {
            const saved = localStorage.getItem('mortarTargetPresets');
            if (saved) {
                this.targetPresets = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Failed to load target presets:', e);
            this.targetPresets = {};
        }

        // Update all button statuses (exclude clear button)
        for (let i = 1; i <= 8; i++) {
            this.updatePresetButtonStatus(i);
        }
    }

    updatePresetButtonStatus(presetNumber) {
        const button = document.querySelector(`.preset-btn[data-preset="${presetNumber}"]`);
        if (!button) return;

        const statusSpan = button.querySelector('.preset-status');
        const preset = this.targetPresets[presetNumber];

        if (preset) {
            button.classList.add('has-data');
            const date = new Date(preset.timestamp);
            const timeStr = date.toLocaleTimeString('th-TH', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            statusSpan.textContent = currentLanguage === 'th' ? 'มีข้อมูล' : 'Saved';
            button.title = `Grid: ${preset.x}, ${preset.y} Alt: ${preset.alt}m (${timeStr})`;
        } else {
            button.classList.remove('has-data');
            statusSpan.textContent = LANGUAGE_DATA[currentLanguage].presetEmpty;
            button.title = currentLanguage === 'th' ? 
                'คลิกซ้าย: โหลด • คลิกขวา: บันทึก' : 
                'Left-click: Load • Right-click: Save';
        }
    }

    clearTargetData() {
        // Clear all target input fields
        this.targetX.value = '';
        this.targetY.value = '';
        this.targetAlt.value = '';

        // Update grid reference display
        this.updateGridReferences();

        // Hide results section
        this.resultsSection.classList.remove('show');

        // Clear validation states
        [this.targetX, this.targetY, this.targetAlt].forEach(input => {
            input.classList.remove('error', 'success');
        });

        // Clear all saved target presets (1-8)
        this.targetPresets = {};
        localStorage.removeItem('mortarTargetPresets');

        // Update all preset button statuses to show "Empty"
        for (let i = 1; i <= 8; i++) {
            this.updatePresetButtonStatus(i);
        }
        
        // Update active preset status (will remove all highlights)
        this.updateActivePresetStatus();

        // Show success message
        this.showMessage(LANGUAGE_DATA[currentLanguage].clearTargetMessage, 'success');
    }

    updateActivePresetStatus() {
        // Get current target values
        const currentX = this.targetX.value;
        const currentY = this.targetY.value;
        const currentAlt = this.targetAlt.value;
        
        // Remove active-preset class from all buttons first
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.classList.remove('active-preset');
        });
        
        // If any field is empty, don't highlight any preset
        if (!currentX || !currentY || !currentAlt) {
            return;
        }
        
        // Check each preset for matching values
        for (let i = 1; i <= 8; i++) {
            const preset = this.targetPresets[i];
            if (preset && 
                preset.x === currentX && 
                preset.y === currentY && 
                preset.alt === currentAlt) {
                
                // Found matching preset - highlight it
                const button = document.querySelector(`.preset-btn[data-preset="${i}"]`);
                if (button) {
                    button.classList.add('active-preset');
                }
                break; // Only highlight the first match
            }
        }
    }

    showMessage(message, type = 'info') {
        // Create a simple toast message
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        // Style the toast
        Object.assign(toast.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 20px',
            borderRadius: '6px',
            color: '#fff',
            fontWeight: 'bold',
            zIndex: '10000',
            maxWidth: '300px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            opacity: '0',
            transform: 'translateY(-20px)',
            transition: 'all 0.3s ease'
        });

        // Set background color based on type
        switch (type) {
            case 'success':
                toast.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                break;
            case 'warning':
                toast.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
                break;
            case 'error':
                toast.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                break;
            default:
                toast.style.background = 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
        }

        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language system first
    initializeLanguage();
    
    // Then initialize the calculator and store reference
    window.mortarCalculator = new MortarCalculator();
});
