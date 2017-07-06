interface IEmployee{
    header:string,
    Employees:any[]; 
}
export class EmployeeCtrl implements IEmployee{
    header:string;
    Employees : any[];
    
    constructor() {
         this.header = "Employee List";
         this.Employees=[
             {
                 "EmpNo":101,
                 "EmpName":"MS",
                 "Salary":20000
             },
              {
                 "EmpNo":102,
                 "EmpName":"LS",
                 "Salary":18000
             },
              {
                 "EmpNo":103,
                 "EmpName":"TS",
                 "Salary":16000
             }
              
         ];
    }
}