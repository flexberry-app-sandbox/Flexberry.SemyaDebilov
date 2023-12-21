import {
  defineNamespace,
  defineProjections,
  Model as ПистолетMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-пистолет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПистолетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
