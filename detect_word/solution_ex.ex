defmodule Word do
  def word(str) do
    str
    |> String.split("", trim: true)
    |> Enum.filter(fn x -> x === String.downcase(x) end)
    |> Enum.join()
  end
end
