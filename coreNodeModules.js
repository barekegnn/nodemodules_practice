//  const myPath = require("path");
// const fileParse = myPath.parse(
//   "C:UsersAdminDesktopEVANGADIPHASE 3  NODE, EXPRESS, MYSQL  and REACT.JSPHASE 3 PRACTICENode Modules Pracrtice\nodemodules_practiceIIFE.js"
// );
// console.log(fileParse);

// const myOs = require("os");
// const myCpus = myOs.cpus();
// console.log(myCpus);

// const freeMemmory = myOs.freemem();
// console.log(freeMemmory);
// let freeMemmoryInGb = (freeMemmory) / (1024*1024*1024);
// console.log(freeMemmoryInGb);

// let totalMemmory = myOs.totalmem();
// let totalMemmoryInGb = totalMemmory / (1024 * 1024 * 1024);
// console.log(totalMemmoryInGb);

// let usedMemmory = totalMemmoryInGb - freeMemmoryInGb
// console.log(usedMemmory);
// let platform = myOs.platform();
// console.log(platform);

// const myFs = require("fs");
// //  let readFile = myFs.readFileSync("myFile.txt", "utf-8");
// //  console.log(readFile);

// try {
//   let dataWritten = myFs.writeFileSync(
//     "myFilet.xt",
//     "Resistance can be overcome by Pain, Love and Assistance"
//   );
//   console.log("File written Successfully!!");
// } catch (error) {
//   console.error("Error writing file:", err);
// }

// const myhttp = require("http");
// console.log(myhttp);

// STPES INVOLVED DURING EMMITING EVENTS IN NODE

// 1. IMPORT THE EVENTS Module
// 2. USE THE EVENT EMMITER CLASS (STORE IT ON A GIVEN VARIABLE );
// 3. DEFINE THE FUNCTION THE WOULD BE IMPLEMENTED WHEN THE EVENT HAPPENS;
// 4. USE THE EventEmitter.ON() METHOD TO ATTACH IT WITH FUNCTION(OR TO MAKE THE LISTENER WAIT FOR A GIVEN EVENT);
// 5. USE THE EventEmitter.EVENT() METHOD TO MAKE THE EVENT HAPPENS(to fire the event) AND THE FUNCTIONS EXCUTE ITS TASK ;

// const event = require('events');
// const EventEmitter = new event.EventEmitter();
// function arriveOnTime(){
//   console.log("Hey my Love, I'm coming!");
// }

// EventEmitter.on("Barekegn, I need help!", arriveOnTime);
// EventEmitter.emit("Barekegn, I need help!");

//  const myEvents = require("events");
// const { Module } = require("module")
// const { EventEmitter } = require("stream")
// // console.log(myEvents);
//  let Events = new myEvents.EventEmitter();
//  let checkEvent = function(){
//     console.log("woow the event is fired!!")
//  }

//  let makeItOn = Events.on("whats Up!", checkEvent);
//  let emmitIt = Events.emit("whats Up!");

// const http = require("http");
// const server = http.createServer(function (req, res) {
//   if (req.url === "/") {
//     res.write("this is home page");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("this is about page");
//     res.end();
//   } else {
//     res.write("page is not found");
//     res.end();
//   }
// });

// server.listen(7973, function () {
//   console.log("I'm listening to you");
// });


// **#SERVING STATIC PAGE USING HTTP SERVER**

// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const mime = require("mime-types");

// const server = http.createServer((req, res) => {
//   let filepath;

//   // Determine which file to serve based on the URL
//   if (req.url === "/" || req.url === "/index.html") {
//     filepath = path.join(__dirname, "apple-html-css-replica", "index.html");
//     // } else if (req.url === "/about.html") {
//     //   filepath = path.join(__dirname, "HTML", "about.html");
//     // } else if (req.url === "/contact.html") {
//     //   filepath = path.join(__dirname, "HTML", "contact.html");
//   } else {
//     filepath = path.join(null); // No matching file
//   }

//   // If filepath is null, send a 404 response
//   if (filepath === null) {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404: Page Not Found");
//     return; // Stop further execution
//   }

//   // Read and serve the file
//   fs.readFile(filepath, (err, data) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Internal Server Error");
//     } else {
//       const contentType = mime.lookup(filepath);
//       res.writeHead(200, { "Content-Type": contentType });
//       res.end(data);
//     }
//   });
// });

// // Define the port and start the server
// const port = 7973;
// server.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

//# SERVING APPLE'S STATIC PAGE USING MIME-TYPE.LOOKUP TO RENDERING THE CSS, IMG AND OTHER NON TEXT/HTML FILES

const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");

const server = http.createServer((req, res) => {
  let filepath;

  // Determine the file path based on the URL
  if (req.url === "/" || req.url === "/index.html") {
    filepath = path.join(__dirname, "apple-html-css-replica", "index.html");
  } else {
    // Handle other resources (CSS, images, etc.)
    filepath = path.join(__dirname, "apple-html-css-replica", req.url);
  }

  // Read and serve the file
  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" }); // Send 404 for missing files
      res.end("404: File Not Found");
    } else {
      const contentType = mime.lookup(filepath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

// Define the port and start the server
const port = 7973;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
