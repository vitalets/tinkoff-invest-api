describe('users', () => {

  it('getAccounts', async () => {
    const res = await testApi.users.getAccounts({});
    assert.ok(res.accounts[0].id);
  });

});
