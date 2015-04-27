function ajaxForm(method, Isasync, Iscache, FormId, handleUrl, dataType, Successfunction) {
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