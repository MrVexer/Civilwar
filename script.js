// ==============================
// Vengeful Realms Civil War Map
// ==============================

const holds = {

    "Haafingar": {
        owner: "Empire",
        jarl: "Elisif the Fair",
        status: "Peaceful",
        strength: "★★★★☆",
        description:
            "Seat of Solitude and the Imperial Government in Skyrim."
    },

    "Hjaalmarch": {
        owner: "Empire",
        jarl: "Idgrod Ravencrone",
        status: "Stable",
        strength: "★★★☆☆",
        description:
            "A marshland hold surrounding Morthal."
    },

    "The Reach": {
        owner: "Empire",
        jarl: "Igmund",
        status: "Stable",
        strength: "★★★★☆",
        description:
            "Home of Markarth and rich silver mines."
    },

    "Whiterun": {
        owner: "Neutral",
        jarl: "Balgruuf",
        status: "Watching the War",
        strength: "★★★★★",
        description:
            "The heart of Skyrim and an important trade hub."
    },

    "Falkreath": {
        owner: "Empire",
        jarl: "Siddgeir",
        status: "Peaceful",
        strength: "★★★☆☆",
        description:
            "Dense forests guard Skyrim's southern border."
    },

    "The Pale": {
        owner: "Stormcloaks",
        jarl: "Skald",
        status: "Fortified",
        strength: "★★★★☆",
        description:
            "Northern hold surrounding Dawnstar."
    },

    "Winterhold": {
        owner: "Stormcloaks",
        jarl: "Korir",
        status: "Quiet",
        strength: "★★☆☆☆",
        description:
            "Once a great city, now home to the College of Winterhold."
    },

    "Eastmarch": {
        owner: "Stormcloaks",
        jarl: "Ulfric Stormcloak",
        status: "Military Headquarters",
        strength: "★★★★★",
        description:
            "Capital of the Stormcloak Rebellion."
    },

    "The Rift": {
        owner: "Stormcloaks",
        jarl: "Laila Law-Giver",
        status: "Stable",
        strength: "★★★☆☆",
        description:
            "The forests and lakes surrounding Riften."
    }

};

// ==============================
// Display Hold Information
// ==============================

function selectHold(name) {

    const hold = holds[name];

    if (!hold) return;

    document.getElementById("holdName").textContent = name;

    document.getElementById("owner").textContent =
        hold.owner;

    document.getElementById("jarl").textContent =
        hold.jarl;

    document.getElementById("status").textContent =
        hold.status;

    document.getElementById("strength").textContent =
        hold.strength;

    document.getElementById("description").textContent =
        hold.description;

    // Highlight Selected Hold

    document.querySelectorAll(".hold").forEach(h => {

        h.classList.remove("selected");

    });

    const selected = document.getElementById(
        name.toLowerCase().replace(/ /g, "")
    );

    if (selected)
        selected.classList.add("selected");

}

// ==============================
// Default Hold
// ==============================

window.onload = function () {

    selectHold("Whiterun");

};
