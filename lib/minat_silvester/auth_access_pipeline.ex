defmodule MinatSilvester.AuthAccessPipeline do
  use Guardian.Plug.Pipeline, otp_app: :minat_silvester

  plug Guardian.Plug.VerifyHeader
  plug Guardian.Plug.VerifySession
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource, allow_blank: true
end
