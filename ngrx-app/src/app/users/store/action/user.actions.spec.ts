import * as fromUser from './user.actions';

describe('addUsers', () => {
  it('should return an action', () => {
    expect(fromUser.addUsers().type).toBe('[User] Add Users');
  });
});
