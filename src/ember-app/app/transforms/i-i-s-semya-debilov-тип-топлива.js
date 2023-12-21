import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипТопливаEnum from '../enums/i-i-s-semya-debilov-тип-топлива';

export default FlexberryEnum.extend({
  enum: ТипТопливаEnum,
  sourceType: 'IIS.SemyaDebilov.ТипТоплива'
});
