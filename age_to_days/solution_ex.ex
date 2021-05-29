defmodule Age do
  @year 365
  def calcAge(age) do
    if is_integer(age) do
      age * @year
    else
      IO.puts("Enter integer")
    end
  end
end
