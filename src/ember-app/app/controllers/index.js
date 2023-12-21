import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.semya-debilov.caption'),
          title: i18n.t('forms.application.sitemap.semya-debilov.title'),
          children: [{
            link: 'i-i-s-semya-debilov-резервуар-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-резервуар-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-резервуар-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-semya-debilov-регистр-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-регистр-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-регистр-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-semya-debilov-оплата-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-оплата-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-semya-debilov-азс-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-азс-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-азс-l.title'),
            children: null
          }, {
            link: 'i-i-s-semya-debilov-терминал-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-терминал-l.title'),
            children: null
          }, {
            link: 'i-i-s-semya-debilov-пистолет-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-пистолет-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-пистолет-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-semya-debilov-справочник-цен-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-справочник-цен-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-справочник-цен-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-semya-debilov-топливо-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-топливо-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-топливо-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-semya-debilov-колонка-l',
            caption: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-колонка-l.caption'),
            title: i18n.t('forms.application.sitemap.semya-debilov.i-i-s-semya-debilov-колонка-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})