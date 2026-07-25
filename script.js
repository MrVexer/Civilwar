const holds = {
  "Haafingar": {
    owner: "Empire",
    jarl: "Elisif the Fair",
    status: "Imperial capital",
    strength: "★★★★★",
    description: "Home to Solitude and the Imperial administration in Skyrim. Its coastline and fortified capital make it one of the most strategically secure holds."
  },

  "Hjaalmarch": {
    owner: "Empire",
    jarl: "Idgrod Ravencrone",
    status: "Stable",
    strength: "★★★☆☆",
    description: "A difficult marshland centred on Morthal. Its terrain limits large army movement but provides strong defensive opportunities."
  },

  "The Reach": {
    owner: "Empire",
    jarl: "Igmund",
    status: "Unrest reported",
    strength: "★★★★☆",
    description: "Markarth controls rich silver mines and mountain passes. The terrain strongly favours defenders and irregular warfare."
  },

  "Whiterun": {
    owner: "Neutral",
    jarl: "Balgruuf the Greater",
    status: "Watching the war",
    strength: "★★★★★",
    description: "Whiterun controls the centre of Skyrim and remains a decisive strategic prize. Roads from nearly every major region pass through the hold."
  },

  "Falkreath": {
    owner: "Empire",
    jarl: "Siddgeir",
    status: "Southern border secured",
    strength: "★★★☆☆",
    description: "Forested terrain and mountain passes protect Skyrim's southern approaches. Falkreath is vital for communication with Cyrodiil."
  },

  "The Pale": {
    owner: "Stormcloaks",
    jarl: "Skald the Elder",
    status: "Fortified",
    strength: "★★★★☆",
    description: "Dawnstar provides a northern port and access to the Sea of Ghosts. Harsh weather makes extended campaigns difficult."
  },

  "Winterhold": {
    owner: "Stormcloaks",
    jarl: "Korir",
    status: "Quiet",
    strength: "★★☆☆☆",
    description: "A sparsely populated northern hold. The College of Winterhold remains an important independent centre of magical power."
  },

  "Eastmarch": {
    owner: "Stormcloaks",
    jarl: "Ulfric Stormcloak",
    status: "Stormcloak headquarters",
    strength: "★★★★★",
    description: "Windhelm is the political and military centre of the rebellion. Eastmarch is heavily defended and capable of supporting major armies."
  },

  "The Rift": {
    owner: "Stormcloaks",
    jarl: "Laila Law-Giver",
    status: "Supply routes active",
    strength: "★★★☆☆",
    description: "The Rift controls routes into Morrowind and southern Skyrim. Its forests and waterways complicate military operations."
  }
};

const castles = {

    "Fort Greymoor": {
        owner: "Empire",
        commander: "Legate Rikke",
        garrison: 48,
        supplies: "High",
        status: "Fortified",
        description: "Protects the western approaches to Whiterun."
    },

    "Fort Dunstad": {
        owner: "Stormcloaks",
        commander: "Captain Hrolf",
        garrison: 35,
        supplies: "Medium",
        status: "Under Watch",
        description: "Controls the road to Dawnstar."
    },

    "Northwatch Keep": {
        owner: "Empire",
        commander: "Legate Fasendil",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "Its primary operational responsibility is detaining, interrogating, and holding political prisoners."
    },

      "Fort Hraggstad": {
        owner: "Empire",
        commander: "Legate Fasendil",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "Imperial Legion training grounds."
    },

      "Broken Tower Redoubt": {
        owner: "Empire",
        commander: "Legate Fasendil",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "TBD."
    },

      "Fort Sungard": {
        owner: "Stormcloaks",
        commander: "TBD",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "TBD."
    },

      "Cracked Tusk Keep": {
        owner: "Empire",
        commander: "Legate Fasendil",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "TBD."
    },

      "Fellglow Keep": {
        owner: "Stormcloaks",
        commander: "StormChud",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "TBD."
    },

      "Fort Amol": {
        owner: "Stormcloaks",
        commander: "StormChud",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "TBD."
    },

      "Mistwatch": {
        owner: "Stormcloaks",
        commander: "StormChud",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "TBD."
    },

      "Fort Greenwall": {
        owner: "Stormcloaks",
        commander: "StormChud",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "TBD."
    },

      "Faldar's Tooth": {
        owner: "Stormcloaks",
        commander: "StormChud",
        garrison: 42,
        supplies: "High",
        status: "Operational",
        description: "TBD."
  }
};

