defmodule MinatSilvesterWeb.BlogView do
  use MinatSilvesterWeb, :view

  def render("show.json", %{blog: blog}) do
    %{
      blog: blog,
    }
  end

  def render("index.json", %{blogs: blogs}) do
    %{
      blogs: blogs,
    }
  end

  def render("error.json", %{error: error}) do
    %{
      error: error,
    }
  end

  def render("error.json", %{changeset: changeset}) do
    errors = Enum.map(changeset.errors, fn {field, detail} ->
      %{} |> Map.put(field, render_detail(detail))
    end)

    %{
      errors: errors
    }
  end

  defp render_detail({message, values}) do
    Enum.reduce(values, message, fn {k, v}, acc -> String.replace(acc, "%{#{k}}", to_string(v)) end)
  end

  defp render_detail(message) do
    message
  end
end
