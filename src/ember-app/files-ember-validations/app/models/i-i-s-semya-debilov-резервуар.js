import {
  defineNamespace,
  defineProjections,
  Model as РезервуарMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-резервуар';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РезервуарMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