function showCastle(name) {
    const castle = castles[name];

    if (!castle) {
        console.warn(`No castle data found for: ${name}`);
        return;
    }

    // Main heading
    holdName.textContent = name;

    // Information values
    owner.textContent = castle.owner;
    jarl.textContent = castle.commander;
    status.textContent = castle.status;
    strength.textContent = `${castle.garrison} Soldiers`;
    description.textContent = castle.description;

    // Change the information labels for castle details
    document.querySelector("#owner")
        .closest(".info-card")
        .querySelector("h3").textContent = "Current Owner";

    document.querySelector("#jarl")
        .closest(".info-card")
        .querySelector("h3").textContent = "Commander";

    document.querySelector("#status")
        .closest(".info-card")
        .querySelector("h3").textContent = "Status";

    document.querySelector("#strength")
        .closest(".info-card")
        .querySelector("h3").textContent = "Garrison";

    document.querySelector("#description")
        .closest(".notes-card")
        .querySelector("h3").textContent = "Fort Information";

    // Update the owner badge
    ownerBadge.textContent = castle.owner;
    ownerBadge.className = `owner-badge ${ownerClass(castle.owner)}`;

    // Remove selection from the large hold markers
    markers.forEach(marker => {
        marker.classList.remove("selected");
    });

    // Highlight the selected castle hotspot
    document.querySelectorAll(".castle-hotspot").forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.castle === name
        );
    });
}

const holdName = document.getElementById("holdName");
const owner = document.getElementById("owner");
const jarl = document.getElementById("jarl");
const status = document.getElementById("status");
const strength = document.getElementById("strength");
const description = document.getElementById("description");
const ownerBadge = document.getElementById("ownerBadge");

const markers = [...document.querySelectorAll(".hold-marker")];
const filterButtons = [...document.querySelectorAll(".filter-button")];

function ownerClass(ownerName) {
  return ownerName.toLowerCase().replace(/\s+/g, "-");
}

function selectHold(name) {
  const hold = holds[name];

  if (!hold) {
    return;
  }

  holdName.textContent = name;
  owner.textContent = hold.owner;
  jarl.textContent = hold.jarl;
  status.textContent = hold.status;
  strength.textContent = hold.strength;
  description.textContent = hold.description;

  ownerBadge.textContent = hold.owner;
  ownerBadge.className = `owner-badge ${ownerClass(hold.owner)}`;

  markers.forEach(marker => {
    marker.classList.toggle("selected", marker.dataset.hold === name);
  });
}

markers.forEach(marker => {
  const hold = holds[marker.dataset.hold];

  if (hold) {
    marker.dataset.owner = hold.owner;
  }

  marker.addEventListener("click", () => {
    selectHold(marker.dataset.hold);
  });
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    markers.forEach(marker => {
      const shouldHide = filter !== "all" && marker.dataset.owner !== filter;
      marker.classList.toggle("hidden-by-filter", shouldHide);
    });
  });
});

document.querySelectorAll(".castle-hotspot").forEach(button => {

    button.addEventListener("click", () => {

        showCastle(button.dataset.castle);

    });

});

// Simple map zoom and drag controls.
const mapViewport = document.getElementById("mapViewport");
const mapStage = document.getElementById("mapStage");
const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");
const resetView = document.getElementById("resetView");

let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;

function applyTransform() {
  mapStage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

function resetMapView() {
  scale = 1;
  translateX = 0;
  translateY = 0;
  applyTransform();
}

zoomIn.addEventListener("click", () => {
  scale = Math.min(2.2, scale + 0.2);
  applyTransform();
});

zoomOut.addEventListener("click", () => {
  scale = Math.max(1, scale - 0.2);

  if (scale === 1) {
    translateX = 0;
    translateY = 0;
  }

  applyTransform();
});

resetView.addEventListener("click", resetMapView);

mapViewport.addEventListener("pointerdown", event => {
  if (
    scale <= 1 ||
    event.target.closest(".hold-marker") ||
    event.target.closest(".castle-hotspot")
) {
    return;
}

  isDragging = true;
  dragStartX = event.clientX - translateX;
  dragStartY = event.clientY - translateY;
  mapViewport.classList.add("dragging");
  mapViewport.setPointerCapture(event.pointerId);
});

mapViewport.addEventListener("pointermove", event => {
  if (!isDragging) {
    return;
  }

  translateX = event.clientX - dragStartX;
  translateY = event.clientY - dragStartY;
  applyTransform();
});

function stopDragging(event) {
  if (!isDragging) {
    return;
  }

  isDragging = false;
  mapViewport.classList.remove("dragging");

  if (event.pointerId !== undefined && mapViewport.hasPointerCapture(event.pointerId)) {
    mapViewport.releasePointerCapture(event.pointerId);
  }
}

mapViewport.addEventListener("pointerup", stopDragging);
mapViewport.addEventListener("pointercancel", stopDragging);

selectHold("Whiterun");
