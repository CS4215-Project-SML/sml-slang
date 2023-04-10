fun get_len nil = 0 | get_len (x::xs) = 1 + get_len xs;
get_len [1, 2, 3];
get_len ["a", "b", "c"];
