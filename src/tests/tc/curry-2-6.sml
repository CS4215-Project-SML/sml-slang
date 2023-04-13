val twice = fn f => fn x => f(f(x))
val increase_repeater = fn repeater => fn f => fn x => (repeater(f))(f(x))
val thrice = increase_repeater twice;

val add_one = fn x => x + 1;
val add_three = thrice add_one;

add_three 0;
