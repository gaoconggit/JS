 $("#btnLogin").click(function () {
        
        ajaxForm("post", true, false, "formLogin", "/Admin/Login", "text", show);
    })
    $("#formLogin").submit(function () {
            ajaxForm("post", true, false, "formLogin", "/Admin/Login", "text", show);
            return false;
    })
    function show(data)
    {
        alert(data);
    }