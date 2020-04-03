defmodule MinatSilvesterWeb.BlogController do
  use MinatSilvesterWeb, :controller
  alias MinatSilvester.Repo
  alias MinatSilvester.MinatSilvester.Blog

  def create(conn, %{"blog" => blog_params}) do
    changeset = Blog.changeset(%Blog{}, blog_params)

    case Repo.insert(changeset) do
      {:ok, blog} ->
        conn
        |> put_status(:created)
        |> put_view(MinatSilvesterWeb.BlogView)
        |> render("show.json", blog: blog)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entry)
        |> put_view(MinatSilvesterWeb.BlogView)
        |> render("error.json", changeset: changeset)
    end
  end

  def index(conn, _) do
    blogs = Repo.all(Blog)
    if blogs != [] do
      conn
      |> put_status(:ok)
      |> put_view(MinatSilvesterWeb.BlogView)
      |> render("index.json", blogs: blogs)
    else
      conn
      |> put_status(:error)
      |> put_view(MinatSilvesterWeb.BlogView)
      |> render("error.json", error: "empty")  
    end
  end

end
