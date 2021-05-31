defmodule Swap do
  def swap(num) do
    newNum =
      num
      |> Integer.digits()
      |> Enum.reverse()
      |> Enum.join("")
      |> String.to_integer()

    if newNum > num do
      false
    else
      true
    end
  end
end
