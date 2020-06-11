# frozen_string_literal: true

class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :signin

  def signin
    @user = User.find_by_username(signin_params[:username])
    if @user.authenticate(signin_params[:password])
      @token = encode(user_id: @user.id)
      render json: { user: @user, token: @token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  def verify
    render json: @current_user, status: :ok
  end

  private

  def signin_params
    params.require(:auth).permit(:username, :password)
  end
end
