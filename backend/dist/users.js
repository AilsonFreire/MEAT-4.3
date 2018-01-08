"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "amanda@gmail.com": new User('amanda@gmail.com', 'Fabio', '32145'),
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', '12347')
};
//# sourceMappingURL=users.js.map