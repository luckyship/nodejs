/**
 * Created by 机械革命 on 2017/5/9.
 */
var student = require('./student')
var teacher = require('./teacher')

function show() {
    teacher.add("xx");
    student.add(["aa","bb"]);
}

exports.show = show;