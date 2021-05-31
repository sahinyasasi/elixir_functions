defmodule Date do
  def date(date) do
    day = date.day
    mnth = date.month

    if day === 24 && mnth === 12 do
      true
    else
      false
    end
  end
end
