fun f (x, y, z) = x + z

fun compose (f, g) = fn x => g(f(x))

fun add_one x = x + 1

fun double x = x * 2

val add_one_then_double = compose (add_one, double);

add_one_then_double 10;
