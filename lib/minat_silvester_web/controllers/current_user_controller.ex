defmodule MinatSilvesterWeb.CurrentUserController do
  use MinatSilvesterWeb, :controller


  def show(conn, _) do
    [token] = Plug.Conn.get_req_header(conn, "authorization")
    {:ok, admin, claims} = MinatSilvester.Guardian.resource_from_token(token)
    if admin != nil do
      conn
      |> put_status(:ok)
      |> put_view(MinatSilvesterWeb.CurrentUserView)
      |> render("show.json", admin: admin)
    else
      conn
      |> put_status(:unauthorized)
      |> put_view(MinatSilvesterWeb.CurrentUserView)
      |> render("error.json", error: "Not Logged in")
    end
  end
end
