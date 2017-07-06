'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;
const unique = require('./plugins/unique-through')

module.exports = db.define('album', {

  name: {
    type: DataTypes.STRING(1e4), // eslint-disable-line new-cap
    allowNull: false,
    set: function (val) {
      this.setDataValue('name', val.trim());
    }
  },
  artists: unique('artists').through('songs'),
  imageUrl: {
    type: DataTypes.VIRTUAL,
    get: function () {
      return `/api/albums/${this.id}/image`;
    }
  }
}, {

  scopes: {
    songIds: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('song'),
        attributes: ['id']
      }]
    }),
    populated: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('song').scope('defaultScope', 'populated')
      }]
    })
  },

  instanceMethods: {
    toJSON: function () {
      //Return a shallow clone so toJSON method of the nested models can be called recursively.
      return Object.assign({}, this.get());
    }
  }

});
