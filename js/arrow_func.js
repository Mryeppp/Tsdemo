//箭头函数的参数
//只有一个参数时省略() 只有一个函数语句时省略{}
const fn = a => console.log(a)
const fn_a = (a) => {
	console.log(a)
}

fn("string")
fn_a("string")
