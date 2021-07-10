const Manager = require('../lib/Manager');

test('creates a Manager object from Employee', () => {
    const manager = new Manager('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC', 7);

    expect(manager.name).toBe('Alex Godwin');
    expect(manager.email).toBe('alexj.godwin@gmail.com');
    expect(manager.id).toBe('ABC');
    expect(manager.office).toBe(7);
})

test('getRole() returns the role', () => {
    const manager = new Manager('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC', 7);
    expect(manager.getRole()).toBe('Manager');
})

test('getOffice() returns the office number', () => {
    const manager = new Manager('Alex Godwin', 'alexj.godwin@gmail.com', 'ABC', 7);
    expect(manager.getOffice()).toBe(7);
})