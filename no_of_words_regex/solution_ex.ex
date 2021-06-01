defmodule Count do
  def regExp(str) do
    exp = ~r/potato/iu

    exp
    |> Regex.scan(str)
    |> Enum.count()
  end
end
