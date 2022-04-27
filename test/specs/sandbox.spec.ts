describe('sandbox', () => {

  beforeEach(async () => {
    const { accounts } = await api.sandbox.getSandboxAccounts({});
    for (const account of accounts) {
      await api.sandbox.closeSandboxAccount({ accountId: account.id });
    }
  });

  it('openAccount', async () => {
    const res = await api.sandbox.openSandboxAccount({});
    assert.ok(res.accountId);
    const { accounts } = await api.sandbox.getSandboxAccounts({});
    assert.equal(accounts[0].id, res.accountId);
  });

});
