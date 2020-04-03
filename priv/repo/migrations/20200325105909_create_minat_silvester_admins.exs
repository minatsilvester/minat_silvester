defmodule MinatSilvester.Repo.Migrations.CreateMinatSilvesterAdmins do
  use Ecto.Migration

  def change do
    create table(:minat_silvester_admins) do
      add :name, :string
      add :email, :string
      add :approved, :string
      add :password, :string

      timestamps()
    end

  end
end
