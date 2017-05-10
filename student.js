/**
 * Created by 机械革命 on 2017/5/9.
 */
function add(name) {
    name.forEach(function(item,index){
        console.log("学生：" +index +" "+ item);
    });
}
exports.add = add;