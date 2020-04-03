defmodule MinatSilvester.Repo do
  use Ecto.Repo,
    otp_app: :minat_silvester,
    adapter: Ecto.Adapters.Postgres
end
