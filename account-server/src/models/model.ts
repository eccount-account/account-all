// export const modelConnection = require("../config/db.js");
const modelConnection = require("../config/db.js");
module.exports = modelConnection;

// class Model {
//     connection: any;
//     constructor() {
//         this.connection = modelConnection;
//     }

//     insertToDB(table: string, dataColumn: string[], inputValues: string[]) {
//         connection.query(`insert into ${table} \
//             (${dataColumn.join(", ")}) \
//             values (?) `, [inputValues], (err: any, rows: any) => {
//             if (err) {
//                 throw err;
//             }
//         });
//     }
    
// }

// module.exports = Model;
