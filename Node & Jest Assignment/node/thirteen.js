var Dns = require("dns");
const {hostname} = require("os");

Dns.lookup('www.google.co.in',(err,address, family)=>
{
    console.log("Address: "+address);
    console.log("Family: "+family);
})

Dns.resolve4('www.google.com',(err,addresses)=>{
    if(err) throw err;
    console.log("All the IP Address of www.google.com"+ JSON.stringify(addresses));

    addresses.forEach((a)=>{
        Dns.resolve4(a,(err,hostname)=>{
            if(err) throw err;
            console.log(`IP Address: ${a} Hostname: "+${hostname}`);
        })
    })

})