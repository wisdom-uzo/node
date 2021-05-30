const os = require('os')


// info about current user
const user = os.userInfo()
  
console.log(user)
console.log(`the system Uptime is ${os.uptime()}`)

const currentOS = {
    user : os.userInfo(),
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    upTime: os.uptime(),
    version: os.version()
    
}
console.log(currentOS)