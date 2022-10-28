class api {
    table: string;
    constructor(table: string) {
        this.table= table;
    }

    insertData (req: any, res: any, table : string) {
        table = this.table;
        if (!req.body?.content) {
            res.sendStatus(400);
            return;
        }
        const dataColumn = Object.keys(req.body.content);
        const inputValues = Object.values(req.body.content);
        connection.query(
            `insert into ${table} \
            (${dataColumn.join(", ")}) \
            values (?) `,
            [inputValues],
            (err: any, rows: any) => {
                if (err) {
                    throw err;
                }
                res.sendStatus(200);
            }
        );
    }
        
    getAllData (req: any, res: any, table: string) {
        table = this.table;
        connection.query(`select * from ${table} `, (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
        
    deleteAllData (req: any, res: any, table: string) {
        table = this.table;
        connection.query(`delete * from ${table} `, (err: any, rows: any) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    }
        
    modifyDataById (req: any, res: any, table: string) {
        table = this.table;
        if (!req.body?.content) {
            res.sendStatus(400);
            return;
        }
        let updateValues: string = "";
        let updateArray: string[] = [];
        for (let key in req.body.content) {
            updateArray.push(`${key} = '${req.body.content[key]}' `);
        }
        updateValues = updateArray.join(" , ");
        connection.query(
            `update ${table} set ${updateValues} where id = ?`,
            [req.params.id],
            (err: any, rows: any) => {
                if (err) {
                    throw err;
                }
                res.send(rows);
            }
        );
    }
        
    deleteDataById (req: any, res: any, table: string) {
        table = this.table;
        connection.query(
            `delete * from ${table} where id = ? `,
            [req.params.id],
            (err: any, rows: any) => {
                if (err) {
                    throw err;
                }
                res.send(rows);
            }
        );
    }
        
    getDataById (req: any, res: any, table: string) {
        table = this.table;
        connection.query(
            `select * from ${table} where id = ? `,
            [req.params.id],
            (err: any, rows: any) => {
                if (err) {
                    throw err;
                }
                res.send(rows);
            }
        );
    }
        
    getYearData (req: any, res: any, table: string) {
        table = this.table;
        connection.query(
            `select * from ${table} where payYear = ? `,
            [req.params.payyear],
            (err: any, rows: any) => {
                if (err) {
                    throw err;
                }
                res.send(rows);
            }
        );
    }
        
    getMonthData (req: any, res: any, table: string) {
        table = this.table;
        if (!req.body?.payMonth) {
            res.sendStatus(400);
            return;
        }
        connection.query(
            `select * from ${table} where payMonth = ? `,
            [req.params.paymonth],
            (err: any, rows: any) => {
                if (err) {
                    throw err;
                }
                res.send(rows);
            }
        );
    }
        
    getDayData (req: any, res: any, table: string) {
        table = this.table;
        connection.query(
            `select * from ${table} where payDay = ? `,
            [req.params.payday],
            (err: any, rows: any) => {
                if (err) {
                    throw err;
                }
                res.send(rows);
            }
        );
    }
    
}

module.exports = api;