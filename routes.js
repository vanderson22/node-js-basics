
const fs = require('fs');

let username = '';
const handleRequest = (req, resp) => {

    const url = req.url
    const method = req.method;
    

    const htmlMessage = `<html> 
                            <h1> Welcome to assignment page! </h1>
                             <br /> 
                             <label>insert your username: </label> 
                             <form action = "/create-user" method="POST" > 
                                <input type="text" name='username' placeholder="username"> 
                                <button type="submit">Send</button>
                             </form>

                              Username: ${username}
                          <html>`
 
    if (url === '/') {

        resp.setHeader('Content-Type', 'text/html');
        resp.setHeader('Charset', 'utf-8');

        resp.write(htmlMessage);

        return resp.end();
    }
    if (url === '/users' && method === 'GET') {

           const htmlResponse = `<!DOCTYPE html>
           <html lang="en">
           <head>
               <meta charset="UTF-8">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <title>User Table</title>
               <style>
                   table {
                       width: 100%;
                       border-collapse: collapse;
                   }
                   th, td {
                       padding: 10px;
                       border: 1px solid #ddd;
                       text-align: left;
                   }
                   th {
                       background-color: #f4f4f4;
                   }
               </style>
           </head>
           <body>
               <h1>Users</h1>
               <table>
                   <thead>
                       <tr>
                           <th>Username</th>
                           <th>Age</th>
                           <th>Country</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>john_doe</td>
                           <td>25</td>
                           <td>USA</td>
                       </tr>
                       <tr>
                           <td>jane_smith</td>
                           <td>30</td>
                           <td>Canada</td>
                       </tr>
                       <tr>
                           <td>mario_rossi</td>
                           <td>28</td>
                           <td>Italy</td>
                       </tr>
                       <tr>
                           <td>li_wei</td>
                           <td>22</td>
                           <td>China</td>
                       </tr>
                       <tr>
                           <td>ana_garcia</td>
                           <td>27</td>
                           <td>Spain</td>
                       </tr>
                   </tbody>
               </table>
           </body>
           </html>
           `

        resp.setHeader('Content-Type', 'text/html');
        resp.setHeader('Charset', 'utf-8');

        resp.write(htmlResponse);

        return resp.end();
    }

    if (url === '/create-user' && method === 'POST') {

        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);

        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            username = parsedBody.split('=')[1];
            console.log(`username is : ${parsedBody.split('=')[1]}`);

            resp.statusCode = 302;
            resp.setHeader('Location', '/');

            return resp.end();
        });

    }

    resp.setHeader('Content-Type', 'text/html')
    resp.setHeader('Charset', 'utf-8')
    resp.write('<html><h3> Page not found! </h3><html>')
    return resp.end();
}



module.exports = {
    handle: handleRequest

}