defmodule Array do
  def nested(arr1, arr2) do
    max = Enum.max(arr1) < Enum.max(arr2)
    min = Enum.min(arr2) < Enum.min(arr1)

    case min && max do
      true ->
        true

      false ->
        false
    end
  end
end
