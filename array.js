let data = [
  {
    name: "Sharmila",
    experience: 5,
    technologyKnown: ["javascript", "html"],
    place: "chennai",
    company: "TCS",
  },
  {
    name: "Nithesh",
    experience: 4,
    technologyKnown: ["javascript", "bootstrap", "html"],
    place: "tanjore",
    company: "MP",
  },
  {
    name: "Arvinth",
    experience: 3,
    technologyKnown: ["javascript", "node", "firebase", "html"],
    place: "vilupuram",
    company: "MP",
  },
  {
    name: "Sivakumar",
    experience: 0.2,
    technologyKnown: ["node", "javascript", "html", "css"],
    place: "chennai",
    company: "HCL",
  },
  {
    name: "Saravana Kumar",
    experience: 10,
    technologyKnown: [
      "node",
      "firebase",
      "javascript",
      "bootstrap",
      "oAuth",
      "jQuery",
      "React",
      "Angular",
      "html",
    ],
    place: "chennai",
    company: "Mind Tree",
  },
];



//get me the list of technologies that have been the same for all ?

let whatIsCommon = data.reduce((extraVariable, e, index) => {
    debugger
    let toReturnWithoutDuplicates = [];
    extraVariable = [...extraVariable, ...e.technologyKnown];

    if (index == data.length - 1) {
      extraVariable.map((m) => {
        if (!toReturnWithoutDuplicates.includes(m)) {
          toReturnWithoutDuplicates.push(m);
        }
      });
      return toReturnWithoutDuplicates;
    }else {
      return extraVariable;
    }
  }, []).reduce((extraVariable1, value, index ,resultFromDuplicatesRemoved) => {
      debugger
      let toFinal = [];
      data.map((l) => {
        if (l.technologyKnown.includes(value)) {
          extraVariable1[value] = extraVariable1[value] ? extraVariable1[value] + 1: 1;
        }
      });

      if (resultFromDuplicatesRemoved.length - 1 == index) {
        Object.keys(extraVariable1).map((h) => {
          if (extraVariable1[h] == data.length) {
            toFinal.push(h);
          }
        });
        return toFinal;
      } else {
        return extraVariable1;
      }
    },{}
  );
  
  
  
