fun mp (nil, f) = nil | mp (x::xs, f) = (f x)::mp(xs, f);
mp ([1, 2, 3], fn x => x + 1);
