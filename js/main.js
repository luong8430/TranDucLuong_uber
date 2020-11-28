document.getElementById("btn-tinh-tien").addEventListener("click", function () {
    var number_km = document.getElementById("numberKM").value;
    var time_to_watting = document.getElementById("timeToWaiting").value;

    if (number_km == "" || time_to_watting == "") {
        alert("yêu cầu user nhập đầy đủ thông tin");
    }
    else {
        var temp;
        var dem = 0;
        var radios = document.getElementsByName('selector');
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked == true) {
                temp = radios[i].value;
            }
            else
                dem++;
        }
        if (dem == radios.length) {
            alert("user chưa check");

        }
        if (temp == "uberX") {
            var thoiGianCho = time_to_watting * 2000;
            if (number_km == 1)
                document.getElementById("divThanhTien").style.display = "block";
            document.getElementById("xuatTien").innerText = 8000 + thoiGianCho;
            if (number_km > 1 && number_km <= 20) {
                document.getElementById("divThanhTien").style.display = "block";
                document.getElementById("xuatTien").innerText = (number_km - 1) * 12000 + 8000 + thoiGianCho;
            }
            if (number_km > 20) {
                document.getElementById("divThanhTien").style.display = "block";
                var xMoc3 = document.getElementById("xuatTien").innerText = 20 * 12000 + 8000 + (number_km - 20) * 10000 + thoiGianCho;
            }
        }
        if (temp == "uberSUV") {
            var thoiGianCho = time_to_watting * 3000;
            if (number_km == 1)
                document.getElementById("divThanhTien").style.display = "block";
            document.getElementById("xuatTien").innerText = 9000 + thoiGianCho;
            if (number_km > 1 && number_km <= 20) {
                document.getElementById("divThanhTien").style.display = "block";
                document.getElementById("xuatTien").innerText = (number_km - 1) * 14000 + 8000 + thoiGianCho;
            }
            if (number_km > 20) {
                document.getElementById("divThanhTien").style.display = "block";
                var xMoc3 = document.getElementById("xuatTien").innerText = 20 * 14000 + 9000 + (number_km - 20) * 12000 + thoiGianCho;
            }
        }
        if (temp == "uberBlack") {
            var thoiGianCho = time_to_watting * 4000;
            if (number_km == 1)
                document.getElementById("divThanhTien").style.display = "block";
            document.getElementById("xuatTien").innerText = 10000 + thoiGianCho;
            if (number_km > 1 && number_km <= 20) {
                document.getElementById("divThanhTien").style.display = "block";
                document.getElementById("xuatTien").innerText = (number_km - 1) * 16000 + 10000 + thoiGianCho;
            }
            if (number_km > 20) {
                document.getElementById("divThanhTien").style.display = "block";
                var xMoc3 = document.getElementById("xuatTien").innerText = 20 * 16000 + 10000 + (number_km - 20) * 14000 + thoiGianCho;
            }
        }
    }
})

