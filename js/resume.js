function author() {   
var pwd =""  
pwd = prompt("输入密码才拥有权限查看!");
if (pwd == "admin"){
    alert("欢迎访问徐春飞的个人简历！");}
else{
    alert("密码错误");
    location.href="http://xuchunfei.github.io/xuchunfei"
};
}

author();