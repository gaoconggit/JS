function yms_Dialog(container_id, modal_path) {
    /// <summary>
    ///         方法介绍:   上海一门式Dialog(bootstrap框),框的地址为部分视图(注意框上弹框时,父框和子框id不能冲突)
    /// </summary>
    /// <param name="container_id">容器的ID</param>
    /// <param name="modal_path">框的地址</param>
    var div_container = "<div id='" + container_id + "'></div>";
    $("body").append(div_container);
    $("#" + container_id).load(modal_path, function () {
        $("#" + container_id).find('#myModal').modal({
            show: true,
            backdrop: true
        });
        $("#" + container_id).find('#myModal').on('hide.bs.modal', function () {
            // 执行一些动作...
            $(this).remove();
            $("#" + container_id).remove();
        })
    });

}
if (typeof jQuery == 'undefined') {

    alert("请先导入jQuery");
} else {
    jQuery.extend({
        yms_Dialog: yms_Dialog

    });
}