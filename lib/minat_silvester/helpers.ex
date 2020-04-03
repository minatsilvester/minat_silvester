defmodule MinatSilvester.Helpers do
  alias MinatSilvester.Repo
  alias MinatSilvester.MinatSilvester.Admin

  def get_resource_by_id(id) do
    Repo.get!(Admin, String.to_integer(id))
  end

  def authenticate_by_email_password(%{"email" => email, "password" => given_password}) do
    admin = Repo.get_by(Admin, email: email)

    cond do
      admin && Bcrypt.verify_pass(given_password, admin.password) && admin.approved == "yes" ->
        {:ok, admin}
      admin && Bcrypt.verify_pass(given_password, admin.password) ->
        {:ok, "Not Aproved"}
      admin ->
        {:error, "Wrong Password"}
      true ->
        {:error, "Account does not exist"}
    end
  end

end
