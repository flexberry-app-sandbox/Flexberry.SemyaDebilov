import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-semya-debilov-азс-l');
  this.route('i-i-s-semya-debilov-азс-e',
  { path: 'i-i-s-semya-debilov-азс-e/:id' });
  this.route('i-i-s-semya-debilov-азс-e.new',
  { path: 'i-i-s-semya-debilov-азс-e/new' });
  this.route('i-i-s-semya-debilov-колонка-l');
  this.route('i-i-s-semya-debilov-колонка-e',
  { path: 'i-i-s-semya-debilov-колонка-e/:id' });
  this.route('i-i-s-semya-debilov-колонка-e.new',
  { path: 'i-i-s-semya-debilov-колонка-e/new' });
  this.route('i-i-s-semya-debilov-оплата-l');
  this.route('i-i-s-semya-debilov-оплата-e',
  { path: 'i-i-s-semya-debilov-оплата-e/:id' });
  this.route('i-i-s-semya-debilov-оплата-e.new',
  { path: 'i-i-s-semya-debilov-оплата-e/new' });
  this.route('i-i-s-semya-debilov-пистолет-l');
  this.route('i-i-s-semya-debilov-пистолет-e',
  { path: 'i-i-s-semya-debilov-пистолет-e/:id' });
  this.route('i-i-s-semya-debilov-пистолет-e.new',
  { path: 'i-i-s-semya-debilov-пистолет-e/new' });
  this.route('i-i-s-semya-debilov-регистр-l');
  this.route('i-i-s-semya-debilov-регистр-e',
  { path: 'i-i-s-semya-debilov-регистр-e/:id' });
  this.route('i-i-s-semya-debilov-регистр-e.new',
  { path: 'i-i-s-semya-debilov-регистр-e/new' });
  this.route('i-i-s-semya-debilov-резервуар-l');
  this.route('i-i-s-semya-debilov-резервуар-e',
  { path: 'i-i-s-semya-debilov-резервуар-e/:id' });
  this.route('i-i-s-semya-debilov-резервуар-e.new',
  { path: 'i-i-s-semya-debilov-резервуар-e/new' });
  this.route('i-i-s-semya-debilov-справочник-цен-l');
  this.route('i-i-s-semya-debilov-справочник-цен-e',
  { path: 'i-i-s-semya-debilov-справочник-цен-e/:id' });
  this.route('i-i-s-semya-debilov-справочник-цен-e.new',
  { path: 'i-i-s-semya-debilov-справочник-цен-e/new' });
  this.route('i-i-s-semya-debilov-терминал-l');
  this.route('i-i-s-semya-debilov-терминал-e',
  { path: 'i-i-s-semya-debilov-терминал-e/:id' });
  this.route('i-i-s-semya-debilov-терминал-e.new',
  { path: 'i-i-s-semya-debilov-терминал-e/new' });
  this.route('i-i-s-semya-debilov-топливо-l');
  this.route('i-i-s-semya-debilov-топливо-e',
  { path: 'i-i-s-semya-debilov-топливо-e/:id' });
  this.route('i-i-s-semya-debilov-топливо-e.new',
  { path: 'i-i-s-semya-debilov-топливо-e/new' });
});

export default Router;
