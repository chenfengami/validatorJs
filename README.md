# 表单验证器
##使用方法
    /**
     * @param {验证表单信息}
     * @param {使用方法}
     *  var errorMsg = self.$utils.validator()([{
     *  input: xxx, //需要验证的表单value值
     *  rules: [{
     *      strategy: xx, //所定义的验证方法
     *      errorMsg: xx //错误提示信息 
     *  }]
     * },{
     *  input: xxx, //需要验证的表单value值
     *  rules: [{
     *      strategy: xx, //所定义的验证方法
     *      errorMsg: xx //错误提示信息 
     *  }] 
     * }])
     *   if(errorMsg){
     *     self.$vux.toast.text(errorMsg);
     *     return;
     *   }
     */