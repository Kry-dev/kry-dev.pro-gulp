/**
 * Valedate form filds or eny strings
 *
 * @class Validator
 *
 * @param {Object} config
 * @param {Object} types
 */
class Validator {
    constructor(config, types) {
        this.config = config;
        this.messages = {};
        this.types = {
            isNonEmpty: {
                validate(value) {
                    return value.length !== 0;
                },
                instructions: 'Поле не должно быть пустым'
            },
            isAlphaNum: {
                validate(value) {
                    return !/[^а-яА-Яa-zA-Z0-9]/i.test(value);
                },
                instructions: 'Поле должно состоять только из букв и цифр, никаких специальных символов или пробелов'
            },
            isNumber: {
                validate(value) {
                    return !isNaN(value);
                },
                instructions: 'Значение в поле, должно быть  только числом'
            }
        };

        if (types) {
            Object.assign(this.types, types);
        }

        console.log('Validator was created!');
    }

    validate(data) {

        var i, msg, type, cheker, isOk, count;

        this.messages = {};

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];

                if (Array.isArray(type)) {
                    count = type.length;
                } else {
                    count = 1;
                    type = [type];
                }

                for (var j = 0; j < count; j++) {

                    cheker = this.types[type[j]];

                    if (!type[j]) {
                        continue;
                    }

                    if (!cheker) {
                        throw {
                            name: 'ValidationError',
                            message: 'Не предусмотрено проверок!'
                        }
                    }

                    isOk = cheker.validate(data[i]);

                    if (!isOk) {
                        msg = cheker.instructions;

                        if (!this.messages[i]) {
                            this.messages[i] = [];
                        }

                        this.messages[i].push(msg);
                    }
                }
            }
        }
        return this.hasErrors();
    }
    hasErrors() {
        return Object.keys(this.messages).length !== 0;
    }
}

export default Validator;
