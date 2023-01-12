const connection=require('./db')

module.exports.verifyUser=function(fn,data){
    let sql=`select password from user_info where account="${data.account}"`
    connection.query(sql,fn)
}