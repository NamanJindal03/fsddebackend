const data = {
    employees: require('../data/employees.json'),
    setEmployees: function(data){this.employees = data}
}
function getAllEmployees(req, res){
    return res.status(200).json(data.employees)
}
function createEmployee(req, res){
    const newEmployee = {
        empId: data.employees?.length ? data.employees[data.employees.length -1].empId +1 : 1,
        name: req.body.name,
        age: req.body.age
    }
    if(!newEmployee.name || !newEmployee.age){
        return res.status(400).json({
            status: 'failure',
            message: 'name and age both are required'
        })
    }
    data.setEmployees([...data.employees, newEmployee]);
    res.status(201).json(data.employees);
    // return res.status(200).json(data.employees)
}

function updateEmployee(req, res){
    const employee = data.employees.find(entry => req.params.id == entry.empId)
    if(!employee){
        return res.status(400).json({
            status: 'failure',
            message: 'employee not found'
        })
    }
    if(req.body.name){
        employee.name = req.body.name;
    }
    if(req.body.age) {
        employee.age = req.body.age;
    }
    const filteredArrray = data.employees.filter(emp => emp.empId != req.params.id);
    data.setEmployees([...filteredArrray, employee]);
    res.status(200).json(data.employees)
}

function deleteEmployee(req, res){
    const employee = data.employees.find(entry => req.params.id == entry.empId)
    if(!employee){
        return res.status(400).json({
            status: 'failure',
            message: 'employee not found'
        })
    }
    const filteredArrray = data.employees.filter(emp => emp.empId != req.params.id);
    data.setEmployees([...filteredArrray]);
    res.status(200).json(data.employees)

}

function getEmployee(req, res){
    console.log(data.employees);
    console.log(req.params.id)
    const employee = data.employees.find(entry => req.params.id == entry.empId)
    console.log(employee)
    if(!employee){
        return res.status(400).json({
            status: 'failure',
            message: 'employee not found'
        })
    }
    res.json(employee)
}
module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}