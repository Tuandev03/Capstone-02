// text

function NguoiDung () {
    this.email = '';
    this.password = '';
    this.name = '';
    this.gender = true;
    this.phone = '';
  }
  
  let arrIdInput = ['email','password','passwordConfirm','name','phone'];
  let arrIdNotiInput = ['tbEmail','tbPassword','tbPasswordConfirm','tbName','tbPhone'];
  let nguoiDung = new NguoiDung();
  
  function SignUp() {
    event.preventDefault();
  
    for ( let i = 0; i < arrIdInput.length; i++) {
        let value = document.getElementById(arrIdInput[i]).value;
        // console.log(value);
        nguoiDung[arrIdInput[i]] = value;
    }
    // console.log(nguoiDung);
    let valueGender = document.getElementsByName('gridRadios');
    // console.log(valueGender[0].id);
    for (let z= 0; z < valueGender.length; z++) {
        if (valueGender[z].checked) {
            let valueGenderPhanTu = valueGender[z].value;
            if (valueGenderPhanTu === 'false') {
                nguoiDung.gender = false;
            }
            // console.log(valueGender[z].value);
        };
    }
    console.log(nguoiDung);
  
    var valid = true;
    valid = valid & kiemTraDuLieuRong(arrIdInput,arrIdNotiInput,nguoiDung) & kiemTraEmail(nguoiDung.email,'tbEmail') & kiemTraPass(nguoiDung.password,'tbPassword') & kiemTraPassConfirm(nguoiDung.passwordConfirm,nguoiDung.password,'tbPasswordConfirm') & kiemTraName(nguoiDung.name,'tbName') & kiemTraPhone(nguoiDung.phone,'tbPhone');
  
    console.log(valid);
  
    if (valid) {
        var promise = axios({
            method: 'POST',
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            data: nguoiDung,
        });
       promise
            .then(function(result){
                console.log(result);
                displayNotification("Đăng ký thành công!"); // Hiển thị thông báo
                setTimeout(function() {
                    window.location.href = "index.html"; // Chuyển hướng sau 2 giây
                }, 2000);
            })
            console.log(promise.content)
            .catch(function(err){
                console.log(err);
                displayNotification(err.response.data);
            });
    }
  }

  function displayNotification(message) {
    Toastify({
      text: message,
      duration: 2000,
      close: true,
      gravity: 'top',
      position: 'right',
      style: {
        background: 'red',
        color: 'white',
      },
    }).showToast();
  }