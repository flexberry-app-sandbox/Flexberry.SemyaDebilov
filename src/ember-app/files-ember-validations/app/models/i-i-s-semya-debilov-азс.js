import {
  defineNamespace,
  defineProjections,
  Model as АзсMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-азс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АзсMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
