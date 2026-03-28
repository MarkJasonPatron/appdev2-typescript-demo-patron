"use strict";
(() => {
    let userRole = 'admin';
    // ...
    function access(role) {
        // ...
    }
    function anotherAccess(role) {
        // ...
    }
    access('teacher');
    anotherAccess('admin');
    console.log(userRole);
});
