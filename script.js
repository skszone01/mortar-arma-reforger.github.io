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
        "A832AYShell": "กระสุนควัน A-832AY",
        "C832CShell": "กระสุนส่องสว่าง C-832C",
        weaponPosition: "📍 ตำแหน่งอาวุธ",
        weapon: "อาวุธ",
        targetPosition: "🎯 ตำแหน่งเป้าหมาย", 
        target: "เป้าหมาย",
        gridX: "Grid X (0-99999):",
        gridY: "Grid Y (0-99999):",
        gridReference: "Grid Reference:",
        gridWarning: "รูปแบบ Grid Reference ต้องเท่ากับในแผนเกม",
        altitude: "ระดับความสูง (m):",
        calculate: "🧮 คำนวณ",
        firingSolution: "📊 ผลการคำนวณการยิง",
        distance: "ระยะทาง:",
        azimuth: "มุมแอซิมุท ⭤ :",
        elevation: "มุมยกปืน ⭥ :",
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
        videoTutorial: "📺 วิดีโอสอนการใช้งาน",
        ringCalculation: "🎯 RING",
        ringTitle: "Ring ที่สามารถยิงได้",
        calculateRings: "คำนวณ RING",
        availableRings: "Ring ที่ใช้ได้:",
        outOfRange: "เกินระยะ",
        noRingsAvailable: "ไม่มี Ring ที่ใช้ได้สำหรับระยะนี้",
        numpadReference: "🎯 Numpad Reference",
        numpadInstructions: "กดเลข 1-9 เพื่อปรับพิกัดตามตำแหน่ง Numpad (ต้องมีเลขในพิกัด 3 ตัวขึ้นไป)"
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
        "A832AYShell": "A-832AY Smoke shell",
        "C832CShell": "C-832C Illumination shell", 
        weaponPosition: "📍 Weapon Position",
        weapon: "WEAPON",
        targetPosition: "🎯 Target Position",
        target: "TARGET", 
        gridX: "Grid X (0-99999):",
        gridY: "Grid Y (0-99999):",
        gridReference: "Grid Reference:",
        gridWarning: "Grid Reference format matches in-game Map display",
        altitude: "Altitude (m):",
        calculate: "🧮 CALCULATE",
        firingSolution: "📊 FIRING SOLUTION",
        distance: "Distance:",
        azimuth: "Azimuth ⭤ :",
        elevation: "Elevation ⭥ :",
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
        videoTutorial: "📺 Video Tutorial",
        ringCalculation: "🎯 RING",
        ringTitle: "Available Rings",
        calculateRings: "Calculate RING",
        availableRings: "Available Rings:",
        outOfRange: "Out of Range",
        noRingsAvailable: "No rings available for this range",
        numpadReference: "🎯 Numpad Reference",
        numpadInstructions: "Press 1-9 to adjust coordinates according to Numpad position (requires at least 3 digits in coordinates)"
    },
    ja: {
        title: "迫撃砲計算機",
        mortarType: "🎯 迫撃砲タイプ",
        originalGame: "オリジナルゲーム",
        modMortars: "[MOD] Adult Mortars",
        shellType: "💥 砲弾タイプ",
        heShell: "榴弾",
        smokeShell: "煙幕弾",
        illuminationShell: "照明弾",
        "0832AyShell": "0-832Ay 榴弾",
        "A832AYShell": "A-832AY 煙幕弾",
        "C832CShell": "C-832C 照明弾",
        weaponPosition: "📍 武器位置",
        weapon: "武器",
        targetPosition: "🎯 目標位置",
        target: "目標",
        gridX: "グリッド X (0-99999):",
        gridY: "グリッド Y (0-99999):",
        gridReference: "グリッド参照:",
        gridWarning: "グリッド参照形式はゲーム内表示と一致します",
        altitude: "高度 (m):",
        calculate: "🧮 計算",
        firingSolution: "📊 射撃解決",
        distance: "距離:",
        azimuth: "方位角 ⭤ :",
        elevation: "仰角 ⭥ :",
        charge: "装薬:",
        timeOfFlight: "飛行時間:",
        heightDifference: "高度差:",
        accuracyWarning: "⚠️ 精度警告",
        accuracyWarningText: "高度補正距離が100メートルを超える場合、50-200メートルの着弾偏差が発生します",
        ballisticData: "📋 弾道データ",
        range: "射程 (m)",
        elevationMil: "仰角 (mil)",
        timeSec: "時間 (秒)",
        dispersion: "散布",
        footer: "ARMA REFORGER 迫撃砲計算機 v1.0 | ゲーム内弾道データに基づく",
        createdBy: "作成者:",
        targetPresets: "🎯 目標プリセット",
        presetInstructions: "PC: 左クリック（読込）• 右クリック（保存）| モバイル: タップ（読込）• 長押し（保存）| ✗: 全削除",
        presetSaved: "保存済み",
        presetLoaded: "読込済み",
        presetEmpty: "空",
        presetSavedMessage: "目標 {0} が正常に保存されました",
        presetLoadedMessage: "目標 {0} が正常に読み込まれました",
        clearTarget: "全削除",
        clearTargetMessage: "すべての目標データと保存されたプリセットが正常に削除されました",
        videoTutorial: "📺 ビデオチュートリアル",
        ringCalculation: "🎯 リング",
        ringTitle: "利用可能なリング",
        calculateRings: "リング計算",
        availableRings: "利用可能なリング:",
        outOfRange: "射程外",
        noRingsAvailable: "この射程では利用可能なリングがありません",
        numpadReference: "🎯 テンキー参照",
        numpadInstructions: "1-9を押してテンキー位置に従って座標を調整します（座標に3桁以上の数字が必要）"
    },
    zh: {
        title: "迫击炮计算器",
        mortarType: "🎯 迫击炮类型",
        originalGame: "原版游戏",
        modMortars: "[MOD] Adult Mortars",
        shellType: "💥 炮弹类型",
        heShell: "高爆弹",
        smokeShell: "烟幕弹",
        illuminationShell: "照明弹",
        "0832AyShell": "0-832Ay 高爆弹",
        "A832AYShell": "A-832AY 烟幕弹",
        "C832CShell": "C-832C 照明弹",
        weaponPosition: "📍 武器位置",
        weapon: "武器",
        targetPosition: "🎯 目标位置",
        target: "目标",
        gridX: "网格 X (0-99999):",
        gridY: "网格 Y (0-99999):",
        gridReference: "网格坐标:",
        gridWarning: "网格坐标格式与游戏内显示一致",
        altitude: "海拔 (m):",
        calculate: "🧮 计算",
        firingSolution: "📊 射击方案",
        distance: "距离:",
        azimuth: "方位角 ⭤ :",
        elevation: "仰角 ⭥ :",
        charge: "装药:",
        timeOfFlight: "飞行时间:",
        heightDifference: "高度差:",
        accuracyWarning: "⚠️ 精度警告",
        accuracyWarningText: "如果高度补偿距离超过100米，将会产生50-200米的着弹偏差",
        ballisticData: "📋 弹道数据",
        range: "射程 (m)",
        elevationMil: "仰角 (mil)",
        timeSec: "时间 (秒)",
        dispersion: "散布",
        footer: "ARMA REFORGER 迫击炮计算器 v1.0 | 基于游戏内弹道数据",
        createdBy: "制作者:",
        targetPresets: "🎯 目标预设",
        presetInstructions: "PC: 左键（加载）• 右键（保存）| 移动设备: 点击（加载）• 长按（保存）| ✗: 全部清除",
        presetSaved: "已保存",
        presetLoaded: "已加载",
        presetEmpty: "空",
        presetSavedMessage: "目标 {0} 保存成功",
        presetLoadedMessage: "目标 {0} 加载成功",
        clearTarget: "全部清除",
        clearTargetMessage: "所有目标数据和保存的预设已成功清除",
        videoTutorial: "📺 视频教程",
        ringCalculation: "🎯 环形",
        ringTitle: "可用环形",
        calculateRings: "计算环形",
        availableRings: "可用环形:",
        outOfRange: "超出射程",
        noRingsAvailable: "此射程没有可用的环形",
        numpadReference: "🎯 小键盘参考",
        numpadInstructions: "按1-9键根据小键盘位置调整坐标（坐标需要至少3位数字）"
    },
    id: {
        title: "Kalkulator Mortar",
        mortarType: "🎯 Jenis Mortar",
        originalGame: "Game Asli",
        modMortars: "[MOD] Adult Mortars",
        shellType: "💥 Jenis Peluru",
        heShell: "Peluru HE",
        smokeShell: "Peluru Asap",
        illuminationShell: "Peluru Penerangan",
        "0832AyShell": "Peluru HE 0-832Ay",
        "A832AYShell": "Peluru Asap A-832AY",
        "C832CShell": "Peluru Penerangan C-832C",
        weaponPosition: "📍 Posisi Senjata",
        weapon: "SENJATA",
        targetPosition: "🎯 Posisi Target",
        target: "TARGET",
        gridX: "Grid X (0-99999):",
        gridY: "Grid Y (0-99999):",
        gridReference: "Referensi Grid:",
        gridWarning: "Format referensi grid sesuai dengan tampilan dalam game",
        altitude: "Ketinggian (m):",
        calculate: "🧮 HITUNG",
        firingSolution: "📊 SOLUSI TEMBAKAN",
        distance: "Jarak:",
        azimuth: "Azimuth:",
        elevation: "Elevasi:",
        charge: "Muatan:",
        timeOfFlight: "Waktu Terbang:",
        heightDifference: "Perbedaan Ketinggian:",
        accuracyWarning: "⚠️ Peringatan Akurasi",
        accuracyWarningText: "Jika jarak kompensasi ketinggian lebih dari 100 meter, akan terjadi penyimpangan dampak 50-200 meter",
        ballisticData: "📋 Data Balistik",
        range: "Jangkauan (m)",
        elevationMil: "Elevasi (mil)",
        timeSec: "Waktu (dtk)",
        dispersion: "Penyebaran",
        footer: "Kalkulator Mortar ARMA REFORGER v1.0 | Berdasarkan data balistik dalam game",
        createdBy: "Dibuat oleh:",
        targetPresets: "🎯 Preset Target",
        presetInstructions: "PC: Klik kiri (Muat) • Klik kanan (Simpan) | Mobile: Ketuk (Muat) • Tahan lama (Simpan) | ✗: Hapus Semua",
        presetSaved: "Tersimpan",
        presetLoaded: "Termuat",
        presetEmpty: "Kosong",
        presetSavedMessage: "Target {0} berhasil disimpan",
        presetLoadedMessage: "Target {0} berhasil dimuat",
        clearTarget: "Hapus Semua",
        clearTargetMessage: "Semua data target dan preset tersimpan berhasil dihapus",
        videoTutorial: "📺 Tutorial Video",
        ringCalculation: "🎯 RING",
        ringTitle: "Ring yang Tersedia",
        calculateRings: "Hitung RING",
        availableRings: "Ring yang Tersedia:",
        outOfRange: "Di Luar Jangkauan",
        noRingsAvailable: "Tidak ada ring yang tersedia untuk jangkauan ini",
        numpadReference: "🎯 Referensi Numpad",
        numpadInstructions: "Tekan 1-9 untuk menyesuaikan koordinat sesuai posisi numpad (memerlukan setidaknya 3 digit dalam koordinat)"
    }
};

