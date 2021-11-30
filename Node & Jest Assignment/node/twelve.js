var os = require("os");

console.log("Architecture: "+ os.arch());
console.log("Number of CPUS "+JSON.stringify(os.cpus()));
console.log("Free Memory "+os.freemem() + " bytes");
console.log("Home Directory "+os.homedir());
console.log("Network Interfaces "+ JSON.stringify(os.networkInterfaces()));
console.log("Platform "+os.platform());
console.log("Release of OS"+ os.release());
console.log("Temporary Directory: "+ os.tmpdir());
console.log("Total Memory: "+os.totalmem()+" bytes");
console.log("Uptime: "+os.uptime()+" seconds");
console.log("User Info: "+JSON.stringify(os.userInfo()));
console.log("Operating system name"+ os.type());
