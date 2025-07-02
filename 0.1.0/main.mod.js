import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class blocktest extends PolyMod {
    init = (pml) => {
        this.pml = pml;

       
        // COLORED PILLARS

        pml.editorExtras.registerCategory("summerdrop", "umbrella")
        pml.editorExtras.registerModel(`${this.modBaseUrl}/${this.modVersion}/models/umbreklla.glb`)
        pml.editorExtras.registerBlock("umbrella", "summerdrop", "af83eebf50c302880377e4f8c1fb3b2ef96ae193e8d03c17e1fd77c73a847e63", "umbrella", "asd", [[[-1, 0, -1], [0, 0, 0]]])
        

     2
    }
}

export let polyMod = new blocktest();
