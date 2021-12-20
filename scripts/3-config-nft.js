import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x4aa30c0557fc48C692918543474702D1246681FD",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Freaking Covid",
                description: "This NFT will give you access to CovidDAO!",
                image: readFileSync("scripts/assets/covid.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()