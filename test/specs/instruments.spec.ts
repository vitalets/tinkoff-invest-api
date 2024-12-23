import { InstrumentIdType } from '../../src/generated/instruments.js';
import { TinkoffApiError } from '../../src/index.js';

describe('instruments', () => {

  it('getInstrumentBy', async () => {
    const res = await testApi.instruments.getInstrumentBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'BBG0013HGFT4'
    });
    assert.equal(res.instrument?.name, 'Доллар США');
  });

  it('error: Instrument not found', async () => {
    const promise = testApi.instruments.getInstrumentBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'xxxxxxx'
    });
    await assert.rejects(promise, (error: TinkoffApiError) => {
      assert.match(error.message, /Instrument not found/);
      assert.match(error.ratelimit, /\d+/);
      assert.match(error.ratelimitRemaining, /\d+/);
      assert.match(error.ratelimitReset, /\d+/);
      return true;
    });
  });

});
