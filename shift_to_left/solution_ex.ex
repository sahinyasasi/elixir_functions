defmodule Shift do
  def product(num, power) do
    (:math.pow(2, power) * num)
    |> round()
  end
end
