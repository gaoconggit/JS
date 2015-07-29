var arr = [];
var changePage_handle_path;
var td_templet_getList = "";
var td_templet_changePage = "";
var tb_id_changePage;
function changePage(page_index, event) {
    ajaxK_V("post", true, false, { pagenumber: page_index }, changePage_handle_path, "json", function (myjson) {
        var myjson = eval(myjson);
        $("#" + tb_id_changePage + " tbody tr").remove();
        $(myjson.data).each(function (index, element) {

            $(arr).each(function () {
                td_templet_changePage += "<td>" + element[this] + "</td>";
            });
            $("#" + tb_id_changePage + " tbody").append("<tr>" + td_templet_changePage + "</tr>");
            td_templet_changePage = "";
        });
    });
    return true;
}

function getList(tb_id, handle_path, Columns) {
    /// <summary>
    ///         方法介绍:   上海一门式ajax分页方法_Web
    /// </summary>
    /// <param name="tb_id">table的ID</param>
    /// <param name="handle_path">返回json的方法</param>
    /// <param name="Columns">要显示的列</param>
   
    changePage_handle_path = handle_path;
    tb_id_changePage = tb_id;
    $("#" + tb_id).after("<div class='pagination-holder' style='margin-left:30%;'><div id='light-pagination'></div></div>");
    arr = Columns;
    ajaxK_V("post", true, false, {}, handle_path, "json", function (myjson) {
        var myjson = eval(myjson);
        $("#" + tb_id + " tbody tr").remove();
        //获取列的模板

        $(myjson.data).each(function (index, element) {

            $(Columns).each(function () {
                td_templet_getList += "<td>" + element[this] + "</td>";
            });

            $("#" + tb_id + " tbody").append("<tr>" + td_templet_getList + "</tr>");
            td_templet_getList = "";
        });
        if (myjson.count > 0) {
            $("#light-pagination").show();
            var itemsOnPage = 1;
            $("#light-pagination").pagination({
                items: myjson.count, // 总页数
                itemsOnPage: itemsOnPage,
                cssStyle: 'light-theme',
                //onInit: changePage,    初始化函数
                onPageClick: changePage   //点击时触发函数
            });
        } else {
            $("#light-pagination").hide();
        }

    });
}
if (typeof jQuery == 'undefined') {

    alert("请先导入jQuery");
} else {
    jQuery.extend({
        yms_Pager_ajax: getList

    });
}