import _ from 'lodash'
describe('Use lodash suite', function() {
    it('fill array', function() {
        var array = [1, 2, 3]
        _.fill(array, 'a')
        console.log(array)
    });
});

