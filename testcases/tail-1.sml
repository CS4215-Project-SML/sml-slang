fun fac_iter (0, v) = v | fac_iter (n, v) = fac_iter (n - 1, v * n);
fac_iter (5, 1);
