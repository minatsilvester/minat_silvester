defmodule MinatSilvesterWeb.SessionController do
  use MinatSilvesterWeb, :controller

  def create(conn, %{"session" => session_params}) do
    case MinatSilvester.Helpers.authenticate_by_email_password(session_params) do
      {:ok, admin} ->
        {:ok, jwt, _claims} = admin |> MinatSilvester.Guardian.encode_and_sign
        conn
        |> put_status(:created)
        |> put_view(MinatSilvesterWeb.SessionView)
        |> render("show.json", jwt: jwt, admin: admin)
      {:error, reason} ->
        conn
        |> put_status(401)
        |> put_view(MinatSilvesterWeb.SessionView)
        |> render("error.json", reason: reason)
    end
  end

  def delete(conn, _) do
    [token] = Plug.Conn.get_req_header(conn, "authorization")
    {:ok, claims} = MinatSilvester.Guardian.revoke(token)
    conn
    |> render("delete.json")
  end

end
