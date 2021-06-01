defmodule Array do
  def count(arr) do
    Enum.filter(arr, fn x -> x == true end)
    |> Enum.count()
  end

  def count2(arr) do
    Enum.find(arr, &(&1 == true))
  end
end
