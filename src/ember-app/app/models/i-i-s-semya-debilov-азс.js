import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АзсMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-азс';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АзсMixin, Validations, {
});

defineProjections(Model);

export default Model;
