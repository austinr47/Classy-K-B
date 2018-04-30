const propKitchenAPI = require('../../API/data-kitchens.json')
const propBathAPI = require('../../API/data-baths.json')
const propDoorAPI = require('../../API/data-doors.json')
const propCounterAPI = require('../../API/data-countertops.json')
const propHomeAPI = require('../../API/data-homepage.json')
const propQuartzAPI = require('../../API/data-quartz.json')

module.exports = {
  quartz: (req, res, nex) => {
    res.status(200).send(propQuartzAPI[0])
  },

  landing: (req, res, next) => {
    let slider = propHomeAPI[0]
    res.status(200).send(slider)
  },

  countertops: (req, res) => {
    res.status(200).send(propCounterAPI[0])
  },

  doors: (req, res) => {
    res.status(200).send(propDoorAPI[0])
  },
  
  baths: (req, res) => {
    res.status(200).send(propBathAPI[0])
  },
  
  kitchens: (req, res) => {
    res.status(200).send(propKitchenAPI[0])
  }
  
}