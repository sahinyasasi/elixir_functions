defmodule Nested do
  def function(str) do
    fun(str)
  end

  defp fun(str) do
    str
  end
end
