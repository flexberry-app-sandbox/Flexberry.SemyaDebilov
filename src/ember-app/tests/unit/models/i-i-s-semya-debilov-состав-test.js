import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-semya-debilov-состав', 'Unit | Model | i-i-s-semya-debilov-состав', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
