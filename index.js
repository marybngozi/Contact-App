/* js for addcontact */
$('#addForm').hide();
$('#editForm').hide();
$('.outpt').hide();
$('#emailheading').hide();
$('#addheading').hide();
$('#webheading').hide();

$('#adde').click(function(){
  $('.outpt').hide();
  $('#addForm').fadeIn();

});

$('#cancont').click(function(){
  $('#addForm').fadeOut();
});

var pfnum = 1;
$('#phone_plus').click(function(){
  $('#emailabel').before("<label for='phone"+pfnum+
  "'>MOBILE "+pfnum+" <img src='phone.png' alt='' width='' height=''></label><input type='tel' class='phoneall infield col-9' name='phone"
  +pfnum+"' id='phone'><br><br>");
  
  pfnum++;
});

function getphones(){
  var phoner = [];
  $('.phoneall').each(function(){
    phone = $(this).val();
    phoner[phoner.length] = phone;
  });
  return phoner;
}

function Person(fullname, phones, mail, address, web){
  this.fullname = fullname;
  this.phones = phones;
  this.mail = mail;
  this.address = address;
  this.web = web;
}

let cnamer = [];

function getValues(){
  var cname = $('#name').val();
  var phon = getphones();
  if ((cname != "") && (phon != "")) {
    var email = $('#email').val();
    var address = $('#address').val();
    var website = $('#website').val();
    person = new Person(cname,phon,email,address,website);
    cnamer.push(person);
    showAddedInput();
  }
}

function showAddedInput() {
  $('.left-part').empty();
  for (let i = 0; i < cnamer.length; i++) {
    $('.left-part').append("<p class='listn cursor'>"+cnamer[i].fullname+"</p>");

  }
  sorted();
}

function closeConForm() {
  $('.infield').val(null);
  $('#addForm').fadeOut();
}

function sorted(){
  let sortContact = [];
  $('.listn').each(function (){
    let oneListn = $(this).text();
    sortedContact.push(oneListn);
    sortedContact.sort();
  });
  $('.left-part').empty();
  for (let m = 0; m < sortedContact.length; m++) {
      $('.left-part').append('<p class="listn">' + m + '</p>');
  }
}

/* function editContactInfo(){
  let saveName = $('#showFullname').text();
  let saveEmail = $('#showEmail').text();
  let savePhone = $('#showPhone').text();
  let currentBday = $('#showBday').text();
  let currentAddress = $('#showAddress').text();
  deleteContact(currentName);
  openContactForm();
  $('#name').val(currentName);
  $('#email').val(currentEmail);
  $('#phone').val(currentPhone);
  $('#birthday').val(currentBday);
  $('#address').val(currentAddress);
} */

$('#savecont').click(function(e){
  e.preventDefault();
  getValues();
  closeConForm();
});

$('.left-part').on('click','.listn', function() {
  $('#addForm').fadeOut();
  // $('.resultn').empty();
  var meClick = $(this).text();
  var holdOneUser = ""; 
  for (let k = 0; k < cnamer.length; k++) {
    if (meClick == cnamer[k].fullname) {
      holdOneUser = cnamer[k];
    } 
  }
  
  $('.fnresult').text(holdOneUser.fullname);
  for (let h = 0; h < holdOneUser.phones.length; h++) {
    if(holdOneUser.phones[h] != ""){
      if (h == 0) {
        $('#phoneheadn').empty();
        $('#phnresult').empty();
        $('.fnresult').after("<h5 id='phoneheadn'>PHONE</h5>");
        $('#phoneheadn').after("<p id='phnresult'>"+holdOneUser.phones[h]+"</p>");
      }else{
        
        $('.mobresult').each(function() {
          mobresult = $(this).text();
          if (mobresult == holdOneUser.phones[h]) {
            $('.mobhead').empty();
            $('.mobresult').empty();
          }
        })
        
        $('#emailheading').before("<h5 class='mobhead'>MOBILE "+h+"</h5>");
        $('#emailheading').before("<p class='mobresult'>"+holdOneUser.phones[h]+"</p>");
      }
    }
  }
  if (holdOneUser.mail != "") {
    $('#emailheading').show();
    $('.emresult').text(holdOneUser.mail);
  }
  if (holdOneUser.address != "") {
    $('#addheading').show();
    $('.adresult').text(holdOneUser.address);
  }
  if (holdOneUser.web != "") {
    $('#webheading').show();
    $('.webresult').text(holdOneUser.web);
  }
  $('.outpt').fadeIn();

});
function outputn(){
  
}
