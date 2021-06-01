defmodule Sort do
  def sort(drinks) do
    Enum.sort_by(drinks, & &1.price)
  end
end
