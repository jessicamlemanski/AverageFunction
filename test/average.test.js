/**
 *	average.test.js
 *	Author: Jessica Lemanski
 *	Date: 4/9/22
 * 	Description: This file contains unit tests for a function to average numbers. 
*/


const expect = require('chai').expect;
var average=require('../averageFunction.js');

/*
 * Test incorrect number of inputs
*/
describe('Average Function: Invalid Number of Arguments', () => {
 it('Average()     -- Expect "Error: Arguments needed in average function"', () => {
	expect(function() {
        average()
      }).to.throw(TypeError, 'Error: 2 or more parameters required')
    });
 it('Average(2)    -- Expect "Error: Arguments needed in average function"', () => {
	expect(function() {
        average(2)
      }).to.throw(TypeError, 'Error: 2 or more parameters required')
    });
 it('Average(\'3\')  -- Expect "Error: Arguments needed in average function"', () => {
	expect(function() {
        average('3')
      }).to.throw(TypeError, 'Error: 2 or more parameters required')
    });
 it('Average("123")-- Expect "Error: Arguments needed in average function"', () => {
	expect(function() {
        average("123")
      }).to.throw(TypeError, 'Error: 2 or more parameters required')
    });
});

/*
 * Test 2 parameters of type number
*/
describe('Average Function: 2 numbers', () => {
 it('Average(2,4)      -- Expect 3', () => {
        expect(average(2,4)).to.equal(3);
    });
 it('Average(100,150)  -- Expect 125', () => {
        expect(average(100,150)).to.equal(125);
    });
 it('Average(0,0)      -- Expect 0', () => {
        expect(average(0,0)).to.equal(0);
    });
 it('Average(-2,-4)    -- Expect -3', () => {
        expect(average(-2,-4)).to.equal(-3);
    });
 it('Average(-100,200) -- Expect 50', () => {
        expect(average(-100,200)).to.equal(50);
    });
 it('Average(30,-5)    -- Expect 12.5', () => {
        expect(average(30,-5)).to.equal(12.5);
    });
});

/*
 * Test 2 parameters of type string and character
*/
describe('Average Function: 2 String/Char', () => {
 it('Average(\'2\',\'4\')        -- Expect 3', () => {
        expect(average('2','4')).to.equal(3);
    });
 it('Average(\'5.87\',\'199.34\')-- Expect 102.605', () => {
        expect(average('5.87','199.34')).to.equal(102.605);
    });
 it('Average("2","4")        -- Expect 3', () => {
        expect(average("2","4")).to.equal(3);
    });
 it('Average("5.87","199.34")-- Expect 102.605', () => {
        expect(average("5.87","199.34")).to.equal(102.605);
    });
 it('Average("-2","-45")     -- Expect -23.5', () => {
        expect(average("-2","-45")).to.equal(-23.5);
    });
 it('Average("1.33","-34.2") -- Expect -16.435', () => {
        expect(average("1.33","-34.2")).to.be.closeTo(-16.435,0.0001);
    });
});

/*
 * Test multiple parameteres with all accepted inputs. (number, string)
*/
describe('Average Function: Multi Input', () => {
 it('Average("2",4,\'9\')                   -- Expect 5', () => {
        expect(average("2",4,'9')).to.equal(5);
    });
 it('Average("-5.87",9.1,"24",\'-3\')       -- Expect 6.0575', () => {
        expect(average("-5.87",9.1,"24",'-3')).to.equal(6.0575);
    });
 it('Average("1",2,"3",4,\'5\',6,7,8,"9",10)-- Expect 5.5', () => {
        expect(average("1",2,"3",4,'5',6,7,8,"9",10)).to.equal(5.5);
    });
 it('Average(2,-34.2,"7","-0.5")          -- Expect -6.425', () => {
        expect(average(2,-34.2,"7","-0.5")).to.be.closeTo(-6.425,0.0001);
    });
});

/*
 * Test non number inputs
*/
describe('Average Function: Invalid Input', () => {
 it('Average("hello","world")-- Expect "Error: Non-Number Parameter"', () => {
	expect(function() {
        	average("hello","world")
      		}).to.throw(TypeError, 'Error: Non-Number Parameter')
    });
 it('Average("123Hello",1)   -- Expect "Error: Non-Number Parameter"', () => {
	expect(function() {
        	average("123Hello",1)
      		}).to.throw(TypeError, 'Error: Non-Number Parameter')
    });
 it('Average("1",3,"Invalid")-- Expect "Error: Non-Number Parameter"', () => {
	expect(function() {
        	average("1",3,"Invalid")
      		}).to.throw(TypeError, 'Error: Non-Number Parameter')
    });


});