const mssql = require("mssql");
const crypto = require("crypto");
const config = require("../config/db");

async function getStudents(req, res) {
  try {
    const pool = await mssql.connect(config);

    const products = await pool.request().query("exec getStudents");
    return res.json(products.recordset);
  } catch (error) {
    console.log(error);
  }
}

async function getStudent(req, res) {
  try {
    const pool = await mssql.connect(config);

    const products = await pool
      .request()
      .query(`exec getStudent @id = ${req.params.id}`);
    return res.json(products.recordset);
  } catch (error) {
    console.log(error);
  }
}

async function addStudent(req, res) {
  try {
    const pool = await mssql.connect(config);
    const password = req.body.password;
    const hash = crypto.createHash("sha256").update(password).digest("base64");

    await pool
      .request()
      .query(
        `exec addStudent @fname = '${req.body.fname}', @sname = '${req.body.sname}', @lname = '${req.body.lname}', @password = '${hash}'`
      );
    return res.json({
      Msg: "Student added!",
    });
  } catch (error) {
    console.log(error);
  }
}

async function updateStudent(req, res) {
  try {
    const pool = await mssql.connect(config);
    const password = req.body.password;
    const hash = crypto.createHash("sha256").update(password).digest("base64");

    await pool
      .request()
      .query(
        `exec updateStudent @id = ${req.body.id}, @fname = '${req.body.fname}', @sname = '${req.body.sname}', @lname = '${req.body.lname}', @password = '${hash}'`
      );
    return res.json({
      Msg: "Student updated!",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getStudents,
  updateStudent,
  getStudent,
  addStudent,
};
