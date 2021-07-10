const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC');

    expect(employee.name).toBe('Alex Godwin');
    expect(employee.email).toBe('alexj.godwin@gmail.com');
    expect(employee.id).toBe('ABC');
})


test('getName() returns the name', () => {
    const employee = new Employee('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC');
    expect(employee.getName()).toBe('Alex Godwin');
})

test('getRole() returns the role', () => {
    const employee = new Employee('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC');
    expect(employee.getRole()).toBe('Employee');
})

test('getId() returns the ID', () => {
    const employee = new Employee('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC');
    expect(employee.getId()).toBe('ABC');
})