defmodule Add do
  def addition(num) do
    if is_integer(num) do
      num + 1
    else
      IO.puts("pls enter integer")
    end
  end
end
