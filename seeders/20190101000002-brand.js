'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brand', [
      {
        iBrandID: 1,
        sBrandTitle: 'Alutech',
        iCountryID: 2,
        sBrandURI: 'alutech',
        iActive: 0,
        sBrandDesc: ''
      },
      {
        iBrandID: 2,
        sBrandTitle: 'KBE',
        iCountryID: 4,
        sBrandURI: 'kbe',
        iActive: 1,
        sBrandDesc: ''
      },
      {
        iBrandID: 3,
        sBrandTitle: 'Montblanc',
        iCountryID: 3,
        sBrandURI: 'montblanc',
        iActive: 0,
        sBrandDesc: ''
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brand', null, {});
  }
};
