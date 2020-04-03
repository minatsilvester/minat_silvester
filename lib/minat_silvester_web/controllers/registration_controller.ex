defmodule MinatSilvesterWeb.RegistrationController do
  use MinatSilvesterWeb, :controller
  alias MinatSilvester.Repo
  alias MinatSilvester.MinatSilvester.Admin

  def create(conn, %{"admin" => admin_params}) do
    changeset = Admin.changeset(%Admin{}, admin_params)

    case Repo.insert(changeset) do
      {:ok, admin} ->
        IO.inspect(admin)
        conn
        |> put_status(:created)
        |> put_view(MinatSilvesterWeb.RegistrationView)
        |> render("show.json", admin: admin)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessabke_entry)
        |> render(MinatSilvesterWeb.RegistrationView, "error.json", changeset: changeset)
    end
  end
end
