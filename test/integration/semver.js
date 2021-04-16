var expect = require('expect.js');
describe('implementation', function() {
  it('tests the semver implementation', function() {
    const semver = require('../../lib/semver');
    expect(semver.satisfies('1.0.1', '^1.0.0')).to.be(true);
    expect(semver.satisfies('2.0.0', '^1.0.0')).to.be(false);
    expect(semver.satisfies('1.0.0-prerelease-1', '^1.0.0')).to.be(false);
    expect(semver.coercedSatisfies('1.0.0-prerelease-1', '^1.0.0')).to.be(true);
    expect(semver.coercedSatisfies('2.0.0-prerelease-1', '^1.0.0')).to.be(false);
    expect(semver.satisfies('1.0.1', '*')).to.be(true);
    expect(semver.coercedSatisfies('2.0.0-prerelease-1', '*')).to.be(true);
    expect(semver.satisfies('1.0.1', '*')).to.be(true);
    expect(semver.coercedSatisfies('1.0.3-smc-842-1', '^1.0.0')).to.be(true);
    expect(semver.coercedSatisfies('16.1.4-prerelease-9', '16.1.4-prerelease-9')).to.be(true);
  });
});
