import {
  defineNamespace,
  defineProjections,
  Model as ТопливоMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-топливо';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТопливоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
