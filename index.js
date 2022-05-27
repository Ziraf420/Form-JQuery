var item = [{ "jumlah": 10, "nama": "Jet Tempur" },
{ "jumlah": 1, "nama": "Nuklir Hiroshima" },
{ "jumlah": 6, "nama": "Infinity Stone" },
{ "jumlah": 5, "nama": "Burj Khalifa" },
{ "jumlah": 3, "nama": "Rudal Hipersonik" },
];

$(".tambah").hide();
var data = ''

$rowno = $("#data_produk tr").length;
$maks = 1
function delete_row(rowno) {
    $('#' + rowno).remove();
    $maks--
}

function tampil() {
    if ($maks < 5) {
        $(".tambah").show();
    }
}


function add_row() {
    if ($maks < 5) {

        $("#data_produk tr:last").after("<tr id='row" + $rowno + "'><td><select class ='form-control-sm' id='produk" + $maks + "' onchange=tampil()><option disabled selected>Pilih produk</option><option value='Jet Tempur'>Jet Tempur</option><option value='Nuklir Hiroshima'>Nuklir Hiroshima</option><option value='Infinity Stone'>Infinity Stone</option><option value='Burj Khalifa'>Burj Khalifa</option><option value='Rudal Hipersonik'>Rudal Hipersonik</option></select></td><td> &emsp;  <input type='number' class='form-control-sm' id='banyak" + $maks + "'> </td><td>  &emsp;<input class='hapus1 btn-danger btn' type='button' value='Hapus' onclick=delete_row('row" + $rowno + "')></td></tr>");
        $rowno = $rowno + 1;
        $maks += 1
        $(".tambah").hide();
    } else { }

}


$(".tambah").click(function () {
    add_row();

})
$('#pesan').click(function () {
    let status = 1
    let hasil = $('.hasil').html();
    let belanja = []
    let jumlah = []

    $('#hasil').html('')

    for (i = 0; i < 5; i++) {
        if (i == 0) {
            belanja[i] = $('#produk').val();
            jumlah[i] = $('#banyak').val();
        } else {
            belanja[i] = $('#produk' + i).val();
            jumlah[i] = $('#banyak' + i).val();
        }
    }

    for (j = 0; j < $maks; j++) {
        for (k = $maks; k > j; k--) {
            if (belanja[j] == belanja[k]) {
                $('#warning').html('Maaf. Silahkan pilih jenis produk dan juga hanya membuat nama produk yang sama hanya pada 1 form.');
                status = 0
            }
        }
    }

    for (i = 0; i < 5; i++) {
        if (belanja[i] == item[0].nama) {
            if (jumlah[i] > item[0].jumlah) {
                $('#warning2').html('<span> Maaf. Jumlah beli ' + belanja[i] + ' melebihi stok yang tersedia ' + ' silahkan beli dengan jumlah tidak lebih dari ' + item[0].jumlah);
                status = 0
            } else { }
        } else if (belanja[i] == item[1].nama) {
            if (jumlah[i] > item[1].jumlah) {
                $('#warning2').html('<span> Maaf. Jumlah beli ' + belanja[i] + ' melebihi stok yang tersedia ' + ' silahkan beli dengan jumlah tidak lebih dari ' + item[1].jumlah + '</span>');
                status = 0
            } else { }
        }
        else if (belanja[i] == item[2].nama) {
            if (jumlah[i] > item[2].jumlah) {
                $('#warning2').html('<span> Maaf. Jumlah beli ' + belanja[i] + ' melebihi stok yang tersedia ' + ' silahkan beli dengan jumlah tidak lebih dari ' + item[2].jumlah + '</span>');
                status = 0
            } else { }
        }
        else if (belanja[i] == item[3].nama) {
            if (jumlah[i] > item[3].jumlah) {
                $('#warning2').html('<span> Maaf. Jumlah beli ' + belanja[i] + ' melebihi stok yang tersedia ' + ' silahkan beli dengan jumlah tidak lebih dari ' + item[3].jumlah + '</span>');
                status = 0
            } else { }
        }
        else if (belanja[i] == item[4].nama) {
            if (jumlah[i] > item[4].jumlah) {
                $('#warning2').html('<span> Maaf. Jumlah beli ' + belanja[i] + ' melebihi stok yang tersedia ' + ' silahkan beli dengan jumlah tidak lebih dari ' + item[4].jumlah + '</span>');
                status = 0
            } else { }
        }
    };


    if (status == 1) {
        $('#warning').html('')
        $('#warning2').html('')
        let nama_pemesan = $('#nama_pemesan').val()
        $('#hasil').append("<h3>" + nama_pemesan + "</h3>")
        for (m = 0; m < $rowno; m++) {
            if (belanja[m] != null) {
                $('#hasil').append("<li>" + belanja[m] + " (" + jumlah[m] + ")</li>")
            }
        }
    }

})
