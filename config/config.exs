# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :minat_silvester,
  ecto_repos: [MinatSilvester.Repo]

# Configures the endpoint
config :minat_silvester, MinatSilvesterWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "fHklCIQYM2gvZBSavMEvI58aA4UYk/PKIfhiVCfs+sD4/THOEQW0jhDH9o4k8JjD",
  render_errors: [view: MinatSilvesterWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: MinatSilvester.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason


config :minat_silvester, MinatSilvester.Guardian,
       issuer: "minat_silvester",
       secret_key: "WRy6M1Uo2VcKOzn35Fow2A0JoT+FBEoo0ftmOPfzaQ2kFLyIM8pEjIna/EFwgmnw"

config :minat_silvester, MinatSilvester.AuthAccessPipeline,
        module: MinatSilvester.Guardian,
        error_handler: MinatSilvester.AuthErrorHandler       

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
