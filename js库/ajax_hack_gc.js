if (typeof jQuery == 'undefined') {

    alert("请先导入jQuery");
} else {
    jQuery.extend({
        gc_ajax: gc_ajax

    });
}
function ajaxForm(method, Isasync, Iscache, FormId, handleUrl, dataType, Successfunction) {
    /// <summary>
    ///         方法介绍:   ajax提交表单的方法
    /// </summary>
    /// <param name="method">post或get dataType:String</param>
    /// <param name="Isasync">是否异步 dataType:bool</param>
    /// <param name="Iscache">是否缓存 dataType:bool</param>
    /// <param name="FormId">表单ID dataType:String</param>
    /// <param name="handleUrl">后台处理请求的路径。如/Home/Login dataType:String</param>
    /// <param name="dataType">前后台交互的数据类型。如text、json等 dataType:String</param>
    /// <param name="Successfunction">请求成功后的回调函数 dataType:function</param>
    $.ajax({
        type: method,
        async: Isasync,
        cache: Iscache,
        data: $("#" + FormId).serialize(),
        url: handleUrl,
        dataType: dataType,//text返回文本，json返回记录集
        success: Successfunction
    })
}

function ajaxK_V(method, Isasync, Iscache, key_value, handleUrl, dataType, Successfunction) {
    /// <summary>
    ///         方法介绍:   ajax提交的方法(数据为键值对)
    /// </summary>
    /// <param name="method">post或get dataType:String</param>
    /// <param name="Isasync">是否异步 dataType:bool</param>
    /// <param name="Iscache">是否缓存 dataType:bool</param>
    /// <param name="key_value">键值对 dataType:String</param>
    /// <param name="handleUrl">后台处理请求的路径。如/Home/Login dataType:String</param>
    /// <param name="dataType">前后台交互的数据类型。如text、json等 dataType:String</param>
    /// <param name="Successfunction">请求成功后的回调函数 dataType:function</param>
    $.ajax({
        type: method,
        async: Isasync,
        cache: Iscache,
        data: key_value,
        url: handleUrl,
        dataType: dataType,//text返回文本，json返回记录集
        success: Successfunction
    })
}
function ajaxForm_best(method, Isasync, Iscache, all, handleUrl, dataType, Successfunction) {
    /// <summary>
    ///         方法介绍:   ajax提交表单的方法
    /// </summary>
    /// <param name="method">post或get dataType:String</param>
    /// <param name="Isasync">是否异步 dataType:bool</param>
    /// <param name="Iscache">是否缓存 dataType:bool</param>
    /// <param name="FormId">表单ID dataType:String</param>
    /// <param name="handleUrl">后台处理请求的路径。如/Home/Login dataType:String</param>
    /// <param name="dataType">前后台交互的数据类型。如text、json等 dataType:String</param>
    /// <param name="Successfunction">请求成功后的回调函数 dataType:function</param>
    $.ajax({
        type: method,
        async: Isasync,
        cache: Iscache,
        data: all,
        url: handleUrl,
        dataType: dataType,//text返回文本，json返回记录集
        success: Successfunction
    })
}
function gc_ajax(key_value, handleUrl, Successfunction) {
    /// <summary>
    ///         方法介绍:ajax提交的方法(数据为键值对,默认post,异步,无缓存,请求类型text)
    /// </summary>
    /// <param name="key_value">键值对 dataType:String如：{sb:sb}</param>
    /// <param name="handleUrl">后台处理请求的路径。如/Home/Login dataType:String</param>
    /// <param name="Successfunction">请求成功后的回调函数 dataType:function</param>
    /// <param name="ErrFunction">请求失败后的回调函数 dataType:function</param>
    $.ajax({
        type: "post",
        async: true,
        cache: false,
        data: key_value,
        url: handleUrl,
        dataType: "text",//text返回文本，json返回记录集
        success: Successfunction,
        error: function (xhr, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });

}