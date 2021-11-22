const infoURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(infoURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    towns.forEach((town) => {
      if (
        town.name == "Preston" ||
        town.name == "Soda Springs" ||
        town.name == "Fish Haven"
      ) {
        // Create Town Cards //

        // let card = document.createElement("section");
        // let h2 = document.createElement("h2");

        // h2.textContent = prophets[i].name + " " + prophets[i].lastname;

        // card.appendChild(h2);

        // document.querySelector("div.town-events-info").appendChild(card);


        // Create Event Cards //
        let sectionEvent = document.createElement("section");
        let h3Event = document.createElement("h3");
        let divContCardEvent = document.createElement("div");
        let events = town.events;
        let allEvents = document.createElement("div");


        sectionEvent.setAttribute("class", "town-event");
        divContCardEvent.setAttribute(
          "class",
          "events"
        );

        h3Event.textContent = town.name;

        events.forEach((event) => {
          let eventPar = document.createElement("p");
          eventPar.textContent = event;
          allEvents.append(eventPar);
        });

        allEvents.setAttribute("class", "events-name");
        h3Event.setAttribute("class","h3-title");
        // eventPar.setAttribute("class", "p-event");
        divContCardEvent.append(allEvents);
        sectionEvent.append(h3Event, divContCardEvent);
        document.querySelector("div.town-events-info").append(sectionEvent);
      }
    });
  });
