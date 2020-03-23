const dns = require('dns')

dns.lookup('baidu.com', {all: true}, (err, address, family) => {
    console.log('地址: %j 地址族: IPv%s', address, family);
  
})

dns.resolve('baidu.com',  (err, records ) => {
    console.log(err, records);
  
})

dns.reverse('220.181.38.148', (err, hostnames) => {
    console.log(err, hostnames)
})

