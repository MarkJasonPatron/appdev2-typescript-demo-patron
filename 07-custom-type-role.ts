(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student' | 'friend'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let userRole: Role = 'admin'

    // ...

    function access(role: Role) {
        // ...
    }

    function anotherAccess(role: Role) {
        // ...
    }

    access('teacher')
    anotherAccess('friend')

    console.log(userRole)
})