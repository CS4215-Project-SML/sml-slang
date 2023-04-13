fun fac x = case x of
    0 => 1
  | x => x * fac (x - 1);

fac 5;
