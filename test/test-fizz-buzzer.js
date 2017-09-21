const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	//normal case
	it('should return \'fizz-buzz\', \'buzz\', or \'fizz\' if input is divisible by 15, 5, or 3 (respectively), or return the input number if not divisible by 15, 5, or 3', function() {
		const normalCases = [
			{a: 45, expected: 'fizz-buzz'},
			{a: 25, expected: 'buzz'},
			{a: 18, expected: 'fizz'},
			{a: 2, expected: 2},
			{a: 29, expected: 29},
			{a: 53, expected: 53}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.a);
			answer.should.equal(input.expected);
		});
	});

	it('should raise error if args not numbers', function() {
		const badInputs = ['p', '7', false];
		badInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	}); 
});