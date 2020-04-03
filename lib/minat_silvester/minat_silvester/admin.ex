defmodule MinatSilvester.MinatSilvester.Admin do
  use Ecto.Schema
  import Ecto.Changeset

   @derive {Jason.Encoder, only: [:id, :name, :email, :approved]}

  schema "minat_silvester_admins" do
    field :email, :string
    field :name, :string
    field :password, :string
    field :approved, :string, default: "no"

    timestamps()
  end

  @doc false
  def changeset(admin, attrs) do
    admin
    |> cast(attrs, [:name, :email, :password, :approved])
    |> validate_required([:name, :email, :password])
    |> validate_format(:email, ~r/@/)
    |> check_admin
    |> generate_encrypted_password
  end

  def check_admin(current_changeset) do
    case current_changeset do
      %Ecto.Changeset{valid?: true, changes: %{email: email}} ->
        if email == "minatsilvester@gmail.com" do
          new_changeset = put_change(current_changeset, :approved, "yes")
          new_changeset
        else
           current_changeset
        end
      _ ->
          current_changeset
    end
  end

  defp generate_encrypted_password(current_changeset) do
    case current_changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        new_changeset = put_change(current_changeset, :password, Bcrypt.hash_pwd_salt(password))
        new_changeset
      _ ->
        current_changeset
    end
  end
end
