defmodule MinatSilvester.Repo.Migrations.CreateBlogs do
  use Ecto.Migration

  def change do
    create table(:blogs) do
      add :title, :string
      add :description, :text
      add :genre, :string
      add :link, :string

      timestamps()
    end

  end
end
