import { PolyMod, MixinType, PolyModLoader } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class TrollButtonsMod extends PolyMod {
    init = function(pml) {
  pml.registerSettingCategory("Add Speed Mod");

  //setting name, id, eventtype, default value1, default value2 (optional), function

  pml.registerSetting("Add 100 Speed", "modAdd100", "keydown", "KeyM", "KeyN", (e) => {
    
      });

export const polyMod = new TrollButtonsMod();
