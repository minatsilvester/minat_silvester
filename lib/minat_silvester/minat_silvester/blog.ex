defmodule MinatSilvester.MinatSilvester.Blog do
  use Ecto.Schema
  import Ecto.Changeset

   @derive {Jason.Encoder, only: [:id, :description, :genre, :link, :title]}

  schema "blogs" do
    field :description, :string
    field :genre, :string
    field :link, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(blog, attrs) do
    blog
    |> cast(attrs, [:title, :description, :genre, :link])
    |> validate_required([:title, :description, :genre, :link])
  end
end
