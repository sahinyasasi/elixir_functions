defmodule Value do
  def value(arr) do
    min = Enum.min(arr)
    max = Enum.max(arr)
    [min, max]
  end
end
