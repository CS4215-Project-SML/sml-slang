fun fac n =
  let fun fac_iter (n, v) = if n = 0 then v else fac_iter(n - 1, v * n)
  in
    fac_iter (n, 1)
  end;
fac 5;
