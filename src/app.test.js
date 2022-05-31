const chai = require('chai');
const expect = chai.expect;
// const chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// chai.use(sinonChai);

var test = require('./test.js');

describe('test', () => {
    context('topKFrequent', () => {
        it('case1', (done) => {
            let obj = {
                name: 'John',
                lastName: 'Bliss',
                city: 'Florida',
            }
            expect(test.topKFrequent(obj, 'delete', 'lastName', '').to.be.true)
        });
        
    });
});

