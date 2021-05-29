defmodule Triangle do
  def nextEdge(side1, side2) do
    if is_integer(side1) && is_integer(side2) do
      side1 + side2 - 1
    else
      IO.puts("enter integer")
    end
  end
end
