


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


module.exports.htmlResponse = htmlResponse;