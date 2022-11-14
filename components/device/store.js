const Model = require('./model');

function addDevice(device){
  const myDevice = new Model(device)
  return myDevice.save() 
}

// getting devices for user
async function getDeviceValues(deviceUser){
  const temperatures = []
  const tempDates = []
  const tempMin = []
  const tempMax = []
  const devices = await Model.find(
    { name: deviceUser.name, 
      id: deviceUser.id
    }
    )
    devices.forEach(device => {
      const dateString = device.date.toString()
      const dateReduc = dateString.substring(4,10)+ " " + dateString.substring(16,21)
      temperatures.push(device.tempInt)
      // tempDates.push(dateString)
      tempDates.push(dateReduc)
      tempMin.push(device.setPoint-device.histL)
      tempMax.push(device.setPoint+device.histH)
    });
    // console.log(temperatures)
    // console.log(tempDates)       
  return {temperatures, tempDates, tempMin, tempMax}
}

async function getDeviceById(device){
  const devicebyid = await Model.find(device)
  return devicebyid
}

async function getDeviceStatusById(device){
  const statusbyid = await Model.findOne(device)
  return statusbyid
}

async function deleteDevice(device){
  const deviceDeleted = await Model.deleteOne(device)
  return deviceDeleted
}

async function deleteAll(){
  const deviceDeleted = await Model.remove()
  return deviceDeleted
}

async function getDates(dates){
  const temperatures = []
  const tempDates = []
  const tempMin = []
  const tempMax = []
  const start = new Date(dates.start)
  const end = new Date(dates.end)
  console.log("start end")
  console.log(start, end)
  const deviceDates = await Model.find(
    {enterprise: dates.enterprise,name: dates.name, 
      id: dates.id, date: {$gte: start, $lte: end }}
  )
  deviceDates.forEach(device => {
    const dateString = device.date.toLocalString()
    temperatures.push(device.tempInt)
    tempDates.push(dateString)
    tempMin.push(device.setPoint-device.histL)
    tempMax.push(device.setPoint+device.histH)
  });
  // console.log(temperatures)
  // console.log(tempDates)       
return {temperatures, tempDates, tempMin, tempMax}
}

async function getLastDate(date){
  const tempDates =[]
  const lastD = await Model.find({
    enterprise: date.enterprise,
    name: date.name,
    id: date.id
  })

  lastD.forEach(device =>{
    tempDates.push(device.date)
  })
  const final = tempDates.slice(-1).pop()
  return final
}

async function refreshMin(refresh){
  console.log(refresh)
  // const dateMin = refresh.date.toISODate()
  // console.log(dateMin)
  const refreshData = await Model.updateOne(
    { enterprise: refresh.enterprise, 
      name: refresh.name,
      id: refresh.id,
      date: refresh.date
    },
      {tempMin: refresh.setPoint,
        // date: new Date
      }
  )
  console.log(refreshData)
  return refreshData
}

async function refreshMax(refresh){
  console.log(refresh)
  // const dateMin = refresh.date.toISODate()
  // console.log(dateMin)
  const refreshData = await Model.updateOne(
    { enterprise: refresh.enterprise, 
      name: refresh.name,
      id: refresh.id,
      date: refresh.date
    },
      {tempMax: refresh.setPoint,
        // date: new Date
      }
  )
  console.log(refreshData)
  return refreshData
}

// async function uptConfig(configurations){
//   const deviceConfig = await Model.findOneAndUpdate(
//     {enterprise: configurations.enterprise,  { setPoint: configurations.setPoint}}
//   )
// }

module.exports = {
  addDevice,
  deleteDevice,
  deleteAll,
  getDeviceValues,
  getDeviceById,
  getDeviceStatusById,
  getDates,
  getLastDate,
  refreshMin,
  refreshMax
}
