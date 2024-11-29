var tableCustomerDebit;
var tableRoomEmty;
var chartRoomStatus;
var chartSale;
var tableExpire;
var tableUnfinishWork;
var languageDatatable = {
    "processing": "Đang xử lý...",
    "lengthMenu": "Hiển thị _MENU_ mục mỗi trang",
    "zeroRecords": "Không tìm thấy dữ liệu",
    "info": "Đang hiển thị trang _PAGE_ của _PAGES_",
    "infoEmpty": "Không có dữ liệu",
    "infoFiltered": "(lọc từ _MAX_ mục)"
};
$(function () {
    //#region instal chart
    $.ajax({
        url: '/Home/GetDataRoomStatus',
        type: 'post',
        datatype: 'json',
        contentType: 'application/json',
        async: true,
        cache: false,
        success: function (data) {
            if (!JSON.parse(data.Error)) {
                var config = {
                    type: 'pie',
                    data: {
                        datasets: [{
                            data: [],
                            backgroundColor: [
                                "rgb(54, 162, 235)",
                                "rgb(255, 99, 132)",
                            ],
                        }],
                        labels: [],
                    },
                    options: {
                        maintainAspectRatio: false,
                        responsive: true,
                        legendCallback: function (chart) {
                            var text = [];
                            text.push('<ul class="' + chart.id + '-legend">');
                            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                                text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
                                if (chart.data.labels[i]) {
                                    text.push(chart.data.labels[i]);
                                }
                                text.push('</span></li>');
                            }
                            text.push('</ul>');
                            return text.join("");
                        },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        },
                        pieceLabel: {
                            render: 'percentage'
                        },
                    }
                };
                $.each(data.Result, function () {
                    config.data.datasets[0].data.push(this.PercentValue);
                    config.data.labels.push(this.StatusName);
                })
                chartRoomStatus = new Chart($("#roomStatusChart"), config);
                $("#chartjs-legend").html(chartRoomStatus.generateLegend());
            } else {
                toastr["error"]("Lấy dữ liệu trạng thái phòng thất bại. Vui lòng liên hệ với nhà phát triển để sớm khắc phục sự cố.", "Thông báo");
                console.log("Lấy dữ liệu trạng thái phòng thất bại: " + data.ErrorMessage);
            }
        }
    })
    $.ajax({
        url: '/Home/GetDataSale',
        type: 'post',
        datatype: 'json',
        contentType: 'application/json',
        async: true,
        cache: false,
        success: function (data) {
            if (!JSON.parse(data.Error)) {
                var ramdomcolor = function () {
                    var r = Math.floor(Math.random() * 256);
                    var g = Math.floor(Math.random() * 256);
                    var b = Math.floor(Math.random() * 256);
                    return 'rgb(' + r + ',' + g + ',' + b + ')';
                }
                var config = {
                    type: 'bar',
                    data: {
                        datasets: [{
                            data: [],
                            backgroundColor: [],
                        }],
                        labels: [],
                        borderWidth: 1
                    },
                    options: {
                        maintainAspectRatio: false,
                        responsive: true,
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem, data) {
                                    return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " (vnđ)";
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    callback: function (value, index, values) {
                                        return $.number(parseInt(value), ',', '.');
                                    }
                                }
                            }]
                        },
                    }
                };
                $.each(data.Result, function () {
                    config.data.datasets[0].data.push(this.TotalAmount);
                    config.data.labels.push(this.MonthID);
                    config.data.datasets[0].backgroundColor.push(ramdomcolor());
                })
                chartSale = new Chart($("#saleChart"), config);  // Thay đổi tên biến từ chartRoomStatus thành chartSale
            } else {
                toastr["error"]("Lấy dữ liệu doanh thu thất bại. Vui lòng liên hệ với nhà phát triển để sớm khắc phục sự cố.", "Thông báo");
                console.log("Lấy dữ liệu doanh thu thất bại: " + data.ErrorMessage);
            }
        }
    })
    //#endregion

    //#region instal database
    tableCustomerDebit = $('#tableCustomerDebit').DataTable({
        "processing": true,
        "serverSide": true,
        "paging": false,
        "ordering": false,
        "info": false,
        "responsive": false,
        "searching": false,
        "autoWidth": false,
        "scrollX": true,
        "scrollY": "calc(50vh - 30px - 165px)",
        "scrollCollapse": true,
        "language": {
            "url": languageDatatable
        },
        "ajax": {
            "url": "/Home/GetDataCustomerDebit",
            "type": "POST",
            "datatype": "json",
        },
        "columns": [
            { "data": "AreaName", "name": "AreaName", "width": "20%" },
            { "data": "RoomName", "name": "RoomName", "width": "10%" },
            { "data": "CustomerName", "name": "CustomerName", "width": "20%" },
            { "data": "MonthName", "name": "MonthName", "width": "15%" },
            { "data": "RemainAmount", "name": "RemainAmount", "class": "dt-body-right", "render": $.fn.dataTable.render.number(',', '.', 0, ''), "width": "20%" },
        ]
    });
    tableRoomEmty = $('#tableRoomEmty').DataTable({
        "processing": true,
        "serverSide": true,
        "paging": false,
        "ordering": false,
        "info": false,
        "responsive": false,
        "searching": false,
        "autoWidth": true,
        "scrollX": true,
        "scrollY": "calc(50vh - 30px - 165px)",
        "scrollCollapse": true,
        "language": {
            "url": languageDatatable
        },
        "ajax": {
            "url": "/Home/GetDataRoomEmpty",
            "type": "POST",
            "datatype": "json",
        },
        "columns": [
            { "data": "AreaName", "name": "AreaName" },
            { "data": "RoomName", "name": "RoomName" },
        ]
    });
    //#endregion

    //Table Customer Expire
    tableExpire = $('#tableExpireDate').DataTable({
        "processing": true,
        "serverSide": true,
        "paging": false,
        "ordering": false,
        "info": false,
        "responsive": false,
        "searching": false,
        "autoWidth": true,
        "scrollX": true,
        "scrollY": "calc(50vh - 30px - 165px)",
        "scrollCollapse": true,
        "language": {
            "url": languageDatatable
        },
        "ajax": {
            "url": '/Room/GetDataDataCustomerExpire',
            "type": "POST",
            "datatype": "json",
        },
        "columns": [
            { "data": "AreaName", "name": "AreaName" },
            { "data": "RoomName", "name": "RoomName" },
            { "data": "CustomerName", "name": "CustomerName" },
            {
                "data": "ExpireDate", "name": "ExpireDate",
                "render": function (data) { return data = null ? "" : moment(data).format("DD/MM/YYYY"); }
            },
            { "data": "RoomAmount", "name": "RoomAmount", "class": "dt-body-right", "width": "10%", "render": $.fn.dataTable.render.number(',', '.', 0, '') }
        ],
        "drawCallback": function () {
        }
    });

    // end Table Customer Expire


    //Table Unfinish Work
    tableUnfinishWork = $('#tableunfinishWork').DataTable({
        "processing": true,
        "serverSide": true,
        "paging": false,
        "ordering": false,
        "info": false,
        "responsive": false,
        "searching": false,
        "autoWidth": true,
        "scrollX": true,
        "scrollY": "calc(50vh - 30px - 165px)",
        "scrollCollapse": true,
        "language": {
            "url": languageDatatable
        },
        "ajax": {
            "url": '/Job/GetDataUnfinishWork',
            "type": "POST",
            "datatype": "json",
        },
        "columns": [
            {
                "data": "JobDate", "name": "JobDate",
                "render": function (data) { return data = null ? "" : moment(data).format("DD/MM/YYYY"); }
            },
            { "data": "AreaName", "name": "AreaName" },
            { "data": "RoomName", "name": "RoomName" },
            { "data": "Notes", "name": "Notes" },
        ],
        "drawCallback": function () {
        }
    });

    // end Table  Unfinish Work

    if ($("#HasExpire").val() == 1) {
        $('#modalNotify').modal("show");
    }

});

