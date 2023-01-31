"use strict";

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })

$('#modalCenter').modal({backdrop: 'static', keyboard: false}); //harus sebelum show, biar ga bisa diklik

$('#modalCenter').modal('show');

function tutupmodal() {
    $('#modalCenter').modal('hide')
};
