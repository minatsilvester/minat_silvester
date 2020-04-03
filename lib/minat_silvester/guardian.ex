defmodule MinatSilvester.Guardian do
  use Guardian, otp_app: :minat_silvester
  alias MinatSilvester.Repo
  alias MinatSilvester.Helpers
  alias MinatSilvester.MinatSilvester.Admin

  def subject_for_token(admin = %Admin{}, _) do
    sub = to_string(admin.id)
    {:ok, sub}
  end

  def subject_for_token(_, _), do: {:error, "Unknown Resource Type"}



  def resource_from_claims(claims) do
    id = claims["sub"]
    IO.inspect(id)
    admin = Helpers.get_resource_by_id(id)
    {:ok, admin}
  end

  def resource_from_claims(_), do: {:error, "Unknown resource type"}

end
