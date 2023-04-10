val x = [(1, 2), (3, 4), (5, 6)];
fun add_first ((x, y)::xs) = x + y;
add_first x;
