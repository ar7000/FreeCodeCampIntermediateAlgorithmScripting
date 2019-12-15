var Person = function (firstAndLast) {
    
    let splitName = firstAndLast.split(' ');

    this.getFullName = function () {
        return splitName.join(' ');
    };

    this.getFirstName = function () {
        return splitName[0];
    };

    this.getLastName = function () {
        return splitName[1];
    }

    this.setFirstName = function (first) {
        splitName[0] = first;
    }

    this.setLastName = function (last) {
        splitName[1] = last;
    }

    this.setFullName = function (full) {
        splitName = full.split(' ');
    }

};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());