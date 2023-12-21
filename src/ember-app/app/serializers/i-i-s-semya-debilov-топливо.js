import { Serializer as ТопливоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-semya-debilov-топливо';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТопливоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
