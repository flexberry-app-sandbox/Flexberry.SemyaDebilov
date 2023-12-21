import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  типТоплива: DS.attr('i-i-s-semya-debilov-тип-топлива'),
  справочникЦен: DS.belongsTo('i-i-s-semya-debilov-справочник-цен', { inverse: null, async: false })
});

export let ValidationRules = {
  типТоплива: {
    descriptionKey: 'models.i-i-s-semya-debilov-топливо.validations.типТоплива.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справочникЦен: {
    descriptionKey: 'models.i-i-s-semya-debilov-топливо.validations.справочникЦен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТопливоE', 'i-i-s-semya-debilov-топливо', {
    типТоплива: attr('Тип топлива', { index: 0 }),
    справочникЦен: belongsTo('i-i-s-semya-debilov-справочник-цен', 'Справочник цен', {
      типТоплива: attr('Тип топлива', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'типТоплива' })
  });

  modelClass.defineProjection('ТопливоL', 'i-i-s-semya-debilov-топливо', {
    типТоплива: attr('Тип топлива', { index: 0 }),
    справочникЦен: belongsTo('i-i-s-semya-debilov-справочник-цен', 'Тип топлива', {
      типТоплива: attr('Тип топлива', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
