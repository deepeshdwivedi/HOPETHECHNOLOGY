const users=[];
function create(name,password,email,list,success,err){
var error=null;
    if(name==null || name.length==0)
    {
        if(error==null) error={};
        error["name"]="name required";
    }
    if(password==null || password.length==0){
        if(error==null) error={};
        error["password"]="password required";
    }
    if(email==null || email.length==0){
        if(error==null) error={};
        error["email"]="email required";
    }
    if(error!=null){ err(error);
    return;}
    if(list==null) list=[];
    list.push({"name":name,"password":password,"email":email});
    success();
}
function login(email,password,list,success,err){
    var error=null;
    if(list==null) 
    {
        if(error==null) error={};
        error["error"]="no user exists";
    err(error);
    return;
    }
    if(password==null || password.length==0){
        if(error==null) error={};
        error["password"]="password required";
    }
    if(email==null || email.length==0){
        if(error==null) error={};
        error["email"]="email required";
    }
    if(error!=null){ err(error);
    return;}
    var user=list.find(function(e){if(e.email==email) return e;});
    if(user==null)
    {
        if(error==null) error={};
        error["email"]="invalid email";
        err(error);
        return;
    }
    if(user.password!=password){
        if(error==null) error={};
        error["password"]="invalid password";
        err(error);
        return;
    }
    success();
}
function forgot(email,list,success,err){
    var error=null;
    if(list==null) 
    {
        if(error==null) error={};
        error["error"]="no user exists";
    err(error);
    return;
    }
    if(email==null || email.length==0){
        if(error==null) error={};
        error["email"]="email required";
    }
    if(error!=null){ err(error);
    return;}
    var user=list.find(function(e){if(e.email==email) return e;});
    if(user==null)
    {
        if(error==null) error={};
        error["email"]="invalid email";
        err(error);
        return;
    }
    user.password=null;
    success();

}
function reset(email,list,success,err)
{
    var error=null;
    if(list==null) 
    {
        if(error==null) error={};
        error["error"]="no user exists";
    err(error);
    return;
    }
    if(email==null || email.length==0){
        if(error==null) error={};
        error["email"]="email required";
    }
    if(error!=null){ err(error);
    return;}
    var user=list.find(function(e){if(e.email==email) return e;});
    if(user==null)
    {
        if(error==null) error={};
        error["email"]="invalid email";
        err(error);
        return;
    }
    if(user.password!=null){
        if(error==null) error={};
         error["error"]="invalid request";
         err(error);
        return ;
        }
    success();

}


module.exports={
"create":create,
"login":login,
"forgot":forgot,
"reset":reset

};