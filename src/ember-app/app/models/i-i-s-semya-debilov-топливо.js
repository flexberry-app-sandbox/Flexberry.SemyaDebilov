import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТопливоMixin
} from '../mixins/regenerated/models/i-i-s-semya-debilov-топливо';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТопливоMixin, Validations, {
});

defineProjections(Model);

export default Model;
