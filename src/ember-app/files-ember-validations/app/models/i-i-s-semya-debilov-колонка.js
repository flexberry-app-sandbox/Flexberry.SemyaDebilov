import {
  defineNamespace,
  defineProjections,
  Model as КолонкаMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-колонка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КолонкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
