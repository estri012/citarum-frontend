"use strict";

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })

$('#modalCenter').modal({backdrop: 'static', keyboard: false}); //harus sebelum show, biar ga bisa diklik

$('#modalCenter').modal('show');
//var divelement2 = document.getElementById('rowHubungiAjuan');
//document.getElementById('rowHubungiAjuan').style.visibility="hidden";
//divelement2.style.visibility = "hidden";
//var divelement3 = document.getElementById('rowPermohonanPengajuan');
//divelement3.style.visibility = "hidden";

function BukaModalVerif() {
    $('#modalVerifikasi').modal('show')
};

function TutupModalVerif() {
    $('#modalVerifikasi').modal('hide')
};

function VerifModalYes() {
    $('#modalVerifikasi').modal('hide');
    var divelement1 = document.getElementById('btnVerif1');
    //var divelement2 = document.getElementById('btnVerif2');
    //var divelement4 = document.getElementById('btnVerif4');
    divelement1.style.visibility = "hidden";
    //divelement2.style.visibility = "hidden";
    //divelement3.style.visibility = "hidden";
    //divelement4.style.visibility = "hidden";
};

function TolakModal() {
    $('#modalTolak').modal('show')
};

function TolakSimpan() {
    $('#modalTolak').modal('hide');
    var divelement1 = document.getElementById('rowVerifTolak');
    //var divelement2 = document.getElementById('rowHubungiAjuan');
    //var divelement3 = document.getElementById('rowPermohonanPengajuan');
    divelement1.style.display = "none";
    //divelement2.style.visibility = "visible";
    //divelement3.style.visibility = "visible";
    change_text();
};

function change_text(){
    document.getElementById("textJudulHalaman").innerHTML = "Permohonan Ditolak Operator - Dokumen {}.";
}

function TutupTolakModal() {
    $('#modalTolak').modal('hide')
};

function tutupmodal() {
    $('#modalCenter').modal('hide')
};

function BookingJadwal() {
    $('#bookingPengaduan').modal('show');
}

function SimpanBooking1() {
    $('#bookingPengaduan').modal('hide');
    $('#bookingTanggal').modal('show');
}

function SimpanBooking2() {
    $('#bookingTanggal').modal('hide');
    $('#bookingJam').modal('show');
}

function SimpanBooking3() {
    $('#bookingJam').modal('hide');
    $('#bookingMenit').modal('show');
}

function SimpanBooking4() {
    $('#bookingMenit').modal('hide');
    $('#verifBooking').modal('show');
}

function BackBooking1() {
    $('#bookingTanggal').modal('hide');
    $('#bookingPengaduan').modal('show')
}

function BackBooking2() {
    $('#bookingJam').modal('hide');
    $('#bookingPengaduan').modal('show')
}

function BackBooking3() {
    $('#bookingJam').modal('hide');
    $('#bookingTanggal').modal('show')
}

function BackBooking4() {
    $('#bookingMenit').modal('hide');
    $('#bookingPengaduan').modal('show')
}

function BackBooking5() {
    $('#bookingMenit').modal('hide');
    $('#bookingTanggal').modal('show')
}

function BackBooking6() {
    $('#bookingMenit').modal('hide');
    $('#bookingJam').modal('show')
}

function BookingNo() {
    $('#verifBooking').modal('hide');
}

function SimpanBookingfinal() {
    $('#verifBooking').modal('hide');
    change_button();
}



function change_button(){
    //document.getElementById("btnBooking").innerHTML = "Tiket Kunjungan";
    const element = document.getElementById("btnBooking");
    element.innerHTML = "Tiket Kunjungan";
}

