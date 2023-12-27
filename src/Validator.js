import StringSchema from './StringSchema.js';
import ObjectSchema from './ObjectSchema.js';
import FunctionShema from './FunctionSchema.js';

export default class Validator {
  string() {
    return new StringSchema();
  }

  function() {
    return new FunctionShema();
  }

  object() {
    return new ObjectSchema();
  }
}
