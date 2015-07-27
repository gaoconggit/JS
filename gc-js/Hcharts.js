function histogram(startDate, endDate, title, div_id, url,foot_title,y_title) {
    var colors = Highcharts.getOptions().colors;
    $.ajax(
    {
        type: "post",
        data: { "startDate": startDate, "endDate": endDate },
        url: url,
        cache: false,
        success: function (msg) {
            var arrayitem = new Array();
            var seriess = [];
            var realdata = new Object();
            var data = new Array();
            var names = new Array();
            var dataLabels = new Array();
            $.each(msg, function (i, result) {
                data[i] = { y: result['count_num'], color: colors[i] };
                names[i] = result['c_name'];
            });
            dataLabels = {
                enabled: true,
                color: '#666'
            }
            realdata.name = [foot_title];
            realdata.data = data;
            realdata.dataLabels = dataLabels;

            arrayitem = names;
            seriess = new Array(realdata);
            $('#' + div_id).highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: title
                },
                xAxis: {
                    categories: arrayitem
                },
                yAxis: {
                    title: {
                        text: y_title
                    }
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0//,
                       // pointWidth: 30
                    }
                }, //设置滚动条    

                scrollbar: {

                    enabled: true

                },
                series: seriess

            });
        }
    })
};