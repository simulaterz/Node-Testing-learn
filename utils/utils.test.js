const expect = require('expect');

const utils = require('./utils');


describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');

            // if (res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });
    });

    it('should async add two number', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });

    it('should square a number', () => {
        var res = utils.square(3);

        expect(res).toBe(9).toBeA('number');

        // if (res !== 9) {
        //     throw new Error(`Expected 9, but got ${res}`);
        // }
    });
});

it('should verify first and last names are set', () => {
    var user = {location: 'Thailand', age: 23};
    var res = utils.setName(user, 'Ronnakorn Suwanchatree');

   expect(res).toInclude({
       firstName: 'Ronnakorn',
       lastName: 'Suwanchatree'
   });
});

// it('should expect some values', () => {
//    // expect(12).toNotBe(11);
//    // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//    // expect('A').toBe('A');
//    // expect([2,3,4]).toInclude(2);
//    // expect([2,3,4]).toExclude(5);
//    //  expect({
//    //      name: 'Ronnakorn',
//    //      age: 23,
//    //      location: 'Thailand'
//    //  }).toInclude({
//    //      age: 23
//    //  });
//
//     expect({
//         name: 'Ronnakorn',
//         age: 23,
//         location: 'Thailand'
//     }).toExclude({
//         age: 21
//     });
//
// });