var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express is here! your express server is up" });
});

module.exports = router;

router.get("/techgeek/v1/getEmployeeDetails", function(req, res, next) {
  try {
    var empId = req.param("empId");
    //  var deptId = req.param('deptId');
    /*var query = url.parse(req.url,true).query;
                  console.log(query);
        var roleId = query.roleId;
        var deptId = query.deptId;*/
    console.log(empId);
    //console.log(deptId);
    req.getConnection(function(err, conn) {
      if (err) {
        console.error("SQL Connection error: ", err);
        return next(err);
      } else {
        conn.query(
          "select Emp_Id,Emp_Name,Role_Id from Employee where Emp_Id = ?",
          [empId],
          function(err, rows, fields) {
            if (err) {
              console.error("SQL error: ", err);
              return next(err);
            }
            var resEmp = [];
            for (var empIndex in rows) {
              var empObj = rows[empIndex];
              resEmp.push(empObj);
            }
            res.json(resEmp);
          }
        );
      }
    });
  } catch (ex) {
    console.error("Internal error:" + ex);
    return next(ex);
  }
});
