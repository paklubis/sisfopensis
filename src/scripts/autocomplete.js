$(function(){
  var contents = [
    { value: 'Sumatera Utara', data: '#2' },
    { value: 'Istana Maimun', data: '#8' },
    { value: 'Taman Simalem', data: '#10' },
    { value: 'Berastagi', data: '#13' },
    { value: 'Desa Lingga', data: '#15' },
    { value: 'Bukit Gundaling', data: '#16' },
    { value: 'Pasar Buah Berastagi', data: '#18' },
    { value: 'Sidebu-debu', data: '#19' },
    { value: 'Taman Alam Lumbini', data: '#21' },
    { value: 'Danau Toba', data: '#23' },
    { value: 'Sipiso-piso', data: '#32' },
    { value: 'Gunung Sibayak', data: '#36' },
    { value: 'Kawah Putih', data: '#42' },
    { value: 'Bukit Lawang', data: '#47' },
    { value: 'Pelaruga', data: '#50' },
    { value: 'Merdeka Walk', data: '#55' },
    { value: 'Sushi Boat', data: '#59' },
    { value: 'Rumah Makan Sipirok', data: '#62' },
    { value: 'Rumah Makan Sinar Pagi', data: '#66' },
    { value: 'Pagaruyung', data: '#69' },
    { value: 'Ucok Durian', data: '#72' },
    { value: 'Sate Padang Alfresco', data: '#73' },
    { value: 'Mie Aceh Titi Bobrok', data: '#75' },
    { value: 'Restoran Pohon Pisang', data: '#78' },
    { value: 'Mie Gomak', data: '#82' },
    { value: 'Mie Pedas Mampus', data: '#85' },
    { value: 'Durian House', data: '#89' },
  ];
  $('#searchfield').hide();

  // setup autocomplete function pulling from contents[] array
  $(window).keydown(function(event) {
    if(event.keyCode == 70 || event.keyCode == 102) {
      $('#searchfield').show();
    }
    if(event.keyCode == 27) {
      $('#searchfield').hide();
    }
  });
  $('#autocomplete').autocomplete({
    lookup: contents,
    onSelect: function (suggestion) {
      location.href= suggestion.data;
      document.getElementById("autocomplete").value = "";
    }
  });
  

});