// hàm kiểm tra dữ liệu
function kiemTraDuLieuRong(arrInput, arrNotiInput, nhanVien) {
  let valid = true;
  let valueGender = document.getElementsByName("gridRadios");
  let genderSelected = false; // Cờ để kiểm tra xem giới tính có được chọn hay không

  for (let z = 0; z < arrInput.length; z++) {
    if (nhanVien[arrInput[z]] == "") {
      valid = false;
      document.getElementById(arrNotiInput[z]).style.display = "inline-block";
      document.getElementById(arrNotiInput[z]).innerHTML =
        "Vui lòng nhập dữ liệu";
    } else {
      document.getElementById(arrNotiInput[z]).style.display = "none";
      document.getElementById(arrNotiInput[z]).innerHTML = "";
    }
  }

  for (let z = 0; z < valueGender.length; z++) {
    if (valueGender[z].checked) {
      genderSelected = true; // Đã  giới tính
      break; // Không cần kiểm tra  nếu đã chọn được
    }
  }

  // Kiểm tra nếu không có giới tính nào được chọn
  if (!genderSelected) {
    valid = false;
    document.getElementById("tbGender").style.display = "inline-block";
    document.getElementById("tbGender").innerHTML = "Vui lòng chọn một dữ liệu";
  } else {
    document.getElementById("tbGender").style.display = "none";
    document.getElementById("tbGender").innerHTML = "";
  }

  return valid;
}
// hàm kiểm tra email
function kiemTraEmail(valueEmail, idNoti) {
  var valid = true;
  var regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (valueEmail !== "") {
    if (!regexEmail.test(valueEmail)) {
      valid = valid && false;
      document.getElementById(idNoti).style.display = "inline-block";
      document.getElementById(idNoti).innerHTML = "Định dạng email không đúng";
    }
  }
  return valid;
}
// hàm kiểm tra mật khẩu
function kiemTraPass(valuePass, idNoti) {
  var valid = true;
  var regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/;
  if (valuePass !== "") {
    if (valuePass.length < 6 || valuePass.length > 10) {
      valid = valid && false;
      document.getElementById(idNoti).style.display = "inline-block";
      document.getElementById(idNoti).innerHTML =
        "Mật khẩu phải từ 6 đến 10 kí tự ";
    } else if (!regexPass.test(valuePass)) {
      valid = valid && false;
      document.getElementById(idNoti).style.display = "inline-block";
      document.getElementById(idNoti).innerHTML =
        "Mật khẩu phải có ít nhất 1 kí tự in hoa, thường, chữ số và kí tự đặc biệt";
    }
  }
  return valid;
}
// hàm kiểm tra nhập lại mật khẩu
function kiemTraPassConfirm(valuePassConfirm, valuePass, idNoti) {
  var valid = true;
  if (valuePassConfirm !== "") {
    if (valuePassConfirm !== valuePass) {
      valid = valid && false;
      document.getElementById(idNoti).style.display = "inline-block";
      document.getElementById(idNoti).innerHTML = "Mật khẩu không trùng khớp";
    }
  }
  return valid;
}
// hàm kiểm tra tên người dùng
function kiemTraName(valueName, idNoti) {
  var valid = true;
  regexChu = /^[A-Za-z\s]*$/;

  if (valueName !== "") {
    if (!regexChu.test(valueName)) {
      valid = valid && false;
      document.getElementById(idNoti).style.display = "inline-block";
      document.getElementById(idNoti).innerHTML = "Tên chỉ có thể là chữ";
    }
  }
  return valid;
}
// hàm kiểm tra số điện thoại
function kiemTraPhone(valuePhone, idNoti) {
  var valid = true;
  var regexChu = /^\d+$/;
  if (valuePhone !== "") {
    if (!regexChu.test(valuePhone)) {
      valid = valid && false;
      document.getElementById(idNoti).style.display = "inline-block";
      document.getElementById(idNoti).innerHTML =
        "Số điện thoại chỉ có thể là số";
    } else if (valuePhone.length != 10 || valuePhone[0] != 0) {
      valid = valid && false;
      document.getElementById(idNoti).style.display = "inline-block";
      document.getElementById(idNoti).innerHTML =
        "Số điện thoại không chính xác";
    }
  }
  return valid;
}
