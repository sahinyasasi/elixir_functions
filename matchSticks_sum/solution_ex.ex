defmodule Sum do
  def sum(num) do
    if num === 0 do
      0
    else
      num * 6 - num + 1
    end
  end
end
