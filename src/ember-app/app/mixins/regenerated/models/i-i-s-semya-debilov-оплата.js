import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номер: DS.attr('number'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('i-i-s-semya-debilov-тип-оплаты'),
  колонка: DS.belongsTo('i-i-s-semya-debilov-колонка', { inverse: null, async: false }),
  терминал: DS.belongsTo('i-i-s-semya-debilov-терминал', { inverse: null, async: false }),
  карты: DS.hasMany('i-i-s-semya-debilov-карты', { inverse: 'оплата', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-semya-debilov-оплата.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-semya-debilov-оплата.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-semya-debilov-оплата.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-semya-debilov-оплата.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колонка: {
    descriptionKey: 'models.i-i-s-semya-debilov-оплата.validations.колонка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-semya-debilov-оплата.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-semya-debilov-оплата.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-semya-debilov-оплата', {
    номер: attr('Номер', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    терминал: belongsTo('i-i-s-semya-debilov-терминал', 'Терминал', {
      номер: attr('Номер', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номер' }),
    колонка: belongsTo('i-i-s-semya-debilov-колонка', 'Колонка', {
      номер: attr('Номер', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'номер' }),
    карты: hasMany('i-i-s-semya-debilov-карты', 'Карты', {
      номерКарты: attr('Номер карты', { index: 0 }),
      номерТелефона: attr('Номер телефона', { index: 1 }),
      бонусы: attr('Бонусы', { index: 2 })
    })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-semya-debilov-оплата', {
    номер: attr('Номер', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    терминал: belongsTo('i-i-s-semya-debilov-терминал', 'Номер', {
      номер: attr('Номер', { index: 4 })
    }, { index: -1, hidden: true }),
    колонка: belongsTo('i-i-s-semya-debilov-колонка', 'Номер', {
      номер: attr('Номер', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
