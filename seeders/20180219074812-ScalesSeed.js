'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Scales', [
              { name: "Basic HTML Boilerplate",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { name: "HTML From Memory",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { name: "Indentation",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { name: "Templating Engines",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { name: "Advanced HTML Tags",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
              { name: "Programmatic HTML",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10005 },

              { name: "Selectors",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
              { name: "Basic Properties and Styles",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10007 },
              { name: "Simple Attributes",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
              { name: "Boilerplate CSS Frameworks",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10009 },
              { name: "Float and Flexbox",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10010 },
              { name: "Mobile Responsiveness",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10011 },
              { name: "Transitions and Animations",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10012 },
              { name: "Creativity",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10013 },
              { name: "Build Systems and Scripting",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10014 },

              { name: "Vanilla JS and jQuery",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10015 },
              { name: "Concepts in JS",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10016 },
              { name: "External JS Libraries",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10017 },
              { name: "Debugging",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10018 },
              { name: "Array Methods",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10019 },
              { name: "The Math Object",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10020 },
              { name: "setInterval and setTimeout",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10021 },
              { name: "Build Systems",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10022 },
              { name: "ES6 and Beyond",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10023 },
              { name: "Single Page Applications",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10024 },
              { name: "Projects",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10025 },
              { name: "Building Frameworks",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10026 },

              { name: "Server Quality",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10027 },
              { name: "Understanding of MVC",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10028 },
              { name: "Querying",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10029 },
              { name: "External APIs",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10030 },
              { name: "Fully RESTful API",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10031 },
              { name: "Authentication",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10032 },
              { name: "Scrapes",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10033 },
              { name: "Websockets",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10034 },
              { name: "Third Party Authentication",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10035 },
              { name: "JWT Authentication",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10036 },
              { name: "Connectivity to Smart Devices",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10037 },

          ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Scales', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
