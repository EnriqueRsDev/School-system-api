/**
    This file contains the basic configuration to run the app.
    Also here is the basic db connection.
*/

import app from "./app.js";
import sequelize from "../db/dbConfig.js";

// import './models/teacher.js';
// import './models/Course.js';
// import './models/Admin.js';
// import './models/Student.js';
// import './models/Grades.js';

const port = 3000;

const main = async () => {
    try {
        await sequelize.sync({ force: false })
        console.log('Db connection is ready!');

        app.listen(port, () => {
            console.log(`Api is served on port: ${port}`);
        })
    } catch (error) {
        console.log({ message: error.message });
    }
}

main()