import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оплата: DS.belongsTo('i-i-s-semya-debilov-оплата', { inverse: null, async: false }),
  резервуар: DS.belongsTo('i-i-s-semya-debilov-резервуар', { inverse: null, async: false })
});

export let ValidationRules = {
  оплата: {
    descriptionKey: 'models.i-i-s-semya-debilov-регистр.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  резервуар: {
    descriptionKey: 'models.i-i-s-semya-debilov-регистр.validations.резервуар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрE', 'i-i-s-semya-debilov-регистр', {
    оплата: belongsTo('i-i-s-semya-debilov-оплата', 'Оплата', {
      номер: attr('Номер', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'номер' }),
    резервуар: belongsTo('i-i-s-semya-debilov-резервуар', 'Резервуар', {
      номер: attr('Номер', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('РегистрL', 'i-i-s-semya-debilov-регистр', {
    оплата: belongsTo('i-i-s-semya-debilov-оплата', 'Номер', {
      номер: attr('Номер', { index: 0 })
    }, { index: -1, hidden: true }),
    резервуар: belongsTo('i-i-s-semya-debilov-резервуар', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
