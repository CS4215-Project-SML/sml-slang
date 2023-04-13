fun mp (nil, f) = nil | mp (x::xs, f) = (f x)::xs;
