
function validator() {

    let strategies, validataFunc;

    //设置策略对象 规则
    strategies = {
        isNonEmpty: function (value, errorMsg) {
            if (value === '') {
                return errorMsg;
            }
        },
        minLength: function (value, length, errorMsg) {
            if (value.length < length) {
                return errorMsg;
            }
        },
        maxLength: function (value, length, errorMsg) {
            if (value.length > length) {
                return errorMsg;
            }
        },
        isEqual: function (oldValue, newValue, errorMsg) {
            if (oldValue !== newValue) {
                return errorMsg;
            }
        },
        isPhone: function (value, errorMsg) {
            var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!reg.test(value)) {
                return errorMsg;
            }
        },
        isEmail: function (value, errorMsg) {
            var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            if (!reg.test(value)) {
                return errorMsg;
            }
        },

    };


    var Validator = function () {
        this.cache = [];
    };

    Validator.prototype.add = function (value, rules) {
        var self = this;
        for (var i = 0, rule; rule = rules[i++];) {
            (function (rule) {
                var strategyAry = rule.strategy.split(':');
                var errorMsg = rule.errorMsg;
                self.cache.push(function () {
                    var strategy = strategyAry.shift();
                    strategyAry.unshift(value);
                    strategyAry.push(errorMsg);
                    return strategies[strategy].apply(null, strategyAry);
                })

            })(rule);
        }
    };

    Validator.prototype.start = function () {
        for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
            var errorMsg = validatorFunc();
            if (errorMsg) {
                return errorMsg;
            }
        }
    };


    validataFunc = function (options) {
        var validator = new Validator();
        for (var i = 0, strategy; strategy = options[i++];) {
            validator.add(strategy.input, strategy.rules);
        }
        var errorMsg = validator.start();
        return errorMsg;
    }

    return validataFunc;
}
