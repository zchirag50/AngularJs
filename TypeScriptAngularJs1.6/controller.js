define(["require", "exports"], function (require, exports) {
    var EmployeeCtrl = (function () {
        function EmployeeCtrl() {
            this.header = "Employee List";
            this.Employees = [
                {
                    "EmpNo": 101,
                    "EmpName": "MS",
                    "Salary": 20000
                },
                {
                    "EmpNo": 102,
                    "EmpName": "LS",
                    "Salary": 18000
                },
                {
                    "EmpNo": 103,
                    "EmpName": "TS",
                    "Salary": 16000
                }
            ];
        }
        return EmployeeCtrl;
    })();
    exports.EmployeeCtrl = EmployeeCtrl;
});
//# sourceMappingURL=controller.js.map