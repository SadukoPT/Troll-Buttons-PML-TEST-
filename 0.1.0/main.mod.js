import { PolyMod, MixinType, PolyModLoader } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class TrollButtonsMod extends PolyMod {
    init(/** @type {PolyModLoader} */ pmlInstance) {
        this.pml = pmlInstance;
    }

    postInit() { }
    simInit() { }
}

export const polyMod = new TrollButtonsMod();
