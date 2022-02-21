const mssql = require("mssql");
const config = require("../config/db");

async function getProjects(req, res) {
  try {
    const pool = await mssql.connect(config);

    const products = await pool.request().query("exec getProjects");
    return res.json(products.recordset);
  } catch (error) {
    console.log(error);
  }
}

async function getProject(req, res) {
  try {
    const pool = await mssql.connect(config);

    const project = await pool
      .request()
      .query(`exec getProject @id = ${req.params.id}`);
    return res.json(project.recordset);
  } catch (error) {
    console.log(error);
  }
}

async function addProject(req, res) {
  try {
    const pool = await mssql.connect(config);

    await pool
      .request()
      .query(
        `exec addProject @project_name = '${req.body.name}', @project_desc = '${req.body.desc}'`
      );
    return res.json({
      Msg: "Project added!",
    });
  } catch (error) {
    console.log(error);
  }
}

async function updateProject(req, res) {
  try {
    const pool = await mssql.connect(config);

    await pool
      .request()
      .query(
        `exec updateProject @id = ${req.body.id}, @name ='${req.body.name}', @desc = '${req.body.desc}'`
      );
    return res.json({
      Msg: "Project updated!",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProjects,
  getProject,
  addProject,
  updateProject,
};
