import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-semya-debilov-состав', 'Unit | Serializer | i-i-s-semya-debilov-состав', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-semya-debilov-состав',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-semya-debilov-состояние',
    'transform:i-i-s-semya-debilov-тип-оплаты',
    'transform:i-i-s-semya-debilov-тип-топлива',

    'model:i-i-s-semya-debilov-азс',
    'model:i-i-s-semya-debilov-карты',
    'model:i-i-s-semya-debilov-колонка',
    'model:i-i-s-semya-debilov-оплата',
    'model:i-i-s-semya-debilov-пистолет',
    'model:i-i-s-semya-debilov-регистр',
    'model:i-i-s-semya-debilov-резервуар',
    'model:i-i-s-semya-debilov-состав',
    'model:i-i-s-semya-debilov-справочник-цен',
    'model:i-i-s-semya-debilov-терминал',
    'model:i-i-s-semya-debilov-топливо',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
