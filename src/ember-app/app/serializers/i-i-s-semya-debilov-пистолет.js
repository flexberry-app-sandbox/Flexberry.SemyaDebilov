import { Serializer as ПистолетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-semya-debilov-пистолет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПистолетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
