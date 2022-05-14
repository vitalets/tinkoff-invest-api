import { InstrumentIdType } from '../../src/generated/instruments.js';

describe('instruments', () => {

  it('getInstrumentBy', async () => {
    const res = await testApi.instruments.getInstrumentBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'BBG0013HGFT4'
    });
    assert.equal(res.instrument?.name, 'Доллар США');
  });

});
