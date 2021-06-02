defmodule Lodash do
  def compact(arr) do
    Enum.reject(arr, fn x -> x == false || x == "null" end)
  end
end
