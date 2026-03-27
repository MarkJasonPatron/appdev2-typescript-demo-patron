(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
        // Friend,
        Friend = 'Friend',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.Friend;
})