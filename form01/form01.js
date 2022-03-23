function KiemTra()
{
    var tdn = f.TenDangNhap.value;
    var mk = f.MatKhau.value;
    
    if(tdn=='')
    {
        alert('tên đăng nhập không được bỏ trống');
        return false;
    }
    if(mk=='')
    {
        alert('mật khẩu không được bỏ trống');
        return false;
    }
    return true;
}