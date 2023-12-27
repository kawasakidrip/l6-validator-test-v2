export default class ObjectSchema {
    constructor(validator) {
        this.validators = [...validator];
      }
    
      isValid(item) {
        return this.validators.every((validator) => validator(item) === true);
      }
    
}
