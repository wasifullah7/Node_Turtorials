const fs = require('fs');

// reading files 

// fs.readFile('./docs/blog1.text', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// console.log('last lines');

// writing the files

// fs.writeFile('./docs/blog1.text', 'hello world this is me wasaf', ()=>{
// console.log('file was written')
// })

//directories

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets' ,(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file is created');
//     })
// }
// else{
//     fs.rmdir('./assets' , (err)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log('folder deleteed');
//     })
// }

// deleteing files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
  if(err){
    console.log(err);
  }
  console.log('file deleted');
    })

}