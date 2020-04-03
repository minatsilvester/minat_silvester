defmodule MinatSilvesterWeb.Router do
  use MinatSilvesterWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :authenticated do
    plug MinatSilvester.AuthAccessPipeline
  end



  # Other scopes may use custom stacks.
  scope "/api", MinatSilvesterWeb do
    pipe_through :api
    post "/admin_new", RegistrationController, :create
    post "/sessions", SessionController, :create
    delete "/sessions", SessionController, :delete
    post "/blogs", BlogController, :create
    get "/blogs", BlogController, :index
    get "/current_user", CurrentUserController, :show
  end

  # scope "/api", MinatSilvesterWeb do
  #   pipe_through [:api, :authenticated]
  # end

  scope "/", MinatSilvesterWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end

end
