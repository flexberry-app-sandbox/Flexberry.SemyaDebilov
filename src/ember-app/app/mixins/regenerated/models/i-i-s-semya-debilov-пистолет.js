import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  состояние: DS.attr('i-i-s-semya-debilov-состояние'),
  топливо: DS.belongsTo('i-i-s-semya-debilov-топливо', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-semya-debilov-пистолет.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-semya-debilov-пистолет.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  топливо: {
    descriptionKey: 'models.i-i-s-semya-debilov-пистолет.validations.топливо.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПистолетE', 'i-i-s-semya-debilov-пистолет', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    топливо: belongsTo('i-i-s-semya-debilov-топливо', 'Топливо', {
      типТоплива: attr('Тип топлива', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'типТоплива' })
  });

  modelClass.defineProjection('ПистолетL', 'i-i-s-semya-debilov-пистолет', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    топливо: belongsTo('i-i-s-semya-debilov-топливо', 'Тип топлива', {
      типТоплива: attr('Тип топлива', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
