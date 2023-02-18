const ageOfMajority = {
  Alberta: {
    age: 18,
    capital: "Edmonton",
    largest_city: "Calgary",
    population: "4,262,635",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_Alberta.svg/1024px-Flag_of_Alberta.svg.png",
  },
  "British Columbia": {
    age: 19,
    capital: "Victoria",
    largest_city: "Vancouver",
    population: "5,000,879",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_British_Columbia.svg/1024px-Flag_of_British_Columbia.svg.png",
  },
  Manitoba: {
    age: 18,
    capital: "Winnipeg",
    largest_city: "Winnipeg",
    population: "1,342,153",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Manitoba.svg/1024px-Flag_of_Manitoba.svg.png",
  },
  "New Brunswick": {
    age: 19,
    capital: "Fredericton",
    largest_city: "Moncton",
    population: "775,610",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_New_Brunswick.svg/1024px-Flag_of_New_Brunswick.svg.png",
  },
  "Newfoundland and Labrador": {
    age: 19,
    capital: "St. John's",
    largest_city: "St. John's",
    population: "510,550",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Newfoundland_and_Labrador.svg/1024px-Flag_of_Newfoundland_and_Labrador.svg.png",
  },
  "Northwest Territories": {
    age: 19,
    capital: "Yellowknife",
    largest_city: "Yellowknife",
    population: "41,070",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_the_Northwest_Territories.svg/1024px-Flag_of_the_Northwest_Territories.svg.png",
  },
  "Nova Scotia": {
    age: 19,
    capital: "Halifax",
    largest_city: "Halifax",
    population: "969,383",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nova_Scotia_flag.svg/1024px-Nova_Scotia_flag.svg.png",
  },
  Nunavut: {
    age: 19,
    capital: "Iqaluit",
    largest_city: "Iqaluit",
    population: "36,858",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Flag_of_Nunavut.svg/1024px-Flag_of_Nunavut.svg.png",
  },
  Ontario: {
    age: 18,
    capital: "Toronto",
    largest_city: "Toronto",
    population: "14,223,942",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Ontario.svg/1024px-Flag_of_Ontario.svg.png",
  },
  "Prince Edward Island": {
    age: 18,
    capital: "Charlottetown",
    largest_city: "Charlottetown",
    population: "154,331",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_Prince_Edward_Island.svg/1024px-Flag_of_Prince_Edward_Island.svg.png",
  },
  Quebec: {
    age: 18,
    capital: "Quebec City",
    largest_city: "Montreal",
    population: "8,501,833",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Quebec.svg/1024px-Flag_of_Quebec.svg.png",
  },
  Saskatchewan: {
    age: 18,
    capital: "Regina",
    largest_city: "Saskatoon",
    population: "1,132,505",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_Saskatchewan.svg/1024px-Flag_of_Saskatchewan.svg.png",
  },
  Yukon: {
    age: 19,
    capital: "Whitehorse",
    largest_city: "Whitehorse",
    population: "40,232",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_Yukon.svg/1024px-Flag_of_Yukon.svg.png",
  },
};

const majorityColors = (num) => {
  if (num === 18) return "blue";
  else if (num === 19) return "yellow";
  else return "red";
};

const start = () => {
  const svg = d3.select("svg");
  svg
    .selectAll("path")
    .on("click", (x) => {
      let target = x.target;
      d3.selectAll("fieldset span").each((_, id, arr) => {
        let flds = Array.from(arr);
        let val =
          ageOfMajority[target.getAttribute("title")][
            flds[id].getAttribute("id")
          ];
        if (val != undefined) flds[id].textContent = val;

        if (flds[id].getAttribute("id") == "province")
          flds[id].textContent = target.getAttribute("title");
      });

      d3.select("img").attr(
        "src",
        ageOfMajority[target.getAttribute("title")]["flag"]
      );
    })
    .style("fill", (_, id, arr) => {
      let province = Array.from(arr);
      let target = province[id];

      if (ageOfMajority[target.getAttribute("title")] != undefined)
        return majorityColors(
          ageOfMajority[target.getAttribute("title")]["age"]
        );
      else console.log("Cannot find province", target.getAttribute("title"));
    })
    .style("stroke", "black");
};

addEventListener("load", start);
