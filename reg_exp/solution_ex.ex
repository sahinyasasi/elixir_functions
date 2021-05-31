defmodule RegExp do
  def regExp(str) do
    exp = ~r/red\sflag|blue\sflag/iu
    Regex.scan(exp, str)
  end
end
