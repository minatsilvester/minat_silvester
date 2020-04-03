defmodule MinatSilvesterWeb.SessionView do
  use MinatSilvesterWeb, :view

  def render("show.json", %{jwt: jwt, admin: admin}) do
    IO.inspect("show rendered")
    %{
      jwt: jwt,
      admin: admin,
    }
  end

  def render("error.json", %{reason: reason}) do
    %{error: reason}
  end

  def render("delete.json", _) do
    %{ok: true}
  end

  def render("forbidden.json", %{error: error}) do
    %{error: error}
  end

end
