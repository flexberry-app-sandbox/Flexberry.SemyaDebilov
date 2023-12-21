'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov азс l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-азс-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-азс-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov колонка l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-колонка-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-колонка-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov оплата l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-оплата-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-оплата-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov пистолет l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-пистолет-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-пистолет-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov регистр l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-регистр-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-регистр-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov резервуар l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-резервуар-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-резервуар-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov справочник цен l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-справочник-цен-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-справочник-цен-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov терминал l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-терминал-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-терминал-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s semya debilov топливо l');

  (0, _qunit.test)('testing i-i-s-semya-debilov-топливо-l', function (assert) {
    var _this = this;

    visit('/i-i-s-semya-debilov-топливо-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-semya-debilov-\u0442\u0438\u043F-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-semya-debilov-\u0442\u0438\u043F-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-semya-debilov-\u0442\u0438\u043F-\u0442\u043E\u043F\u043B\u0438\u0432\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-semya-debilov-\u0442\u0438\u043F-\u0442\u043E\u043F\u043B\u0438\u0432\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0430\u0437\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0430\u0437\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0430\u0437\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0430\u0437\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u0430\u0437\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u0430\u0437\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0430\u0437\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0430\u0437\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0430\u0437\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0430\u0437\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u0430\u0437\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u0430\u0437\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u0430\u0437\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u0430\u0437\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0430\u0437\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0430\u0437\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0430\u0437\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0430\u0437\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u0430\u0437\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u0430\u0437\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0430\u0437\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0430\u0437\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0430\u0437\u0441-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0430\u0437\u0441-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0430\u0437\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0430\u0437\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0430\u0437\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0430\u0437\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0430\u0437\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0430\u0437\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-semya-debilov-\u0442\u0438\u043F-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-semya-debilov-\u0442\u0438\u043F-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-semya-debilov-\u0442\u0438\u043F-\u0442\u043E\u043F\u043B\u0438\u0432\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-semya-debilov-\u0442\u0438\u043F-\u0442\u043E\u043F\u043B\u0438\u0432\u0430.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u0430\u0437\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u0430\u0437\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0430\u0437\u0441-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0430\u0437\u0441-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u0430\u0437\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u0430\u0437\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-азс-e', 'Unit | Controller | i-i-s-semya-debilov-азс-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-азс-l', 'Unit | Controller | i-i-s-semya-debilov-азс-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-колонка-e', 'Unit | Controller | i-i-s-semya-debilov-колонка-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-колонка-l', 'Unit | Controller | i-i-s-semya-debilov-колонка-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-оплата-e', 'Unit | Controller | i-i-s-semya-debilov-оплата-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-оплата-l', 'Unit | Controller | i-i-s-semya-debilov-оплата-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-пистолет-e', 'Unit | Controller | i-i-s-semya-debilov-пистолет-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-пистолет-l', 'Unit | Controller | i-i-s-semya-debilov-пистолет-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-регистр-e', 'Unit | Controller | i-i-s-semya-debilov-регистр-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-регистр-l', 'Unit | Controller | i-i-s-semya-debilov-регистр-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-резервуар-e', 'Unit | Controller | i-i-s-semya-debilov-резервуар-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-резервуар-l', 'Unit | Controller | i-i-s-semya-debilov-резервуар-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-справочник-цен-e', 'Unit | Controller | i-i-s-semya-debilov-справочник-цен-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-справочник-цен-l', 'Unit | Controller | i-i-s-semya-debilov-справочник-цен-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-терминал-e', 'Unit | Controller | i-i-s-semya-debilov-терминал-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-терминал-l', 'Unit | Controller | i-i-s-semya-debilov-терминал-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-топливо-e', 'Unit | Controller | i-i-s-semya-debilov-топливо-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-semya-debilov-топливо-l', 'Unit | Controller | i-i-s-semya-debilov-топливо-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u0430\u0437\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-азс', 'Unit | Model | i-i-s-semya-debilov-азс', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-карты', 'Unit | Model | i-i-s-semya-debilov-карты', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-колонка', 'Unit | Model | i-i-s-semya-debilov-колонка', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-оплата', 'Unit | Model | i-i-s-semya-debilov-оплата', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-пистолет', 'Unit | Model | i-i-s-semya-debilov-пистолет', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-регистр', 'Unit | Model | i-i-s-semya-debilov-регистр', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-резервуар', 'Unit | Model | i-i-s-semya-debilov-резервуар', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-состав', 'Unit | Model | i-i-s-semya-debilov-состав', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-справочник-цен', 'Unit | Model | i-i-s-semya-debilov-справочник-цен', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-терминал', 'Unit | Model | i-i-s-semya-debilov-терминал', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-топливо', 'Unit | Model | i-i-s-semya-debilov-топливо', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0430\u0437\u0441-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-азс-e', 'Unit | Route | i-i-s-semya-debilov-азс-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0430\u0437\u0441-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-азс-l', 'Unit | Route | i-i-s-semya-debilov-азс-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-колонка-e', 'Unit | Route | i-i-s-semya-debilov-колонка-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-колонка-l', 'Unit | Route | i-i-s-semya-debilov-колонка-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-оплата-e', 'Unit | Route | i-i-s-semya-debilov-оплата-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-оплата-l', 'Unit | Route | i-i-s-semya-debilov-оплата-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-пистолет-e', 'Unit | Route | i-i-s-semya-debilov-пистолет-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-пистолет-l', 'Unit | Route | i-i-s-semya-debilov-пистолет-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-регистр-e', 'Unit | Route | i-i-s-semya-debilov-регистр-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-регистр-l', 'Unit | Route | i-i-s-semya-debilov-регистр-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-резервуар-e', 'Unit | Route | i-i-s-semya-debilov-резервуар-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-резервуар-l', 'Unit | Route | i-i-s-semya-debilov-резервуар-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-справочник-цен-e', 'Unit | Route | i-i-s-semya-debilov-справочник-цен-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-справочник-цен-l', 'Unit | Route | i-i-s-semya-debilov-справочник-цен-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-терминал-e', 'Unit | Route | i-i-s-semya-debilov-терминал-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-терминал-l', 'Unit | Route | i-i-s-semya-debilov-терминал-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-топливо-e', 'Unit | Route | i-i-s-semya-debilov-топливо-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-semya-debilov-топливо-l', 'Unit | Route | i-i-s-semya-debilov-топливо-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u0430\u0437\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-азс', 'Unit | Serializer | i-i-s-semya-debilov-азс', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-азс', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u043A\u0430\u0440\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-карты', 'Unit | Serializer | i-i-s-semya-debilov-карты', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-карты', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u043A\u043E\u043B\u043E\u043D\u043A\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-колонка', 'Unit | Serializer | i-i-s-semya-debilov-колонка', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-колонка', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u043E\u043F\u043B\u0430\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-оплата', 'Unit | Serializer | i-i-s-semya-debilov-оплата', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-оплата', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u043F\u0438\u0441\u0442\u043E\u043B\u0435\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-пистолет', 'Unit | Serializer | i-i-s-semya-debilov-пистолет', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-пистолет', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u0440\u0435\u0433\u0438\u0441\u0442\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-регистр', 'Unit | Serializer | i-i-s-semya-debilov-регистр', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-регистр', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-резервуар', 'Unit | Serializer | i-i-s-semya-debilov-резервуар', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-резервуар', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u0441\u043E\u0441\u0442\u0430\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-состав', 'Unit | Serializer | i-i-s-semya-debilov-состав', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-состав', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u0446\u0435\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-справочник-цен', 'Unit | Serializer | i-i-s-semya-debilov-справочник-цен', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-справочник-цен', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-терминал', 'Unit | Serializer | i-i-s-semya-debilov-терминал', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-терминал', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-semya-debilov-\u0442\u043E\u043F\u043B\u0438\u0432\u043E-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-semya-debilov-топливо', 'Unit | Serializer | i-i-s-semya-debilov-топливо', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-semya-debilov-топливо', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-semya-debilov-состояние', 'transform:i-i-s-semya-debilov-тип-оплаты', 'transform:i-i-s-semya-debilov-тип-топлива', 'model:i-i-s-semya-debilov-азс', 'model:i-i-s-semya-debilov-карты', 'model:i-i-s-semya-debilov-колонка', 'model:i-i-s-semya-debilov-оплата', 'model:i-i-s-semya-debilov-пистолет', 'model:i-i-s-semya-debilov-регистр', 'model:i-i-s-semya-debilov-резервуар', 'model:i-i-s-semya-debilov-состав', 'model:i-i-s-semya-debilov-справочник-цен', 'model:i-i-s-semya-debilov-терминал', 'model:i-i-s-semya-debilov-топливо', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
