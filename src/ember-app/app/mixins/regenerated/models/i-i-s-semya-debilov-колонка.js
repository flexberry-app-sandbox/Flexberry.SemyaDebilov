import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  состояние: DS.attr('i-i-s-semya-debilov-состояние'),
  состав: DS.hasMany('i-i-s-semya-debilov-состав', { inverse: 'колонка', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-semya-debilov-колонка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-semya-debilov-колонка.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состав: {
    descriptionKey: 'models.i-i-s-semya-debilov-колонка.validations.состав.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КолонкаE', 'i-i-s-semya-debilov-колонка', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    состав: hasMany('i-i-s-semya-debilov-состав', 'Состав', {
      пистолет: belongsTo('i-i-s-semya-debilov-пистолет', 'Пистолет', {
        номер: attr('Номер', { index: 1, hidden: true }),
        топливо: belongsTo('i-i-s-semya-debilov-топливо', '', {
          типТоплива: attr('Тип топлива', { index: 2 }),
          справочникЦен: belongsTo('i-i-s-semya-debilov-справочник-цен', '', {
            цена: attr('Цена', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номер' })
    })
  });

  modelClass.defineProjection('КолонкаL', 'i-i-s-semya-debilov-колонка', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });
};
