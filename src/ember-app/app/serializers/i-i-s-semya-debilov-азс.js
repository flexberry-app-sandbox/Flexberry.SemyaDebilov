import { Serializer as АзсSerializer } from
  '../mixins/regenerated/serializers/i-i-s-semya-debilov-азс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АзсSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
