import {
  defineNamespace,
  defineProjections,
  Model as ТерминалMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-терминал';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТерминалMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
