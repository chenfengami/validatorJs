表单验证
=======
目前支持的验证类型
-------

1. isNonEmpty 判断是否为空
2. minLength:6 最小长度限制为6位
3. maxLength:24 最大长度限制为24位
4. isEqual 是否相等验证
5. isPhone 手机号码验证
6. isEmail 邮箱验证
7. 之后会继续完善，想自己定义也可以在strategies对象里面进行匹配

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

Example
-------
    <script src="./validator.js"></script>
    <input type="text" placeholder="请输入邮箱" id="email"/>
    var oEmail = document.getElementById('email');
    //这里使用刚刚我们的那个方法，如果验证通过errorMsg是不会有返回值 如果不通过则是我们自己设置的提示信息

    var errorMsg = validator().validataFunc([{
        input: oEmail.value,
        rules: [{
            strategy: isEmail, //输入验证的类型 【判断是否为邮箱】
            errorMsg: '请输入正确的邮箱格式'
        }]
    }])

    if(errorMsg){ //验证不通过
        alert(errorMsg);
        return;
    }
    
    form.submit(); //验证通过