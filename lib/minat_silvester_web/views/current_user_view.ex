defmodule MinatSilvesterWeb.CurrentUserView do
  use MinatSilvesterWeb, :view

  def render("show.json", %{admin: admin}) do
    %{
      admin: admin,
    }
  end

  def render("error.json", %{error: error}) do
    %{
      error: error,
    }
  end

end
