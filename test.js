import chai from 'chai'
import bouncingBall from './index'

    chai.should();

  describe('Testing...', function() {
    it('gbouncingBall', function() {
      bouncingBall(30, 0.66, 1.5).should.equal(15);
      bouncingBall(3, 0.66, 1.5).should.equal(3);
      bouncingBall(2, 0.66, 1.5).should.equal(1);
      bouncingBall(1, 0.66, 1.5).should.equal(-1);
      bouncingBall(0, 0.66, 1.5).should.equal(-1);
    });
  });
