const Engineer = require('../lib/Engineer');

test('creates an Engineer object that inherits from Employee', () => {
    const engineer = new Engineer('Alex Godwin', 'alexj.godwin@gmail.com', 'DEF', 'vanessalane');

    // if engineer has these attrs, it's inheriting from Employee.
    expect(engineer.name).toBe('Alex Godwin');
    expect(engineer.email).toBe('alexj.godwin@gmail.com');
    expect(engineer.id).toBe('DEF');

    // engineer-specific attr
    expect(engineer.github).toBe('AlexJG501');
})

test('getRole() returns the role', () => {
    const engineer = new Engineer('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC');
    expect(engineer.getRole()).toBe('Engineer');
})

test('getGithub() returns the github username', () => {
    const engineer = new Engineer('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC', 'vanessalane');
    expect(engineer.getGithub()).toBe('Alex Godwin');
})