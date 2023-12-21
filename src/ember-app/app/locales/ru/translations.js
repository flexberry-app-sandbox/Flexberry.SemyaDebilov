import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSemyaDebilovАзсLForm from './forms/i-i-s-semya-debilov-азс-l';
import IISSemyaDebilovКолонкаLForm from './forms/i-i-s-semya-debilov-колонка-l';
import IISSemyaDebilovОплатаLForm from './forms/i-i-s-semya-debilov-оплата-l';
import IISSemyaDebilovПистолетLForm from './forms/i-i-s-semya-debilov-пистолет-l';
import IISSemyaDebilovРегистрLForm from './forms/i-i-s-semya-debilov-регистр-l';
import IISSemyaDebilovРезервуарLForm from './forms/i-i-s-semya-debilov-резервуар-l';
import IISSemyaDebilovСправочникЦенLForm from './forms/i-i-s-semya-debilov-справочник-цен-l';
import IISSemyaDebilovТерминалLForm from './forms/i-i-s-semya-debilov-терминал-l';
import IISSemyaDebilovТопливоLForm from './forms/i-i-s-semya-debilov-топливо-l';
import IISSemyaDebilovАзсEForm from './forms/i-i-s-semya-debilov-азс-e';
import IISSemyaDebilovКолонкаEForm from './forms/i-i-s-semya-debilov-колонка-e';
import IISSemyaDebilovОплатаEForm from './forms/i-i-s-semya-debilov-оплата-e';
import IISSemyaDebilovПистолетEForm from './forms/i-i-s-semya-debilov-пистолет-e';
import IISSemyaDebilovРегистрEForm from './forms/i-i-s-semya-debilov-регистр-e';
import IISSemyaDebilovРезервуарEForm from './forms/i-i-s-semya-debilov-резервуар-e';
import IISSemyaDebilovСправочникЦенEForm from './forms/i-i-s-semya-debilov-справочник-цен-e';
import IISSemyaDebilovТерминалEForm from './forms/i-i-s-semya-debilov-терминал-e';
import IISSemyaDebilovТопливоEForm from './forms/i-i-s-semya-debilov-топливо-e';
import IISSemyaDebilovАзсModel from './models/i-i-s-semya-debilov-азс';
import IISSemyaDebilovКартыModel from './models/i-i-s-semya-debilov-карты';
import IISSemyaDebilovКолонкаModel from './models/i-i-s-semya-debilov-колонка';
import IISSemyaDebilovОплатаModel from './models/i-i-s-semya-debilov-оплата';
import IISSemyaDebilovПистолетModel from './models/i-i-s-semya-debilov-пистолет';
import IISSemyaDebilovРегистрModel from './models/i-i-s-semya-debilov-регистр';
import IISSemyaDebilovРезервуарModel from './models/i-i-s-semya-debilov-резервуар';
import IISSemyaDebilovСоставModel from './models/i-i-s-semya-debilov-состав';
import IISSemyaDebilovСправочникЦенModel from './models/i-i-s-semya-debilov-справочник-цен';
import IISSemyaDebilovТерминалModel from './models/i-i-s-semya-debilov-терминал';
import IISSemyaDebilovТопливоModel from './models/i-i-s-semya-debilov-топливо';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-semya-debilov-азс': IISSemyaDebilovАзсModel,
    'i-i-s-semya-debilov-карты': IISSemyaDebilovКартыModel,
    'i-i-s-semya-debilov-колонка': IISSemyaDebilovКолонкаModel,
    'i-i-s-semya-debilov-оплата': IISSemyaDebilovОплатаModel,
    'i-i-s-semya-debilov-пистолет': IISSemyaDebilovПистолетModel,
    'i-i-s-semya-debilov-регистр': IISSemyaDebilovРегистрModel,
    'i-i-s-semya-debilov-резервуар': IISSemyaDebilovРезервуарModel,
    'i-i-s-semya-debilov-состав': IISSemyaDebilovСоставModel,
    'i-i-s-semya-debilov-справочник-цен': IISSemyaDebilovСправочникЦенModel,
    'i-i-s-semya-debilov-терминал': IISSemyaDebilovТерминалModel,
    'i-i-s-semya-debilov-топливо': IISSemyaDebilovТопливоModel
  },

  'application-name': 'Semya debilov',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Semya debilov',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya debilov',
          title: 'Semya debilov'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'semya-debilov': {
          caption: 'SemyaDebilov',
          title: 'SemyaDebilov',
          'i-i-s-semya-debilov-резервуар-l': {
            caption: 'Резервуар',
            title: ''
          },
          'i-i-s-semya-debilov-регистр-l': {
            caption: 'Регистр',
            title: ''
          },
          'i-i-s-semya-debilov-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-semya-debilov-азс-l': {
            caption: 'Азс',
            title: ''
          },
          'i-i-s-semya-debilov-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-semya-debilov-пистолет-l': {
            caption: 'Пистолет',
            title: ''
          },
          'i-i-s-semya-debilov-справочник-цен-l': {
            caption: 'Справочник цен',
            title: ''
          },
          'i-i-s-semya-debilov-топливо-l': {
            caption: 'Топливо',
            title: ''
          },
          'i-i-s-semya-debilov-колонка-l': {
            caption: 'Колонка',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-semya-debilov-азс-l': IISSemyaDebilovАзсLForm,
    'i-i-s-semya-debilov-колонка-l': IISSemyaDebilovКолонкаLForm,
    'i-i-s-semya-debilov-оплата-l': IISSemyaDebilovОплатаLForm,
    'i-i-s-semya-debilov-пистолет-l': IISSemyaDebilovПистолетLForm,
    'i-i-s-semya-debilov-регистр-l': IISSemyaDebilovРегистрLForm,
    'i-i-s-semya-debilov-резервуар-l': IISSemyaDebilovРезервуарLForm,
    'i-i-s-semya-debilov-справочник-цен-l': IISSemyaDebilovСправочникЦенLForm,
    'i-i-s-semya-debilov-терминал-l': IISSemyaDebilovТерминалLForm,
    'i-i-s-semya-debilov-топливо-l': IISSemyaDebilovТопливоLForm,
    'i-i-s-semya-debilov-азс-e': IISSemyaDebilovАзсEForm,
    'i-i-s-semya-debilov-колонка-e': IISSemyaDebilovКолонкаEForm,
    'i-i-s-semya-debilov-оплата-e': IISSemyaDebilovОплатаEForm,
    'i-i-s-semya-debilov-пистолет-e': IISSemyaDebilovПистолетEForm,
    'i-i-s-semya-debilov-регистр-e': IISSemyaDebilovРегистрEForm,
    'i-i-s-semya-debilov-резервуар-e': IISSemyaDebilovРезервуарEForm,
    'i-i-s-semya-debilov-справочник-цен-e': IISSemyaDebilovСправочникЦенEForm,
    'i-i-s-semya-debilov-терминал-e': IISSemyaDebilovТерминалEForm,
    'i-i-s-semya-debilov-топливо-e': IISSemyaDebilovТопливоEForm
  },

});

export default translations;