let currentLanguage = 'en'; // Default to English

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
        for (let i = 1; i <= 9; i++) {
            window.mortarCalculator.updatePresetButtonStatus(i);
        }
        // Refresh RING results if visible
        if (window.mortarCalculator.ringSection && window.mortarCalculator.ringSection.classList.contains('show')) {
            window.mortarCalculator.calculateAvailableRings();
        }
    }
}

// Initialize language system
function initializeLanguage() {
    // Get saved preference or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
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
        },
        "A-832AY": {
            // 1 Ring - Original (Dispersion: 7m ตามภาพที่ 1)
            1: [
                { range: 50, elevation: 1450, timeOfFlight: 14.1, dispersion: "51m" },
                { range: 100, elevation: 1399, timeOfFlight: 14, dispersion: "52m" },
                { range: 150, elevation: 1347, timeOfFlight: 13.9, dispersion: "55m" },
                { range: 200, elevation: 1292, timeOfFlight: 13.8, dispersion: "57m" },
                { range: 250, elevation: 1235, timeOfFlight: 13.6, dispersion: "63m" },
                { range: 300, elevation: 1172, timeOfFlight: 13.3, dispersion: "70m" },
                { range: 350, elevation: 1102, timeOfFlight: 12.9, dispersion: "82m" },
                { range: 400, elevation: 1020, timeOfFlight: 12.4, dispersion: "122m" },
                { range: 450, elevation: 898, timeOfFlight: 11.4, dispersion: "0m" }
            ],
            // 2 Ring - Original (Dispersion: 12m ตามภาพที่ 2)  
            2: [
                { range: 200, elevation: 1381, timeOfFlight: 18.4, dispersion: "31m" },
                { range: 250, elevation: 1319, timeOfFlight: 18.2, dispersion: "33m" },
                { range: 300, elevation: 1252, timeOfFlight: 17.9, dispersion: "34m" },
                { range: 350, elevation: 1179, timeOfFlight: 17.5, dispersion: "38m" },
                { range: 400, elevation: 1097, timeOfFlight: 16.9, dispersion: "57m" },
                { range: 450, elevation: 993, timeOfFlight: 16, dispersion: "67m" },
                { range: 500, elevation: 805, timeOfFlight: 13.8, dispersion: "0m" }
            ],
            // 3 Ring - Original (Dispersion: 18m ตามภาพที่ 3)
            3: [
                { range: 300, elevation: 1387, timeOfFlight: 23.5, dispersion: "19m" },
                { range: 400, elevation: 1348, timeOfFlight: 23.8, dispersion: "20m" },
                { range: 500, elevation: 1308, timeOfFlight: 23.2, dispersion: "21m" },
                { range: 600, elevation: 1266, timeOfFlight: 22.9, dispersion: "22m" },
                { range: 700, elevation: 1222, timeOfFlight: 22.7, dispersion: "24m" },
                { range: 800, elevation: 1175, timeOfFlight: 22.3, dispersion: "26m" },
                { range: 900, elevation: 1123, timeOfFlight: 21.8, dispersion: "28m" },
                { range: 1000, elevation: 1065, timeOfFlight: 21.3, dispersion: "32m" },
                { range: 1100, elevation: 994, timeOfFlight: 20.4, dispersion: "40m" },
                { range: 1200, elevation: 902, timeOfFlight: 19.2, dispersion: "64m" }
            ],
            // 4 Ring - Original (Dispersion: 24m ตามภาพที่ 4)
            4: [
                { range: 400, elevation: 1387, timeOfFlight: 27.3, dispersion: "15m" },
                { range: 500, elevation: 1357, timeOfFlight: 27.2, dispersion: "15m" },
                { range: 600, elevation: 1327, timeOfFlight: 27.1, dispersion: "15m" },
                { range: 700, elevation: 1296, timeOfFlight: 26.9, dispersion: "16m" },
                { range: 800, elevation: 1264, timeOfFlight: 26.7, dispersion: "16m" },
                { range: 900, elevation: 1231, timeOfFlight: 26.5, dispersion: "17m" },
                { range: 1000, elevation: 1196, timeOfFlight: 26.2, dispersion: "18m" },
                { range: 1100, elevation: 1159, timeOfFlight: 25.8, dispersion: "20m" },
                { range: 1200, elevation: 1119, timeOfFlight: 25.4, dispersion: "22m" },
                { range: 1300, elevation: 1075, timeOfFlight: 24.9, dispersion: "24m" },
                { range: 1400, elevation: 1026, timeOfFlight: 24.3, dispersion: "27m" },
                { range: 1500, elevation: 969, timeOfFlight: 23.5, dispersion: "33m" },
                { range: 1600, elevation: 896, timeOfFlight: 22.3, dispersion: "50m" },
                { range: 1700, elevation: 753, timeOfFlight: 19.8, dispersion: "0m" }
            ]
        },

        "C-832C": {
            // 1 Ring - Original C-832C Illumination (ตามภาพ Ring 1 - Dispersion: 9m)
            1: [
                { range: 100, elevation: 1421, timeOfFlight: 15.2, dispersion: "40m" },
                { range: 150, elevation: 1381, timeOfFlight: 16.3, dispersion: "42m" },
                { range: 200, elevation: 1339, timeOfFlight: 16.2, dispersion: "43m" },
                { range: 250, elevation: 1296, timeOfFlight: 16.1, dispersion: "46m" },
                { range: 300, elevation: 1251, timeOfFlight: 15.9, dispersion: "48m" },
                { range: 350, elevation: 1203, timeOfFlight: 15.7, dispersion: "52m" },
                { range: 400, elevation: 1151, timeOfFlight: 15.4, dispersion: "58m" },
                { range: 450, elevation: 1093, timeOfFlight: 15, dispersion: "65m" },
                { range: 500, elevation: 1028, timeOfFlight: 14.5, dispersion: "83m" },
                { range: 550, elevation: 945, timeOfFlight: 13.8, dispersion: "146m" },
                { range: 600, elevation: 799, timeOfFlight: 12.3, dispersion: "0m" }
            ],
            // 2 Ring - Original C-832C Illumination (ตามภาพ Ring 2 - Dispersion: 17m)
            2: [
                { range: 200, elevation: 1417, timeOfFlight: 23.6, dispersion: "21m" },
                { range: 300, elevation: 1374, timeOfFlight: 23.5, dispersion: "22m" },
                { range: 400, elevation: 1330, timeOfFlight: 23.3, dispersion: "23m" },
                { range: 500, elevation: 1284, timeOfFlight: 23.1, dispersion: "24m" },
                { range: 600, elevation: 1234, timeOfFlight: 22.8, dispersion: "25m" },
                { range: 700, elevation: 1182, timeOfFlight: 22.4, dispersion: "29m" },
                { range: 800, elevation: 1124, timeOfFlight: 21.9, dispersion: "32m" },
                { range: 900, elevation: 1057, timeOfFlight: 21.3, dispersion: "36m" },
                { range: 1000, elevation: 979, timeOfFlight: 20.4, dispersion: "48m" },
                { range: 1100, elevation: 870, timeOfFlight: 18.9, dispersion: "89m" }
            ],
            // 3 Ring - Original C-832C Illumination (ตามภาพ Ring 3 - Dispersion: 24m)
            3: [
                { range: 300, elevation: 1411, timeOfFlight: 29, dispersion: "16m" },
                { range: 400, elevation: 1380, timeOfFlight: 28.9, dispersion: "16m" },
                { range: 500, elevation: 1348, timeOfFlight: 28.7, dispersion: "16m" },
                { range: 600, elevation: 1315, timeOfFlight: 28.6, dispersion: "16m" },
                { range: 700, elevation: 1281, timeOfFlight: 28.4, dispersion: "17m" },
                { range: 800, elevation: 1246, timeOfFlight: 28.1, dispersion: "18m" },
                { range: 900, elevation: 1209, timeOfFlight: 27.8, dispersion: "19m" },
                { range: 1000, elevation: 1170, timeOfFlight: 27.4, dispersion: "21m" },
                { range: 1100, elevation: 1128, timeOfFlight: 27, dispersion: "23m" },
                { range: 1200, elevation: 1082, timeOfFlight: 26.5, dispersion: "25m" },
                { range: 1300, elevation: 1031, timeOfFlight: 25.8, dispersion: "28m" },
                { range: 1400, elevation: 973, timeOfFlight: 25, dispersion: "33m" },
                { range: 1500, elevation: 903, timeOfFlight: 23.9, dispersion: "43m" },
                { range: 1600, elevation: 807, timeOfFlight: 22.3, dispersion: "0m" }
            ],
            // 4 Ring - Original C-832C Illumination (ตามภาพ Ring 4 - Dispersion: 32m)
            4: [
                { range: 400, elevation: 1411, timeOfFlight: 35.3, dispersion: "12m" },
                { range: 500, elevation: 1388, timeOfFlight: 35.2, dispersion: "12m" },
                { range: 600, elevation: 1364, timeOfFlight: 35.1, dispersion: "11m" },
                { range: 700, elevation: 1341, timeOfFlight: 35, dispersion: "13m" },
                { range: 800, elevation: 1316, timeOfFlight: 34.8, dispersion: "13m" },
                { range: 900, elevation: 1291, timeOfFlight: 34.7, dispersion: "13m" },
                { range: 1000, elevation: 1265, timeOfFlight: 34.4, dispersion: "13m" },
                { range: 1100, elevation: 1238, timeOfFlight: 34.2, dispersion: "14m" },
                { range: 1200, elevation: 1210, timeOfFlight: 33.9, dispersion: "14m" },
                { range: 1300, elevation: 1181, timeOfFlight: 33.6, dispersion: "15m" },
                { range: 1400, elevation: 1150, timeOfFlight: 33.2, dispersion: "15m" },
                { range: 1500, elevation: 1119, timeOfFlight: 32.8, dispersion: "17m" },
                { range: 1600, elevation: 1085, timeOfFlight: 32.4, dispersion: "18m" },
                { range: 1700, elevation: 1048, timeOfFlight: 31.8, dispersion: "19m" },
                { range: 1800, elevation: 1009, timeOfFlight: 31.2, dispersion: "21m" },
                { range: 1900, elevation: 965, timeOfFlight: 30.4, dispersion: "23m" },
                { range: 2000, elevation: 917, timeOfFlight: 29.6, dispersion: "27m" },
                { range: 2100, elevation: 860, timeOfFlight: 28.4, dispersion: "34m" },
                { range: 2200, elevation: 787, timeOfFlight: 26.9, dispersion: "0m" }
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
            // 1 Ring - M853A1 illumination round (1 Ring)
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
                { range: 1100, elevation: 1144, timeOfFlight: 23.4, dispersion: "33m" },
                { range: 1150, elevation: 1114, timeOfFlight: 23.0, dispersion: "35m" },
                { range: 1200, elevation: 1081, timeOfFlight: 22.6, dispersion: "41m" },
                { range: 1250, elevation: 1046, timeOfFlight: 22.0, dispersion: "47m" },
                { range: 1300, elevation: 1005, timeOfFlight: 20.4, dispersion: "58m" },
                { range: 1350, elevation: 958, timeOfFlight: 20.5, dispersion: "98m" },
                { range: 1400, elevation: 900, timeOfFlight: 18.9, dispersion: "0m" },
                { range: 1450, elevation: 802, timeOfFlight: 18.9, dispersion: "0m" }
            ],
            // 2 Ring - M853A1 illumination round (2 Rings)
            2: [
                { range: 500, elevation: 1509, timeOfFlight: 39.8, dispersion: "9m" },
                { range: 600, elevation: 1490, timeOfFlight: 39.7, dispersion: "9m" },
                { range: 700, elevation: 1470, timeOfFlight: 39.6, dispersion: "10m" },
                { range: 800, elevation: 1452, timeOfFlight: 39.5, dispersion: "10m" },
                { range: 900, elevation: 1433, timeOfFlight: 39.3, dispersion: "10m" },
                { range: 1000, elevation: 1413, timeOfFlight: 39.3, dispersion: "10m" },
                { range: 1100, elevation: 1393, timeOfFlight: 39.1, dispersion: "11m" },
                { range: 1200, elevation: 1372, timeOfFlight: 39.0, dispersion: "11m" },
                { range: 1300, elevation: 1351, timeOfFlight: 38.8, dispersion: "11m" },
                { range: 1400, elevation: 1329, timeOfFlight: 38.6, dispersion: "11m" },
                { range: 1500, elevation: 1306, timeOfFlight: 38.3, dispersion: "11m" },
                { range: 1600, elevation: 1283, timeOfFlight: 38.1, dispersion: "12m" },
                { range: 1700, elevation: 1259, timeOfFlight: 37.8, dispersion: "12m" },
                { range: 1800, elevation: 1235, timeOfFlight: 37.5, dispersion: "13m" },
                { range: 1900, elevation: 1209, timeOfFlight: 37.2, dispersion: "13m" },
                { range: 2000, elevation: 1182, timeOfFlight: 36.8, dispersion: "14m" },
                { range: 2100, elevation: 1154, timeOfFlight: 36.5, dispersion: "15m" },
                { range: 2200, elevation: 1125, timeOfFlight: 35.9, dispersion: "17m" },
                { range: 2300, elevation: 1093, timeOfFlight: 35.4, dispersion: "18m" },
                { range: 2400, elevation: 1058, timeOfFlight: 34.8, dispersion: "19m" },
                { range: 2500, elevation: 1021, timeOfFlight: 34.1, dispersion: "22m" },
                { range: 2600, elevation: 980, timeOfFlight: 33.3, dispersion: "26m" },
                { range: 2700, elevation: 934, timeOfFlight: 32.3, dispersion: "32m" },
                { range: 2800, elevation: 878, timeOfFlight: 31.1, dispersion: "32m" },
                { range: 2900, elevation: 806, timeOfFlight: 29.4, dispersion: "0m" }
            ],
            // 3 Ring - M853A1 illumination round (3 Rings)
            3: [
                { range: 700, elevation: 1507, timeOfFlight: 50.1, dispersion: "7m" },
                { range: 800, elevation: 1493, timeOfFlight: 50.0, dispersion: "7m" },
                { range: 900, elevation: 1479, timeOfFlight: 50.0, dispersion: "7m" },
                { range: 1000, elevation: 1465, timeOfFlight: 49.9, dispersion: "7m" },
                { range: 1100, elevation: 1451, timeOfFlight: 49.8, dispersion: "7m" },
                { range: 1200, elevation: 1437, timeOfFlight: 49.7, dispersion: "7m" },
                { range: 1300, elevation: 1422, timeOfFlight: 49.6, dispersion: "7m" },
                { range: 1400, elevation: 1408, timeOfFlight: 49.5, dispersion: "8m" },
                { range: 1500, elevation: 1393, timeOfFlight: 49.3, dispersion: "8m" },
                { range: 1600, elevation: 1378, timeOfFlight: 49.2, dispersion: "8m" },
                { range: 1700, elevation: 1362, timeOfFlight: 49.0, dispersion: "7m" },
                { range: 1800, elevation: 1347, timeOfFlight: 48.8, dispersion: "8m" },
                { range: 1900, elevation: 1331, timeOfFlight: 48.7, dispersion: "8m" },
                { range: 2000, elevation: 1315, timeOfFlight: 48.5, dispersion: "9m" },
                { range: 2100, elevation: 1298, timeOfFlight: 48.2, dispersion: "8m" },
                { range: 2200, elevation: 1281, timeOfFlight: 48.0, dispersion: "8m" },
                { range: 2300, elevation: 1264, timeOfFlight: 47.8, dispersion: "9m" },
                { range: 2400, elevation: 1246, timeOfFlight: 47.5, dispersion: "9m" },
                { range: 2500, elevation: 1227, timeOfFlight: 47.2, dispersion: "9m" },
                { range: 2600, elevation: 1210, timeOfFlight: 46.9, dispersion: "10m" },
                { range: 2700, elevation: 1191, timeOfFlight: 46.6, dispersion: "10m" },
                { range: 2800, elevation: 1171, timeOfFlight: 46.2, dispersion: "10m" },
                { range: 2900, elevation: 1153, timeOfFlight: 45.9, dispersion: "11m" },
                { range: 3000, elevation: 1133, timeOfFlight: 45.5, dispersion: "11m" },
                { range: 3100, elevation: 1108, timeOfFlight: 45.0, dispersion: "11m" },
                { range: 3200, elevation: 1086, timeOfFlight: 44.5, dispersion: "12m" },
                { range: 3300, elevation: 1062, timeOfFlight: 44.0, dispersion: "13m" },
                { range: 3400, elevation: 1038, timeOfFlight: 43.5, dispersion: "13m" },
                { range: 3500, elevation: 1012, timeOfFlight: 42.9, dispersion: "14m" },
                { range: 3600, elevation: 984, timeOfFlight: 42.2, dispersion: "14m" },
                { range: 3700, elevation: 955, timeOfFlight: 41.5, dispersion: "16m" },
                { range: 3800, elevation: 923, timeOfFlight: 40.7, dispersion: "17m" },
                { range: 3900, elevation: 888, timeOfFlight: 39.8, dispersion: "18m" },
                { range: 4000, elevation: 850, timeOfFlight: 38.7, dispersion: "23m" },
                { range: 4100, elevation: 804, timeOfFlight: 37.4, dispersion: "0m" }
            ],
            // 4 Ring - M853A1 illumination round (4 Rings)
            4: [
                { range: 3400, elevation: 1162, timeOfFlight: 53.0, dispersion: "9m" },
                { range: 3500, elevation: 1145, timeOfFlight: 52.7, dispersion: "9m" },
                { range: 3600, elevation: 1128, timeOfFlight: 52.3, dispersion: "9m" },
                { range: 3700, elevation: 1110, timeOfFlight: 51.9, dispersion: "9m" },
                { range: 3800, elevation: 1092, timeOfFlight: 51.5, dispersion: "9m" },
                { range: 3900, elevation: 1073, timeOfFlight: 51.0, dispersion: "9m" },
                { range: 4000, elevation: 1054, timeOfFlight: 50.5, dispersion: "10m" },
                { range: 4100, elevation: 1034, timeOfFlight: 50.0, dispersion: "10m" },
                { range: 4200, elevation: 1013, timeOfFlight: 49.5, dispersion: "10m" },
                { range: 4300, elevation: 992, timeOfFlight: 48.9, dispersion: "12m" },
                { range: 4400, elevation: 969, timeOfFlight: 48.3, dispersion: "12m" },
                { range: 4500, elevation: 946, timeOfFlight: 47.6, dispersion: "13m" },
                { range: 4600, elevation: 921, timeOfFlight: 46.9, dispersion: "13m" },
                { range: 4700, elevation: 894, timeOfFlight: 46.1, dispersion: "14m" },
                { range: 4800, elevation: 866, timeOfFlight: 45.2, dispersion: "15m" },
                { range: 4900, elevation: 835, timeOfFlight: 44.2, dispersion: "16m" },
                { range: 5000, elevation: 801, timeOfFlight: 43.1, dispersion: "0m" }
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
        },
        "A-832AY": {
            // 1 Ring - MOD A-832AY (ตามภาพใหม่ - Ring 1)
            1: [
                { range: 50, elevation: 1450, timeOfFlight: 14.1, dispersion: "51m" },
                { range: 100, elevation: 1399, timeOfFlight: 14.0, dispersion: "52m" },
                { range: 150, elevation: 1347, timeOfFlight: 13.9, dispersion: "55m" },
                { range: 200, elevation: 1292, timeOfFlight: 13.8, dispersion: "57m" },
                { range: 250, elevation: 1235, timeOfFlight: 13.6, dispersion: "63m" },
                { range: 300, elevation: 1172, timeOfFlight: 13.3, dispersion: "70m" },
                { range: 350, elevation: 1102, timeOfFlight: 12.9, dispersion: "82m" },
                { range: 400, elevation: 1020, timeOfFlight: 12.4, dispersion: "122m" },
                { range: 450, elevation: 898, timeOfFlight: 11.4, dispersion: "0m" }
            ],
            // 2 Ring - MOD A-832AY (ตามภาพใหม่ - Ring 2)
            2: [
                { range: 200, elevation: 1429, timeOfFlight: 24.3, dispersion: "18m" },
                { range: 300, elevation: 1393, timeOfFlight: 24.2, dispersion: "18m" },
                { range: 400, elevation: 1357, timeOfFlight: 24.1, dispersion: "19m" },
                { range: 500, elevation: 1319, timeOfFlight: 23.9, dispersion: "20m" },
                { range: 600, elevation: 1279, timeOfFlight: 23.7, dispersion: "20m" },
                { range: 700, elevation: 1238, timeOfFlight: 23.4, dispersion: "21m" },
                { range: 800, elevation: 1194, timeOfFlight: 23.1, dispersion: "22m" },
                { range: 900, elevation: 1147, timeOfFlight: 22.7, dispersion: "24m" },
                { range: 1000, elevation: 1096, timeOfFlight: 22.2, dispersion: "28m" },
                { range: 1100, elevation: 1037, timeOfFlight: 21.6, dispersion: "34m" },
                { range: 1200, elevation: 966, timeOfFlight: 20.7, dispersion: "46m" },
                { range: 1300, elevation: 862, timeOfFlight: 19.2, dispersion: "106m" },
                { range: 1300, elevation: 862, timeOfFlight: 19.2, dispersion: "0m" }
            ],
            // 3 Ring - MOD A-832AY (ตามภาพใหม่ - Ring 3)
            3: [
                { range: 300, elevation: 1433, timeOfFlight: 31.1, dispersion: "12m" },
                { range: 400, elevation: 1410, timeOfFlight: 31.1, dispersion: "11m" },
                { range: 500, elevation: 1387, timeOfFlight: 31.0, dispersion: "12m" },
                { range: 600, elevation: 1364, timeOfFlight: 30.9, dispersion: "12m" },
                { range: 700, elevation: 1340, timeOfFlight: 30.8, dispersion: "12m" },
                { range: 800, elevation: 1316, timeOfFlight: 30.6, dispersion: "13m" },
                { range: 900, elevation: 1290, timeOfFlight: 30.5, dispersion: "12m" },
                { range: 1000, elevation: 1265, timeOfFlight: 30.3, dispersion: "14m" },
                { range: 1100, elevation: 1238, timeOfFlight: 30.1, dispersion: "14m" },
                { range: 1200, elevation: 1210, timeOfFlight: 29.8, dispersion: "14m" },
                { range: 1300, elevation: 1181, timeOfFlight: 29.5, dispersion: "14m" },
                { range: 1400, elevation: 1151, timeOfFlight: 29.2, dispersion: "16m" },
                { range: 1500, elevation: 1119, timeOfFlight: 28.8, dispersion: "17m" },
                { range: 1600, elevation: 1084, timeOfFlight: 28.4, dispersion: "18m" },
                { range: 1700, elevation: 1047, timeOfFlight: 27.8, dispersion: "20m" },
                { range: 1800, elevation: 1005, timeOfFlight: 27.2, dispersion: "23m" },
                { range: 1900, elevation: 956, timeOfFlight: 26.4, dispersion: "27m" },
                { range: 2000, elevation: 898, timeOfFlight: 25.4, dispersion: "38m" },
                { range: 2100, elevation: 810, timeOfFlight: 23.7, dispersion: "0m" }
            ],
            // 4 Ring - MOD A-832AY (ตามภาพใหม่ - Ring 4) 
            4: [
                { range: 400, elevation: 1432, timeOfFlight: 36.5, dispersion: "8m" },
                { range: 500, elevation: 1415, timeOfFlight: 36.5, dispersion: "8m" },
                { range: 600, elevation: 1398, timeOfFlight: 36.4, dispersion: "9m" },
                { range: 700, elevation: 1380, timeOfFlight: 36.3, dispersion: "9m" },
                { range: 800, elevation: 1362, timeOfFlight: 36.2, dispersion: "9m" },
                { range: 900, elevation: 1344, timeOfFlight: 36.1, dispersion: "9m" },
                { range: 1000, elevation: 1326, timeOfFlight: 36.0, dispersion: "9m" },
                { range: 1100, elevation: 1307, timeOfFlight: 35.9, dispersion: "9m" },
                { range: 1200, elevation: 1288, timeOfFlight: 35.7, dispersion: "10m" },
                { range: 1300, elevation: 1269, timeOfFlight: 35.6, dispersion: "11m" },
                { range: 1400, elevation: 1248, timeOfFlight: 35.4, dispersion: "10m" },
                { range: 1500, elevation: 1228, timeOfFlight: 35.2, dispersion: "11m" },
                { range: 1600, elevation: 1206, timeOfFlight: 34.9, dispersion: "11m" },
                { range: 1700, elevation: 1184, timeOfFlight: 34.7, dispersion: "11m" },
                { range: 1800, elevation: 1161, timeOfFlight: 34.4, dispersion: "12m" },
                { range: 1900, elevation: 1138, timeOfFlight: 34.1, dispersion: "12m" },
                { range: 2000, elevation: 1112, timeOfFlight: 33.7, dispersion: "13m" },
                { range: 2100, elevation: 1086, timeOfFlight: 33.3, dispersion: "13m" },
                { range: 2200, elevation: 1058, timeOfFlight: 32.9, dispersion: "15m" },
                { range: 2300, elevation: 1028, timeOfFlight: 32.4, dispersion: "16m" },
                { range: 2400, elevation: 995, timeOfFlight: 31.8, dispersion: "18m" },
                { range: 2500, elevation: 958, timeOfFlight: 31.1, dispersion: "19m" },
                { range: 2600, elevation: 916, timeOfFlight: 30.2, dispersion: "23m" },
                { range: 2700, elevation: 865, timeOfFlight: 29.1, dispersion: "32m" },
                { range: 2800, elevation: 792, timeOfFlight: 27.5, dispersion: "0m" }
            ]
        },
        "C-832C": {
            // Ring 1 - MOD C-832C Illumination (ตามภาพ Ring 1 - Dispersion: 15m)
            1: [
                { range: 150, elevation: 1429, timeOfFlight: 21.9, dispersion: "24m" },
                { range: 200, elevation: 1405, timeOfFlight: 21.8, dispersion: "24m" },
                { range: 250, elevation: 1381, timeOfFlight: 21.8, dispersion: "25m" },
                { range: 300, elevation: 1356, timeOfFlight: 21.7, dispersion: "25m" },
                { range: 350, elevation: 1331, timeOfFlight: 21.6, dispersion: "26m" },
                { range: 400, elevation: 1305, timeOfFlight: 21.5, dispersion: "27m" },
                { range: 450, elevation: 1278, timeOfFlight: 21.4, dispersion: "28m" },
                { range: 500, elevation: 1250, timeOfFlight: 21.2, dispersion: "28m" },
                { range: 550, elevation: 1222, timeOfFlight: 21.0, dispersion: "31m" },
                { range: 600, elevation: 1191, timeOfFlight: 20.8, dispersion: "32m" },
                { range: 650, elevation: 1159, timeOfFlight: 20.6, dispersion: "33m" },
                { range: 700, elevation: 1126, timeOfFlight: 20.3, dispersion: "36m" },
                { range: 750, elevation: 1090, timeOfFlight: 20.0, dispersion: "40m" },
                { range: 800, elevation: 1050, timeOfFlight: 19.6, dispersion: "45m" },
                { range: 850, elevation: 1005, timeOfFlight: 19.1, dispersion: "50m" },
                { range: 900, elevation: 955, timeOfFlight: 18.6, dispersion: "63m" },
                { range: 950, elevation: 892, timeOfFlight: 17.8, dispersion: "99m" },
                { range: 1000, elevation: 800, timeOfFlight: 16.6, dispersion: "0m" }
            ],
            // Ring 2 - MOD C-832C Illumination (ตามภาพ Ring 2 - Dispersion: 28m)
            2: [
                { range: 300, elevation: 1424, timeOfFlight: 32.2, dispersion: "13m" },
                { range: 400, elevation: 1398, timeOfFlight: 32.1, dispersion: "13m" },
                { range: 500, elevation: 1371, timeOfFlight: 32.0, dispersion: "13m" },
                { range: 600, elevation: 1344, timeOfFlight: 31.9, dispersion: "14m" },
                { range: 700, elevation: 1316, timeOfFlight: 31.7, dispersion: "14m" },
                { range: 800, elevation: 1287, timeOfFlight: 31.5, dispersion: "14m" },
                { range: 900, elevation: 1257, timeOfFlight: 31.3, dispersion: "15m" },
                { range: 1000, elevation: 1226, timeOfFlight: 31.0, dispersion: "16m" },
                { range: 1100, elevation: 1194, timeOfFlight: 30.7, dispersion: "17m" },
                { range: 1200, elevation: 1159, timeOfFlight: 30.4, dispersion: "18m" },
                { range: 1300, elevation: 1123, timeOfFlight: 30.0, dispersion: "19m" },
                { range: 1400, elevation: 1084, timeOfFlight: 29.5, dispersion: "21m" },
                { range: 1500, elevation: 1042, timeOfFlight: 28.9, dispersion: "23m" },
                { range: 1600, elevation: 995, timeOfFlight: 28.2, dispersion: "26m" },
                { range: 1700, elevation: 942, timeOfFlight: 27.3, dispersion: "30m" },
                { range: 1800, elevation: 879, timeOfFlight: 26.2, dispersion: "37m" },
                { range: 1900, elevation: 796, timeOfFlight: 24.6, dispersion: "0m" }
            ],
            // Ring 3 - MOD C-832C Illumination (ตามภาพ Ring 3 - Dispersion: 39m)  
            3: [
                { range: 400, elevation: 1426, timeOfFlight: 40.4, dispersion: "10m" },
                { range: 500, elevation: 1407, timeOfFlight: 40.3, dispersion: "10m" },
                { range: 600, elevation: 1387, timeOfFlight: 40.2, dispersion: "9m" },
                { range: 700, elevation: 1368, timeOfFlight: 40.1, dispersion: "10m" },
                { range: 800, elevation: 1348, timeOfFlight: 40.0, dispersion: "10m" },
                { range: 900, elevation: 1328, timeOfFlight: 39.9, dispersion: "11m" },
                { range: 1000, elevation: 1307, timeOfFlight: 39.7, dispersion: "11m" },
                { range: 1100, elevation: 1286, timeOfFlight: 39.5, dispersion: "11m" },
                { range: 1200, elevation: 1264, timeOfFlight: 39.3, dispersion: "11m" },
                { range: 1300, elevation: 1242, timeOfFlight: 39.1, dispersion: "12m" },
                { range: 1400, elevation: 1219, timeOfFlight: 38.9, dispersion: "12m" },
                { range: 1500, elevation: 1195, timeOfFlight: 38.6, dispersion: "12m" },
                { range: 1600, elevation: 1170, timeOfFlight: 38.3, dispersion: "12m" },
                { range: 1700, elevation: 1145, timeOfFlight: 37.9, dispersion: "13m" },
                { range: 1800, elevation: 1118, timeOfFlight: 37.5, dispersion: "13m" },
                { range: 1900, elevation: 1090, timeOfFlight: 37.1, dispersion: "14m" },
                { range: 2000, elevation: 1061, timeOfFlight: 36.6, dispersion: "15m" },
                { range: 2100, elevation: 1031, timeOfFlight: 36.1, dispersion: "17m" },
                { range: 2200, elevation: 997, timeOfFlight: 35.5, dispersion: "17m" },
                { range: 2300, elevation: 962, timeOfFlight: 34.8, dispersion: "19m" },
                { range: 2400, elevation: 923, timeOfFlight: 34.0, dispersion: "21m" },
                { range: 2500, elevation: 880, timeOfFlight: 33.1, dispersion: "23m" },
                { range: 2600, elevation: 831, timeOfFlight: 31.9, dispersion: "27m" },
                { range: 2700, elevation: 771, timeOfFlight: 30.5, dispersion: "0m" }
            ],
            // Ring 4 - MOD C-832C Illumination (ตามภาพ Ring 4 - Dispersion: 53m)
            4: [
                { range: 600, elevation: 1414, timeOfFlight: 50.3, dispersion: "7m" },
                { range: 700, elevation: 1400, timeOfFlight: 50.3, dispersion: "8m" },
                { range: 800, elevation: 1385, timeOfFlight: 50.2, dispersion: "7m" },
                { range: 900, elevation: 1370, timeOfFlight: 50.1, dispersion: "7m" },
                { range: 1000, elevation: 1355, timeOfFlight: 50.0, dispersion: "8m" },
                { range: 1100, elevation: 1340, timeOfFlight: 49.9, dispersion: "8m" },
                { range: 1200, elevation: 1324, timeOfFlight: 49.7, dispersion: "8m" },
                { range: 1300, elevation: 1308, timeOfFlight: 49.6, dispersion: "8m" },
                { range: 1400, elevation: 1292, timeOfFlight: 49.4, dispersion: "8m" },
                { range: 1500, elevation: 1276, timeOfFlight: 49.2, dispersion: "8m" },
                { range: 1600, elevation: 1260, timeOfFlight: 49.0, dispersion: "9m" },
                { range: 1700, elevation: 1243, timeOfFlight: 48.8, dispersion: "9m" },
                { range: 1800, elevation: 1225, timeOfFlight: 48.6, dispersion: "8m" },
                { range: 1900, elevation: 1208, timeOfFlight: 48.3, dispersion: "9m" },
                { range: 2000, elevation: 1190, timeOfFlight: 48.1, dispersion: "9m" },
                { range: 2100, elevation: 1172, timeOfFlight: 47.8, dispersion: "10m" },
                { range: 2200, elevation: 1153, timeOfFlight: 47.5, dispersion: "10m" },
                { range: 2300, elevation: 1134, timeOfFlight: 47.1, dispersion: "10m" },
                { range: 2400, elevation: 1114, timeOfFlight: 46.8, dispersion: "10m" },
                { range: 2500, elevation: 1093, timeOfFlight: 46.4, dispersion: "10m" },
                { range: 2600, elevation: 1072, timeOfFlight: 46.0, dispersion: "10m" },
                { range: 2700, elevation: 1051, timeOfFlight: 45.5, dispersion: "11m" },
                { range: 2800, elevation: 1028, timeOfFlight: 45.0, dispersion: "11m" },
                { range: 2900, elevation: 1005, timeOfFlight: 44.5, dispersion: "12m" },
                { range: 3000, elevation: 981, timeOfFlight: 44.0, dispersion: "13m" },
                { range: 3100, elevation: 955, timeOfFlight: 43.3, dispersion: "13m" },
                { range: 3200, elevation: 928, timeOfFlight: 42.7, dispersion: "13m" },
                { range: 3300, elevation: 900, timeOfFlight: 41.9, dispersion: "15m" },
                { range: 3400, elevation: 870, timeOfFlight: 41.1, dispersion: "16m" },
                { range: 3500, elevation: 838, timeOfFlight: 40.2, dispersion: "18m" },
                { range: 3600, elevation: 802, timeOfFlight: 39.2, dispersion: "19m" },
                { range: 3700, elevation: 763, timeOfFlight: 38.0, dispersion: "0m" }
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
        
        // RING elements
        this.ringSection = document.getElementById('ring-section');
        this.calculateRingsBtn = document.getElementById('calculate-rings-btn');
        this.ringResults = document.getElementById('ring-results');
        
        // Preset elements
        this.presetButtons = document.querySelectorAll('.preset-btn');
        
        // Numpad elements
        this.numpadButtons = document.querySelectorAll('.numpad-btn');
        
        // Apply 5-digit restriction to coordinate inputs
        this.restrictToFiveDigits(this.weaponX);
        this.restrictToFiveDigits(this.weaponY);
        this.restrictToFiveDigits(this.targetX);
        this.restrictToFiveDigits(this.targetY);
    }

    bindEvents() {
        // Calculate button
        this.calculateBtn.addEventListener('click', () => this.calculate());
        
        // RING calculate button
        this.calculateRingsBtn.addEventListener('click', () => this.calculateAvailableRings());
        
        // Real-time calculation and grid display update
        [this.weaponX, this.weaponY, this.weaponAlt, 
         this.targetX, this.targetY, this.targetAlt].forEach(input => {
            input.addEventListener('input', () => {
                // Reset manual ring selection when inputs change
                this.manualRingSelected = false;
                
                this.updateGridReferences();
                // Check and update active preset status for target inputs only
                if (input === this.targetX || input === this.targetY || input === this.targetAlt) {
                    this.updateActivePresetStatus();
                }
                // Update numpad highlight when target coordinates change
                if (input === this.targetX || input === this.targetY) {
                    this.updateNumpadHighlight();
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

        // Numpad Reference buttons
        this.numpadButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const numpadValue = parseInt(btn.dataset.numpad);
                this.applyNumpadReference(numpadValue);
            });
        });
    }

    loadInitialData() {
        this.updateShellInfo(); // Initialize shell info
        this.createChargeTabs();
        this.loadBallisticData();
        this.updateGridReferences();
        this.updateNumpadHighlight(); // Initialize numpad highlighting
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
                case 'A-832AY':
                    shellText = texts["A832AYShell"];
                    break;
                case 'C-832C':
                    shellText = texts["C832CShell"];
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
                // Validate grid coordinates are within 5-digit maximum (0-99999)
                if ((input === this.weaponX || input === this.targetX || 
                     input === this.weaponY || input === this.targetY) && 
                    (parseInt(input.value) < 0 || parseInt(input.value) > 99999 || input.value.length > 5)) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.add('success');
                }
            }
        });
        
        return isValid;
    }

    // Restrict input to maximum 5 digits for coordinate fields
    restrictToFiveDigits(input) {
        input.addEventListener('input', (e) => {
            let value = e.target.value;
            // Remove any non-numeric characters (except for number inputs, but just to be safe)
            value = value.replace(/[^0-9]/g, '');
            // Limit to 5 digits
            if (value.length > 5) {
                value = value.slice(0, 5);
            }
            e.target.value = value;
        });
        
        // Also handle paste events
        input.addEventListener('paste', (e) => {
            setTimeout(() => {
                let value = e.target.value.replace(/[^0-9]/g, '');
                if (value.length > 5) {
                    value = value.slice(0, 5);
                }
                e.target.value = value;
            }, 10);
        });
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

    // กำหนดประเภทกระสุนตามระบบ mils
    getShellMilliradianSystem() {
        const russianShells = ['0-832Ay', 'A-832AY', 'C-832C'];
        const natoShells = ['M821', 'M819', 'M853A1'];
        
        if (russianShells.includes(this.currentShell)) {
            return 'russian'; // 6000 mils = 360°
        } else if (natoShells.includes(this.currentShell)) {
            return 'nato'; // 6400 mils = 360°
        }
        
        // Default to NATO system
        return 'nato';
    }

    // Convert degrees to mils based on shell type
    degreesToMils(degrees) {
        const system = this.getShellMilliradianSystem();
        
        if (system === 'russian') {
            // รัสเซีย: 6000 mils = 360°, ดังนั้น 1° = 16.6667 mils
            return degrees * 16.666666666667;
        } else {
            // NATO: 6400 mils = 360°, ดังนั้น 1° = 17.7778 mils  
            return degrees * 17.777777777778;
        }
    }

    // Convert mils to degrees based on shell type
    milsToDegrees(mils) {
        const system = this.getShellMilliradianSystem();
        
        if (system === 'russian') {
            // รัสเซีย: 6000 mils = 360°
            return mils * 0.06; // 1 mil = 0.06°
        } else {
            // NATO: 6400 mils = 360°
            return mils * 0.05625; // 1 mil = 0.05625°
        }
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

    // Calculate available RING values that can reach the target distance
    calculateAvailableRings() {
        if (!this.validateInputs()) {
            this.showError('กรุณากรอกข้อมูลให้ครบถ้วน');
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

        const distance = this.calculateDistance(weapon.x, weapon.y, target.x, target.y);
        const heightDiff = target.alt - weapon.alt;
        
        // Apply the same height adjustment formula as in calculate()
        let adjustedDistance = distance;
        const absoluteHeightDiff = Math.abs(heightDiff);
        if (absoluteHeightDiff > 100) {
            const excessHeight = absoluteHeightDiff - 100;
            if (heightDiff > 0) {
                adjustedDistance = distance + excessHeight;
            } else {
                adjustedDistance = distance - excessHeight;
            }
        }

        const availableRings = this.getAvailableRingsForDistance(adjustedDistance);
        this.displayRingResults(availableRings, adjustedDistance, distance !== adjustedDistance);
        this.ringSection.classList.add('show');
    }

    // Get all available rings/charges and their effective ranges for current shell
    getAvailableRingsForDistance(targetDistance) {
        const shellData = BALLISTIC_DATA[this.currentMortarType]?.[this.currentShell];
        if (!shellData) return [];

        const rings = [];

        Object.keys(shellData).forEach(charge => {
            const chargeData = shellData[charge];
            if (!chargeData || chargeData.length === 0) return;

            // Filter out invalid data (dispersion = "0m")
            const validData = chargeData.filter(item => item.dispersion !== "0m");
            if (validData.length === 0) return;

            const minRange = Math.min(...validData.map(item => item.range));
            const maxRange = Math.max(...validData.map(item => item.range));

            const ring = {
                number: parseInt(charge),
                minRange: minRange,
                maxRange: maxRange,
                canReach: targetDistance >= minRange && targetDistance <= maxRange,
                data: validData
            };

            rings.push(ring);
        });

        return rings.sort((a, b) => a.number - b.number);
    }

    // Display RING calculation results
    displayRingResults(rings, targetDistance, wasAdjusted) {
        const texts = LANGUAGE_DATA[currentLanguage];
        
        if (rings.length === 0) {
            this.ringResults.innerHTML = `
                <div class="ring-no-data">
                    ${texts.noRingsAvailable}
                </div>
            `;
            return;
        }

        let html = '';
        let availableCount = 0;

        const currentRing = this.getCurrentRing();
        
        rings.forEach(ring => {
            if (ring.canReach) {
                availableCount++;
                const isCurrentRing = currentRing === ring.number;
                html += `
                    <div class="ring-item available ${isCurrentRing ? 'current-ring' : ''}" data-ring="${ring.number}">
                        <div class="ring-label">RING</div>
                        <div class="ring-number">${ring.number}</div>
                        <div class="ring-range">${ring.minRange}m - ${ring.maxRange}m</div>
                    </div>
                `;
            } else {
                // Only show out-of-range rings, not hide them completely
                html += `
                    <div class="ring-item out-of-range" data-ring="${ring.number}">
                        <div class="ring-label">RING</div>
                        <div class="ring-number">${ring.number}</div>
                        <div class="ring-range">${texts.outOfRange}<br>${ring.minRange}m - ${ring.maxRange}m</div>
                    </div>
                `;
            }
        });

        // Add summary information
        const summaryText = wasAdjusted ? 
            `${texts.availableRings} ${availableCount}/${rings.length} (${currentLanguage === 'th' ? 'ระยะปรับแล้ว' : 'Adjusted range'}: ${Math.round(targetDistance)}m)` :
            `${texts.availableRings} ${availableCount}/${rings.length} (${Math.round(targetDistance)}m)`;

        html = `
            <div class="ring-summary" style="grid-column: 1 / -1; text-align: center; margin-bottom: 15px; padding: 10px; background: rgba(48, 54, 61, 0.3); border-radius: 6px; color: #fbbf24; font-weight: bold;">
                ${summaryText}
            </div>
            ${html}
        `;

        this.ringResults.innerHTML = html;

        // Add click events to available rings
        this.ringResults.querySelectorAll('.ring-item.available').forEach(item => {
            item.addEventListener('click', () => {
                const ringNumber = parseInt(item.dataset.ring);
                this.selectRing(ringNumber);
            });
        });
    }

    // Get the current ring being used
    getCurrentRing() {
        return this.currentCharge || 1; // Default to ring 1 if not set
    }

    // Select a specific ring and recalculate
    selectRing(ringNumber) {
        this.currentCharge = ringNumber;
        this.manualRingSelected = true; // Flag to indicate manual selection
        this.updateChargeTabsDisplay();
        this.loadBallisticData();
        
        // Recalculate with selected ring
        if (this.validateInputs()) {
            this.calculate();
        }

        // Show success message
        const texts = LANGUAGE_DATA[currentLanguage];
        this.showMessage(`${currentLanguage === 'th' ? 'เลือก Ring' : 'Selected Ring'} ${ringNumber}`, 'success');
    }

    // Apply Numpad Reference values to target coordinates
    applyNumpadReference(numpadValue) {
        // Check if target coordinates have at least 3 digits
        if (!this.targetX.value || !this.targetY.value) {
            this.showError(currentLanguage === 'th' ? 
                'กรุณากรอกพิกัดเป้าหมาย X และ Y ก่อน' : 
                'Please enter target X and Y coordinates first');
            return;
        }

        const currentX = this.targetX.value.toString();
        const currentY = this.targetY.value.toString();

        // Check minimum 3 digits requirement
        if (currentX.length < 3 || currentY.length < 3) {
            this.showError(currentLanguage === 'th' ? 
                'พิกัดต้องมีตัวเลขอย่างน้อย 3 ตัวขึ้นไป' : 
                'Coordinates must have at least 3 digits');
            return;
        }

        // Define Numpad Reference values
        const numpadMap = {
            1: { x: 15, y: 15 },
            2: { x: 50, y: 15 },
            3: { x: 85, y: 15 },
            4: { x: 15, y: 50 },
            5: { x: 50, y: 50 },
            6: { x: 85, y: 50 },
            7: { x: 15, y: 85 },
            8: { x: 50, y: 85 },
            9: { x: 85, y: 85 }
        };

        const newValues = numpadMap[numpadValue];
        if (!newValues) return;

        let newX, newY;

        // Process X coordinate
        if (currentX.length === 3) {
            // Add 2 digits at the end
            newX = currentX + newValues.x.toString().padStart(2, '0');
        } else if (currentX.length === 4) {
            // Replace 4th digit and add 5th digit
            newX = currentX.substring(0, 3) + newValues.x.toString().padStart(2, '0');
        } else if (currentX.length === 5) {
            // Replace 4th and 5th digits
            newX = currentX.substring(0, 3) + newValues.x.toString().padStart(2, '0');
        } else {
            // More than 5 digits - just replace last 2 digits
            newX = currentX.substring(0, currentX.length - 2) + newValues.x.toString().padStart(2, '0');
        }

        // Process Y coordinate
        if (currentY.length === 3) {
            // Add 2 digits at the end
            newY = currentY + newValues.y.toString().padStart(2, '0');
        } else if (currentY.length === 4) {
            // Replace 4th digit and add 5th digit
            newY = currentY.substring(0, 3) + newValues.y.toString().padStart(2, '0');
        } else if (currentY.length === 5) {
            // Replace 4th and 5th digits
            newY = currentY.substring(0, 3) + newValues.y.toString().padStart(2, '0');
        } else {
            // More than 5 digits - just replace last 2 digits
            newY = currentY.substring(0, currentY.length - 2) + newValues.y.toString().padStart(2, '0');
        }

        // Ensure we don't exceed 5 digits (99999 maximum) but preserve leading zeros
        const maxX = Math.min(parseInt(newX), 99999);
        const maxY = Math.min(parseInt(newY), 99999);
        
        // Pad with zeros to maintain original length or minimum required length
        const targetLengthX = Math.max(currentX.length, newX.length);
        const targetLengthY = Math.max(currentY.length, newY.length);
        
        newX = maxX.toString().padStart(Math.min(targetLengthX, 5), '0');
        newY = maxY.toString().padStart(Math.min(targetLengthY, 5), '0');

        // Update the input fields
        this.targetX.value = newX;
        this.targetY.value = newY;

        // Trigger update events
        this.updateGridReferences();
        this.updateActivePresetStatus();

        // Auto-calculate if inputs are valid
        if (this.validateInputs()) {
            this.calculate();
        }

        // Update numpad highlighting
        this.updateNumpadHighlight();

        // Show success message
        this.showMessage(currentLanguage === 'th' ? 
            `ปรับพิกัดตาม Numpad ${numpadValue} เรียบร้อยแล้ว` : 
            `Applied Numpad ${numpadValue} reference successfully`, 'success');
    }

    // Update numpad highlighting based on current coordinates
    updateNumpadHighlight() {
        // Clear all highlights first
        this.numpadButtons.forEach(btn => {
            btn.classList.remove('numpad-active');
        });

        // Check if we have target coordinates
        if (!this.targetX.value || !this.targetY.value) {
            return;
        }

        const currentX = this.targetX.value.toString();
        const currentY = this.targetY.value.toString();

        // Need at least 4 digits to check last 2 digits
        if (currentX.length < 4 || currentY.length < 4) {
            return;
        }

        // Get last 2 digits from both coordinates
        const lastTwoX = currentX.slice(-2);
        const lastTwoY = currentY.slice(-2);

        // Define the numpad mapping
        const numpadMap = {
            1: { x: '15', y: '15' },
            2: { x: '50', y: '15' },
            3: { x: '85', y: '15' },
            4: { x: '15', y: '50' },
            5: { x: '50', y: '50' },
            6: { x: '85', y: '50' },
            7: { x: '15', y: '85' },
            8: { x: '50', y: '85' },
            9: { x: '85', y: '85' }
        };

        // Find matching numpad button
        for (let [numpad, coords] of Object.entries(numpadMap)) {
            if (coords.x === lastTwoX && coords.y === lastTwoY) {
                const matchingBtn = document.querySelector(`[data-numpad="${numpad}"]`);
                if (matchingBtn) {
                    matchingBtn.classList.add('numpad-active');
                }
                break;
            }
        }
    }

    calculate() {
        if (!this.validateInputs()) {
            this.showError('Please fill in all fields with valid numbers (Grid: 0-99999, max 5 digits)');
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
        
        // เลือกประจุที่เหมาะสมตามระยะทางที่ปรับแล้ว (เว้นแต่ผู้ใช้เลือกเอง)
        if (!this.manualRingSelected) {
            const optimalCharge = this.selectOptimalCharge(adjustedDistance);
            if (optimalCharge !== this.currentCharge) {
                this.currentCharge = optimalCharge;
                this.updateChargeTabsDisplay();
            }
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
        
        // Auto-show RING section when results are displayed
        if (this.ringSection) {
            this.ringSection.classList.add('show');
            // Auto-calculate rings for convenience
            setTimeout(() => this.calculateAvailableRings(), 100);
        }
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
            <div class="info-item mil-system-info">
                <strong>🧭 ${currentLanguage === 'th' ? 'ระบบ Mils:' : 'Mils System:'}</strong> 
                ${this.getShellMilliradianSystem() === 'russian' ? 
                    `${currentLanguage === 'th' ? 'รัสเซีย' : 'Russian'} (6000 mils = 360°)` : 
                    `NATO (6400 mils = 360°)`
                }
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

        // Update numpad highlight
        this.updateNumpadHighlight();

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
        for (let i = 1; i <= 9; i++) {
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

        // Clear all saved target presets (1-9)
        this.targetPresets = {};
        localStorage.removeItem('mortarTargetPresets');

        // Update all preset button statuses to show "Empty"
        for (let i = 1; i <= 9; i++) {
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
        for (let i = 1; i <= 9; i++) {
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

/*
 * =======================================================================
 * ไม่อนุญาตให้นำไปใช้เพื่อแสวงหาผลกำไรใดๆทั้งสิ้น
 * หากนำไปใช้งานในส่วนอื่น ใส่เครดิต Youtube : Sitt Chanel ให้ด้วย
 * 
 * Not allowed to be used for any commercial purposes.
 * If used in other projects, please credit Youtube : Sitt Chanel
 * =======================================================================
 */
