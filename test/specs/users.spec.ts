describe('users', () => {

  it('getAccounts', async () => {
    const res = await api.users.getAccounts({});
    assert.ok(res.accounts[0].id);
  });

});
