const http = require("http");
const fs = require("fs");
const path = require("path");

const jsonData = [
  {
    id: 1,
    name: "Vishal Singh",
    age: 27,
  },
  {
    id: 2,
    name: "Test User",
    age: 28,
  },
];

const server = http.createServer((req, res) => {
  //res.write('Hello World')
  // res.writeHead(200, {'Content-Type': 'text/html'})
  //res.end('Hello World');
  //   if (req.url === "/") {
  //     //load home page
  //     try {
  //       fs.readFile(
  //         path.join(__dirname, "public", "home.html"),
  //         "utf-8",
  //         (err, data) => {
  //           if (err) {
  //             res.writeHead(500, { msg: "Something went wrong..." });
  //             throw new Error(err.message);
  //           }
  //           res.end(data);
  //         }
  //       );
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   } else if (req.url === "/about") {
  //     // load about page
  //     try {
  //       fs.readFile(
  //         path.join(__dirname, "public", "about.html"),
  //         "utf-8",
  //         (err, data) => {
  //           if (err) {
  //             res.writeHead(500, { msg: "Something went wrong..." });
  //             throw new Error(err.message);
  //           }

  //           res.writeHead(200, { "Content-Type": "text/html" });
  //           res.end(data);
  //         }
  //       );
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   } else if (req.url === "/api/list") {
  //     // return json
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(jsonData));
  //   }

  const filePath = path.join(
    __dirname,
    "public",
    req.url === "/"
      ? "home.html"
      : req.url === "/about"
      ? "about.html"
      : "404.html"
  );

  const extName = path.extname(filePath);

  let contentType = "";

  switch (extName) {
    case ".html":
      contentType = "text/html";
      break;

    case ".js":
      contentType = "text/javascript";
      break;

    case ".css":
      contentType = "text/css";
      break;

    case ".json":
      contentType = "application/json";
      break;

    case ".png":
      contentType = "image/png";
      break;

    case "jpg":
      contentType = "image/jpg";
      break;
    default:
      contentType = "";
  }

  fs.readFile(filePath, "utf-8", (err, fileData) => {
    if (err) {
      if (err.code === "ENOENT") {
        try {
          fs.readFile(
            path.join(__dirname, "public", "404.html"),
            "utf-8",
            (err, data) => {
              if (err) {
                res.writeHead(500, { msg: "Something went wrong..." });
                throw new Error(err.message);
              }

              res.end(data);
            }
          );
        } catch (e) {
          console.error(e);
        }
      }

      res.writeHead(500, { msg: "Something went wrong..." });
      throw new Error(err.message);
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(fileData);
  });
});

server.listen(3000, () => {
  console.log(`Server running on PORT 3000`);
});
