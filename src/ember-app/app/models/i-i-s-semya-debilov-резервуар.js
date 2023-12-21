import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РезервуарMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-резервуар';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РезервуарMixin, Validations, {
});

defineProjections(Model);

export default Model;
