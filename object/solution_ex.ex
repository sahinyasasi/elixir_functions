defmodule Object do
  def addName(obj, name, value) do
    Map.put(obj, name, value)
  end
end
