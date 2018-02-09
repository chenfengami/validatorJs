表单验证
=======
目前支持的验证类型
-------

. isNonEmpty 判断是否为空
. minLength:6 最小长度限制为6位
. maxLength:24 最大长度限制为24位
. isEqual 是否相等验证
. isPhone 手机号码验证
. isEmail 邮箱验证
. 之后会继续完善，想自己定义也可以在strategies对象里面进行匹配

使用方法
=======

### 引入validator.js 传入options
    validator().validataFunc(options) //返回的是errorMsg

### options参数的具体格式
#### 单一规则匹配
    单一匹配的只在rules数组里面输入 一个Json对象，并匹配相应的规则和错误提示信息
    options = [{
        input: input.value, //需要验证表单的value值,
        rules: [{
            strategy: isNonEmpty, //输入验证的类型 这里为【判断是否为空】
            errorMsg: '不能为空'
        }]
    }]
#### 多规则匹配
    多规则匹配的只在rules数组里面输入多个Json对象，并匹配相应的规则和错误提示信息
    options = [{
        input: input.value, //需要验证表单的value值,
        rules: [{
            strategy: minLength:6, //输入验证的类型 这里为【最小长度限制为:6位】
            errorMsg: '输入的长度不能小于6位'
        },{
            strategy: maxLength:24, //输入验证的类型 这里为【最大长度限制为:24位】
            errorMsg: '输入的长度不能大于24位'            
        }]
    }]
    //以上对表单的限制规则为长度要在6-24个字符之间。包含6和24。