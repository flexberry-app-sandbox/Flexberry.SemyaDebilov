import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пистолет: DS.belongsTo('i-i-s-semya-debilov-пистолет', { inverse: null, async: false }),
  колонка: DS.belongsTo('i-i-s-semya-debilov-колонка', { inverse: 'состав', async: false })
});

export let ValidationRules = {
  пистолет: {
    descriptionKey: 'models.i-i-s-semya-debilov-состав.validations.пистолет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  колонка: {
    descriptionKey: 'models.i-i-s-semya-debilov-состав.validations.колонка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставE', 'i-i-s-semya-debilov-состав', {
    пистолет: belongsTo('i-i-s-semya-debilov-пистолет', 'Пистолет', {
      номер: attr('Номер', { index: 1, hidden: true }),
      топливо: belongsTo('i-i-s-semya-debilov-топливо', '', {
        типТоплива: attr('Тип топлива', { index: 2 }),
        справочникЦен: belongsTo('i-i-s-semya-debilov-справочник-цен', '', {
          цена: attr('Цена', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'номер' })
  });
};
