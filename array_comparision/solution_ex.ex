defmodule Compare do
  def array(arr1, arr2) do
    for x <- 0..Enum.count(arr1) do
      cond do
        Enum.at(arr1, x) == Enum.at(arr2, x) -> false
        Enum.at(arr1, x) > Enum.at(arr2, x) -> true
        Enum.at(arr1, x) < Enum.at(arr2, x) -> false
      end
    end
    |> Enum.member?(true)
  end
end
