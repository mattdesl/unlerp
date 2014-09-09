var unlerp = require('./')

require('tape').test('should provide range', function(t) {
	t.equal(unlerp(0, 50, 25), 0.5)
	t.equal(unlerp(-100, 100, 0), 0.5)
	t.equal(unlerp(-100, 100, 100), 1)
	t.equal(unlerp(0, 1, 2), 2, 'does not clamp')
	t.end()
})
