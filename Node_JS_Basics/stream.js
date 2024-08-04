const fs = require('fs');

const readstream = fs.createReadStream('./docs/blog2.txt', );
const writestream = fs.createWriteStream('./docs/blog3.txt')


// readstream.on('data', (data)=>{   
//     console.log('new chunk'); 
//      console.log(data.toString());

//      writestream.write('/n new chunk /n')
//      writestream.write(data);
// })

//piping

readstream.pipe(writestream);