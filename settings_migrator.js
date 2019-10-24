const DefaultSettings = {
    "enabled":  true,
    "alerted":  true, // Pop-up notification
    "notice":   true, // Pop-up notification
    "messager": true, // Message
    "marker":   true, // Lootbeam
    "itemId":  98260, // Vergo's Head
    "bosses": [
        {huntingZoneId: 1023, templateId:     3000, name: "(Event)Dakuryon's Shade"},
        {huntingZoneId: 1023, templateId: 20150805, name: "(Event)Dakuryon's Shade"},
        {huntingZoneId: 1023, templateId: 88888888, name: "(Event)Big Blue Box"},
        {huntingZoneId: 1023, templateId: 88888889, name: "(Event)Big Blue Box"},
        {huntingZoneId: 1023, templateId:   160341, name: "(Event)Phoney Santa"},
        {huntingZoneId: 1023, templateId: 99999997, name: "(Event)Fat Santa"},
        {huntingZoneId: 1023, templateId: 99999998, name: "(Event)Tiny Santa"},
        {huntingZoneId: 1023, templateId: 99999991, name: "(Event)Caiman Egg Thief"},
        {huntingZoneId: 1023, templateId: 99999992, name: "(Event)Caiman Egg Thief"},
        {huntingZoneId: 1023, templateId: 99999999, name: "(Event)Caiman Egg Thief"},
        {huntingZoneId:  183, templateId:     6002, name: "(Event)AirDrop"},
/* ==== 亚伦南部 ======================================================================================== */
        {huntingZoneId:   2, templateId: 1271, name: "[Arcadia]Arcun(Fey Forest)"},
        {huntingZoneId:   3, templateId: 1271, name: "[Arcadia]Arcun(Oblivion Woods)"},
        {huntingZoneId:   5, templateId: 1271, name: "[Arcadia]Arcun(Tuwangi Mire)"},
        {huntingZoneId:   6, templateId: 1271, name: "[Arcadia]Arcun(Valley of Titans)"},
        {huntingZoneId:   7, templateId: 1271, name: "[Arcadia]Arcun(Celestial Hills)"},
        {huntingZoneId:   4, templateId: 1271, name: "[Ostgarath]Eteral(Fyrmount)"},
        {huntingZoneId:   9, templateId: 1271, name: "[Ostgarath]Eteral(Ascension Valley)"},
        {huntingZoneId:  10, templateId: 1271, name: "[Ostgarath]Eteral(Serpentis Isle)"},
        {huntingZoneId:  11, templateId: 1271, name: "[Ostgarath]Eteral(Jagged Coast)"},
        {huntingZoneId:  12, templateId: 1271, name: "[Ostgarath]Eteral(Mistmoor Island)"},
        {huntingZoneId:  15, templateId: 1271, name: "[Poporia]Foretta(Cliffs of Insanity)"},
        {huntingZoneId:  16, templateId: 1271, name: "[Poporia]Foretta(Vale of the Fang)"},
        {huntingZoneId:  17, templateId: 1271, name: "[Poporia]Foretta(Paraanon Ravine)"},
        {huntingZoneId:  23, templateId: 1271, name: "[Poporia]Foretta(Lake of Tears)"},
        {huntingZoneId:  18, templateId: 1271, name: "[Val Aureum]Viadu(Colossal Ruins)"},
        {huntingZoneId:  19, templateId: 1271, name: "[Val Aureum]Viadu(Freeholds)"},
        {huntingZoneId:  21, templateId: 1271, name: "[Val Aureum]Viadu(Basilisk Crag)"},
        {huntingZoneId:  24, templateId: 1271, name: "[Val Aureum]Viadu(Aurum Road)"},
/* ==== 夏拉南部 ======================================================================================== */
        {huntingZoneId:  26, templateId: 1271, name: "[Essenia]Ezart(Blessing Basin)"},
        {huntingZoneId:  27, templateId: 1271, name: "[Essenia]Ezart(Essenian Crest)"},
        {huntingZoneId:  28, templateId: 1271, name: "[Essenia]Ezart(Blightwood)"},
        {huntingZoneId:  29, templateId: 1271, name: "[Essenia]Ezart(Timeless Woods)"},
        {huntingZoneId:  30, templateId: 1271, name: "[Veritas]Versa(Balder's Refuge)"},
        {huntingZoneId:  31, templateId: 1271, name: "[Westonia]Storan(Tempest Reach)"},
        {huntingZoneId:  32, templateId: 1271, name: "[Westonia]Storan(Mount Tyrannas)"},
        {huntingZoneId:  34, templateId: 1271, name: "[Westonia]Storan(Frost Reach)"},
        {huntingZoneId:  35, templateId: 1271, name: "[Val Elenium]Viace(Wyrmgorge)"},
        {huntingZoneId:  36, templateId: 1271, name: "[Val Elenium]Viace(Tor Exsul)"},
        {huntingZoneId:  38, templateId: 1271, name: "[Val Elenium]Viace(Sienna Canyon)"},
        {huntingZoneId:  40, templateId: 1271, name: "[Val Palrada]Vaneva(Quarantine Zone)"},
        {huntingZoneId:  41, templateId: 1271, name: "[Val Palrada]Vaneva(Feral Valley)"},
/* ==== 夏拉北部 ======================================================================================== */
        {huntingZoneId:  45, templateId: 1271, name: "[Val Tirkai]Lotica(Thrallhold)"},
        {huntingZoneId:  47, templateId: 1271, name: "[Val Tirkai]Lotica(Tirkai Forest)"},
        {huntingZoneId:  48, templateId: 1271, name: "[Helkan District]Hecurn(Khanovar Front)"},
        {huntingZoneId:  49, templateId: 1271, name: "[Val Kaeli]Locarnum(Argonea)"},
        {huntingZoneId:  50, templateId: 1271, name: "[Val Kaeli]Locarnum(Granarkus)"},
        {huntingZoneId:  51, templateId: 1271, name: "[Lorcada]Loahcun(Vale of Spires)"},
        {huntingZoneId:  52, templateId: 1271, name: "[Lorcada]Loahcun(Plain of the Damned)"},
        {huntingZoneId:  54, templateId: 1271, name: "[Sylvanoth]Silvette(Seeliewood)"},
        {huntingZoneId:  55, templateId: 1271, name: "[Sylvanoth]Silvette(Darkquaver Woods)"},
        {huntingZoneId:  56, templateId: 1271, name: "[Sylvanoth]Silvette(Susurrus Woods)"},
        {huntingZoneId:  57, templateId: 1271, name: "[Sylvanoth]Silvette(Amena Quatla)"},
/* ===== 亚伦北部 ======================================================================================= */
        {huntingZoneId: 172, templateId: 1271, name: "[Val Oriyn]Varrek(Savage Reach)"},
        {huntingZoneId: 181, templateId: 1271, name: "[Val Oriyn]Varrek(Ex Prima)"},
        {huntingZoneId: 182, templateId: 1271, name: "[Val Oriyn]Varrek(Spring Valley)"},
        {huntingZoneId: 183, templateId: 1278, name: "[Val Oriyn]Varrek(Highwatch Outskirts)"},
        {huntingZoneId: 191, templateId: 1271, name: "[Val Oriyn]Varrek(Arx Umbra)"},
/* ==== 保護領地 ======================================================================================== */
        {huntingZoneId:  13, templateId: 1271, name: "[Island of Dawn]Vardung(Island of Dawn)"},
/* ==== 直辖領地 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1278, name: "[Velika]Veracun(Velika)"},
        {huntingZoneId:  72, templateId: 1278, name: "[Allemantheia]Alluman(Allemantheia)"},
        {huntingZoneId:  84, templateId: 1278, name: "[Kaiator]Kaidera(Kaiator)"},
/* ==== 神秘商店 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1271, name: "Petam(Velika)"},
        {huntingZoneId:  63, templateId: 1279, name: "Petam(Velika)"},
        {huntingZoneId:  72, templateId: 1271, name: "Hemusk(Allemantheia)"},
        {huntingZoneId:  84, templateId: 1271, name: "Kaylight(Kaiator)"},
        {huntingZoneId: 183, templateId: 1271, name: "Jondo(Highwatch Outskirts)"},
/* ==== 交付哥布林 ====================================================================================== */
        {huntingZoneId:  63, templateId: 1276, logTime: 0, name: "Starc(Velika)"},
        {huntingZoneId:  63, templateId: 1284,             name: "Starc(Velika)"},
        {huntingZoneId:  84, templateId: 1276, logTime: 0, name: "Starc(Allemantheia)"},
        {huntingZoneId:  72, templateId: 1276, logTime: 0, name: "Starc(Kaiator)"},
        {huntingZoneId: 183, templateId: 1276, logTime: 0, name: "Starc(Highwatch Outskirts)"},
/* ==== 世界BOSS ======================================================================================== */
        {huntingZoneId:  26, templateId: 5001, logTime: 0, name: "Ortan(Blessing Basin)"},
        {huntingZoneId:  39, templateId:  501, logTime: 0, name: "Hazard(Arachnaea)"},
        {huntingZoneId:  51, templateId: 4001, logTime: 0, name: "Cerrus(Vale of Spires)"},
/* ==== 空岛稀有 ======================================================================================== */
        {huntingZoneId: 2020, templateId: 1100, name: "Supreme Draakon Pursuer"},
        {huntingZoneId: 2020, templateId: 1101, name: "Draakon Guard-Captain"},
        {huntingZoneId: 2020, templateId: 1102, name: "Supreme Draakon Dominator"},
        {huntingZoneId: 2020, templateId: 1200, name: "Elite Naga Priest"},
        {huntingZoneId: 2020, templateId: 1201, name: "Elite Naga Knight"},
        {huntingZoneId: 2020, templateId: 1202, name: "Elite Naga Executioner"},
        {huntingZoneId: 2020, templateId: 1300, name: "Manuk"},
        {huntingZoneId: 2020, templateId: 1400, name: "Axcellob"},
        {huntingZoneId: 2020, templateId: 1500, name: "Zemces"},
        {huntingZoneId: 2020, templateId: 1600, name: "Red-Flecked Crab"},
        {huntingZoneId: 2020, templateId: 1601, name: "Thorny Eyestalker"},
        {huntingZoneId: 2020, templateId: 1700, name: "Vekes"}        
    ]
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) { // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }
        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
        switch (to_ver) {
            default:
                let oldsettings = settings
                settings = Object.assign(DefaultSettings, {});
                for (let option in oldsettings) {
                    if (option == "bosses") continue
                    if (settings[option]) {
                        settings[option] = oldsettings[option]
                    }
                }
                break;
        }
        return settings;
    }
}
