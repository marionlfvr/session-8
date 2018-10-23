var app = new Vue({
  el: '#app',
  data: {
    firstName: "Marion",
    lastName: "Lefèvre",
    description: "Je suis étudiante en journalisme et en affaires internationales à Sciences Po.",
    photo: "xxx",
    twitter: "marion_lfvr",
    github: "marionlefevre",
    mail: "marion.lefevre@sciencespo.fr",
    experiences: [{
      dateBegin: "Août 2018",
      dateEnd: "Aujourd'hui",
      name: "Al Jazeera",
      title: "Pigiste recherche",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Été 2018",
      dateEnd: false,
      name: "L'Orient-Le Jour",
      title: "Reporter",
      description: false
    }, {
      dateBegin: "4 juin 2018",
      dateEnd: "15 juin 2018",
      name: "France Inter",
      title: "Stagiaire au service International",
      description: false
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "2019",
      name: "Master Journalisme et Affaires internationales",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2014",
      dateEnd: "2017",
      name: "Bachelor of Arts",
      university: "Sciences Po Paris"
    }],
    languages: ["Anglais, Espagnol, Arabe"],
    skills: ["Excel"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})