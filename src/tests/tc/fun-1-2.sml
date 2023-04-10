fun f (x, y, z) = x + z
fun compose (f, g) = fn x => g(f(x))
