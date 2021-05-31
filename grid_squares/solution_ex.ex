defmodule Squares do
  def squares(n) do
    case is_integer(n) do
      true ->
        (n * (n + 1) * (2 * n + 1))
        |> div(6)

      false ->
        IO.puts("enter an integer")
    end
  end
end
