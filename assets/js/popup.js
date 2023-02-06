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
    //var divelement3 = document.getElementById('btnVerif3');
    //var divelement4 = document.getElementById('btnVerif4');
    divelement1.style.visibility = "hidden";
    //divelement3.style.visibility = "hidden";
    //divelement4.style.visibility = "hidden";
};

function TolakModal() {
    $('#modalTolak').modal('show')
};

function TolakSimpan() {
    $('#modalTolak').modal('hide');
    var divelement1 = document.getElementById('rowVerifTolak');
    var divelement2 = document.getElementById('rowHubungiAjuan');
    var divelement3 = document.getElementById('rowPermohonanPengajuan');
    divelement1.style.display = "none";
    divelement2.style.visibility = "visible";
    divelement3.style.visibility = "visible";
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
