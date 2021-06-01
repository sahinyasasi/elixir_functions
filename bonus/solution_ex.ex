defmodule Dice do
  def bonus(a, b) do
    cond do
      a >= b -> false
      a + 6 < b -> false
      true -> true
    end
  end
end
