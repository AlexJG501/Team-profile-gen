const Intern = require('../lib/Intern');

test('creates an Intern object that inherits from Employee', () => {
    const intern = new Intern('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC', 'UCF');

    // if intern has these attrs, it's inheriting from Employee.
    expect(intern.name).toBe('Alex Godwin');
    expect(intern.email).toBe('alexj.godwin@gmail.com');
    expect(intern.id).toBe('ABC');

    // intern-specific attr
    expect(intern.school).toBe('UCF');
})

test('getRole() returns the role', () => {
    const intern = new Intern('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC', 'UCF');
    expect(intern.getRole()).toBe('Intern');
})

test('getSchool() returns the school', () => {
    const intern = new Intern('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC', 'UCF');
    expect(intern.getSchool()).toBe('UCF');
})