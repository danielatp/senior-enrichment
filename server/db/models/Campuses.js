const db = require('../index');
const Sequelize = require('sequelize');

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campuses;


// io = https://www.solarsystemquick.com/jupiter_moon_io.jpg
// europa=https://cdn.inquisitr.com/wp-content/uploads/2016/12/JupitersMoonEuropaShownReflectingLight.jpg
// ganymede=http://mediad.publicbroadcasting.net/p/kwmu/files/styles/x_large/public/201504/Ganymede.NPR_.jpg
// callisto=https://i.pinimg.com/originals/ca/ba/7c/caba7cfe734cb61f1c3b29edb54fc537.jpg
