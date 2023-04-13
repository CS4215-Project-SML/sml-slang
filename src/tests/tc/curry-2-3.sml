val twice = fn f => fn x => f(f(x))
val increase_repeater = fn repeater => fn f => fn x => (repeater(f))(f(x))
val thrice = increase_repeater twice;
