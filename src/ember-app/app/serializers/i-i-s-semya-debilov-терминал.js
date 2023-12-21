import { Serializer as ТерминалSerializer } from
  '../mixins/regenerated/serializers/i-i-s-semya-debilov-терминал';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТерминалSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
