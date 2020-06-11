# frozen_string_literal: true

class PetsController < ApplicationController
  before_action :authorize_request, only: %i[create update destroy]
  before_action :set_pet, only: %i[show update destroy]

  # GET /pets
  def index
    @pets = Pet.all

    render json: @pets
  end

  # GET /pets/1
  def show
    render json: @pet, include: :category
  end

  # POST /pets
  def create
    @pet = @current_user.pets.create(pet_params)
    @pet.user = @current_user
    @pet.category = Category.find(7)

    if @pet.save
      render json: @pet, status: :created
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pets/1
  def update
    @pet = current_user.pets.find(params[:id])
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pets/1
  def destroy
    @pet.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_pet
    @pet = Pet.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def pet_params
    params.require(:pet).permit(:name, :image, :breed, :age, :description)
  end
end
