fun fac n =
  let fun fac_iter (0, v) = v
    | fac_iter (n, v) = fac_iter(n - 1, v * n)
  in
    fac_iter (n, 1)
  end;
fac 5;
