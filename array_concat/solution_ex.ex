defmodule Concat do
  def array(arr1, arr2) do
    [Enum.at(arr1, 0)] ++ arr2 ++ [Enum.at(arr1, 1)]
  end

  def array2(arr1, arr2) do
    [Enum.at(arr1, 0) | arr2 | Enum.at(arr1, 1)]
  end
end
